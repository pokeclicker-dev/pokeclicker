class Discord implements Saveable {
    defaults: Record<string, any> = {
        ID: null,
        username: null,
    };
    saveKey = 'discord';
    clientID = '$DISCORD_CLIENT_ID';
    uri = '$DISCORD_LOGIN_URI';
    ID: KnockoutObservable<number> = ko.observable(null);
    username: KnockoutObservable<string> = ko.observable(null);
    codes: Array<DiscordCode> = [
        new DiscordPokemonCode(pokemonMap['Unown (D)'], 700, 'Alternate form of Unown'),
        new DiscordPokemonCode(pokemonMap['Unown (I)'], 700, 'Alternate form of Unown'),
        new DiscordPokemonCode(pokemonMap['Unown (S)'], 700, 'Alternate form of Unown'),
        new DiscordPokemonCode(pokemonMap['Unown (C)'], 700, 'Alternate form of Unown'),
        new DiscordPokemonCode(pokemonMap['Unown (O)'], 700, 'Alternate form of Unown'),
        new DiscordPokemonCode(pokemonMap['Unown (R)'], 700, 'Alternate form of Unown'),
    ];

    get enabled(): boolean {
        try {
            return !!JSON.parse('$DISCORD_ENABLED');
        } catch (e) {
            return false;
        }
    }

    constructor() {
        // User logged in, need to get details
        const $_GET: Record<string, any> = {};
        location.search.substr(1).split('&').map(el => el.split('=')).forEach(el => $_GET[el[0]] = el[1]);
        if ($_GET.code) {
            $.ajax({
                data: $_GET,
                type: 'get',
                url: 'https://discord.redsparr0w.com/pokeclicker',
                crossDomain: true,
                dataType: 'json',
                success: data => {
                    if (data && data.id) {
                        this.ID(data.id);
                        this.username(`${data.username}#${data.discriminator}`);
                        Notifier.notify({ title: `Welcome ${this.username()}`, message: 'Successfully logged in to Discord!', type: GameConstants.NotificationOption.success, timeout:GameConstants.MINUTE });
                    }
                },
                complete: () => {
                    window.history.replaceState('', '', `${location.origin + location.pathname}`);
                },
            });
        }
    }

    login() {
        location.href = `https://discord.com/oauth2/authorize?client_id=${this.clientID}&redirect_uri=${location.origin + location.pathname}&response_type=code&scope=identify&prompt=consent`;
    }

    logout() {
        this.ID(this.defaults.id);
        this.username(this.defaults.username);
    }

    fromJSON(json): void {
        if (!json || !json.ID) {
            return;
        }
        
        this.ID(json.ID || this.defaults.ID);
        this.username(json.username || this.defaults.username);
    }

    toJSON(): Record<string, any> {
        return {
            ID: this.ID(),
            username: this.username(),
        };
    }

}

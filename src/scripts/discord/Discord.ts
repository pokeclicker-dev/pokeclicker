/* global $DISCORD_ENABLED */
class Discord implements Saveable {
    defaults: Record<string, any>;
    saveKey = 'discord';
    clientID = '$DISCORD_CLIENT_ID';
    uri = '$DISCORD_LOGIN_URI';
    ID: number;
    username: string;

    get enabled(): boolean {
        try {
            return !!JSON.parse('$DISCORD_ENABLED');
        } catch (e) {
            return false;
        }
    }

    constructor() {
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
                        this.ID = data.id;
                        this.username = `${data.username}#${data.discriminator}`;
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
        delete this.ID;
        delete this.username;
    }

    fromJSON(json): void {
        if (!json || !json.ID) {
            return;
        }
        
        this.ID = json.ID;
        this.username = json.username;
    }

    toJSON(): Record<string, any> {
        return {
            ID: this.ID,
            username: this.username,
        };
    }

}

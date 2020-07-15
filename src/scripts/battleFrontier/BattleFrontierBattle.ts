///<reference path="../Battle.ts"/>
class BattleFrontierBattle extends Battle {
    static pokemonIndex: KnockoutObservable<number> = ko.observable(0);
    static trainerIndex: KnockoutObservable<number> = ko.observable(0);
    static totalPokemons: KnockoutObservable<number> = ko.observable(0);
    // IDK
    static trainer: KnockoutObservable<number> = ko.observable(0);

    /**
     * Award the player with exp, and go to the next pokemon
     */
    public static defeatPokemon() {
        App.game.party.gainExp(this.enemyPokemon().exp, this.enemyPokemon().level, false);
        // TODO: figure this shit out aswell
        App.game.breeding.progressEggsBattle(this.trainerIndex(), player.region);
        // TODO: Still gain shards?
        this.gainShardsAfterBattle();
        GameHelper.incrementObservable(this.pokemonIndex);

        if (this.pokemonIndex() >= this.trainer[this.trainerIndex()].pokemons.length) {
            // Move on to next trainer, add 20s?, do something
        } else {
            // Create the next Pokemon to fight
            this.generateNewEnemy();
        }
    }

    /**
     * Generate a new enemy based on the current route and region.
     * Reset the counter.
     */
    public static generateNewEnemy() {
        this.counter = 0;
        // TODO: Do we want any random Pokemon from Kanto → Hoenn
        const enemy = pokemonMap.random(GameConstants.TotalPokemonsPerRegion[player.highestRegion()]);
        // TODO: figure out a health formula
        const health = Math.floor(Math.random() * 1e9);
        // TODO: figure out a level formula
        const level = Math.floor(Math.random() * 100);
        // TODO: this better
        const enemyPokemon = new BattlePokemon(enemy.name, enemy.id, enemy.type[0] || PokemonType.None, enemy.type[1] || PokemonType.None, health, level, enemy.catchRate, enemy.exp, 1, false);
        this.enemyPokemon(enemyPokemon);
    }


    public static pokemonsDefeatedComputable: KnockoutComputed<number> = ko.pureComputed(function () {
        return this.pokemonIndex();
    });

    public static pokemonsUndefeatedComputable: KnockoutComputed<number> = ko.pureComputed(function () {
        return this.totalPokemons() - this.pokemonIndex();
    })
}

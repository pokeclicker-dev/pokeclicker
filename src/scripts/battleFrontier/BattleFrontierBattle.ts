///<reference path="../Battle.ts"/>
class BattleFrontierBattle extends Battle {
    static pokemonIndex: KnockoutObservable<number> = ko.observable(0);
    static stage: KnockoutObservable<number> = ko.observable(1); // Start at stage 1
    static totalPokemons: KnockoutObservable<number> = ko.observable(3);
    
    // Looks like we don't need this, unless we want to put a random trainer name or similar
    static trainer: KnockoutObservable<number> = ko.observable(0);

    static counter = 0;

    /**
     * Award the player with exp, and go to the next pokemon
     */
    public static defeatPokemon() {
        App.game.party.gainExp(this.enemyPokemon().exp, this.enemyPokemon().level, false);
        // TODO: figure this shit out aswell
        App.game.breeding.progressEggsBattle(this.stage(), player.region);
        // TODO: Still gain shards?
        this.gainShardsAfterBattle();
        // Next pokemon
        GameHelper.incrementObservable(this.pokemonIndex);

        if (this.pokemonIndex() >= 3) {
            // TODO: is this all?..
            // Move on to next stage, reset timer
            BattleFrontierRunner.resetTimer();
            GameHelper.incrementObservable(this.stage);
            this.pokemonIndex(0);
        }

        // If player still challenging Battle Frontier, keep generating Pokemon
        if (BattleFrontierRunner.started()) {
            // Create the next Pokemon to fight
            this.generateNewEnemy();
        }
    }

    /**
     * Generate a new enemy based on the current route and region.
     * Reset the counter.
     */
    public static generateNewEnemy() {
        // TODO: Do we want any random Pokemon from Kanto → Hoenn/highest region
        const enemy = pokemonMap.random(GameConstants.TotalPokemonsPerRegion[player.highestRegion()]);
        // TODO: figure out a health formula
        const health = PokemonFactory.routeHealth(this.stage() + 10, GameConstants.Region.kanto);
        // TODO: figure out a level formula
        const level = Math.min(100, this.stage());
        // TODO: figure out a money formula
        // Award 0 money, per pokemon defeated, award money at the end?
        const money = 0;
        const shiny = PokemonFactory.generateShiny(GameConstants.SHINY_CHANCE_BATTLE);

        // TODO: this better
        const enemyPokemon = new BattlePokemon(enemy.name, enemy.id, enemy.type[0] || PokemonType.None, enemy.type[1] || PokemonType.None, health, level, 0, enemy.exp, money, shiny);
        this.enemyPokemon(enemyPokemon);
    }
}

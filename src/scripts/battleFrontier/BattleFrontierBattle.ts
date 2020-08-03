///<reference path="../Battle.ts"/>
class BattleFrontierBattle extends Battle {
    static pokemonIndex: KnockoutObservable<number> = ko.observable(0);
    static totalPokemons: KnockoutObservable<number> = ko.observable(3);
    
    // Looks like we don't need this, unless we want to put a random trainer name or similar
    static trainer: KnockoutObservable<number> = ko.observable(0);

    static counter = 0;

    // Override pokemon attack method so we can ignore the region multiplier
    public static pokemonAttack() {
        // Limit pokemon attack speed, Only allow 1 attack per 950ms
        const now = Date.now();
        if (this.lastPokemonAttack > now - 950) {
            return;
        }
        this.lastPokemonAttack = now;
        if (!this.enemyPokemon()?.isAlive()) {
            return;
        }
        this.enemyPokemon().damage(App.game.party.calculatePokemonAttack(this.enemyPokemon().type1, this.enemyPokemon().type2, true));
        if (!this.enemyPokemon().isAlive()) {
            this.defeatPokemon();
        }
    }

    /**
     * Award the player with exp, and go to the next pokemon
     */
    public static defeatPokemon() {
        App.game.party.gainExp(this.enemyPokemon().exp, BattleFrontierRunner.stage(), false);
        App.game.breeding.progressEggsBattle(BattleFrontierRunner.stage(), GameConstants.Region.kanto);
        // TODO: Still gain shards?
        this.gainShardsAfterBattle();
        // Next pokemon
        GameHelper.incrementObservable(this.pokemonIndex);

        if (this.pokemonIndex() >= 3) {
            // TODO: is this all?..
            // Move on to next stage, reset timer
            BattleFrontierRunner.nextStage();
            this.pokemonIndex(0);
        }

        // If player still challenging Battle Frontier, keep generating Pokemon
        if (BattleFrontierRunner.started()) {
            // Create the next Pokemon to fight
            this.generateNewEnemy();
        } else {
            this.enemyPokemon(null);
        }
    }

    /**
     * Generate a new enemy based on the current route and region.
     * Reset the counter.
     */
    public static generateNewEnemy() {
        // TODO: Do we want any random Pokemon from Kanto → Hoenn/highest region
        const enemy = pokemonMap.random(GameConstants.TotalPokemonsPerRegion[player.highestRegion()]);
        const health = PokemonFactory.routeHealth(BattleFrontierRunner.stage() + 10, GameConstants.Region.kanto);
        const level = Math.min(100, BattleFrontierRunner.stage());
        // Don't award money per pokemon defeated, award money at the end
        const money = 0;
        const shiny = PokemonFactory.generateShiny(GameConstants.SHINY_CHANCE_BATTLE);

        // TODO: this better
        const enemyPokemon = new BattlePokemon(enemy.name, enemy.id, enemy.type[0] || PokemonType.None, enemy.type[1] || PokemonType.None, health, level, 0, enemy.exp, money, shiny);
        this.enemyPokemon(enemyPokemon);
    }
}

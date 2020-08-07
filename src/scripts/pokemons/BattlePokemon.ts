class BattlePokemon implements EnemyPokemonInterface {
    name: string;
    id: number;
    type1: PokemonType;
    type2: PokemonType;
    health: KnockoutObservable<number>;
    maxHealth: KnockoutObservable<number>;
    healthPercentage: KnockoutObservable<number>;
    level: number;
    catchRate: number;
    exp: number;
    money: number;
    shiny: boolean;
    shardReward: number;

    /**
     * In case you want to manually create a Pokémon instead of generating it from the route number
     * @param name Pokémon name
     * @param id Pokémon
     * @param type1 First type of the Pokémon
     * @param type2 Second type of the Pokémon
     * @param maxHealth max health that the Pokémon can have
     * @param level level is 2 times the current route
     * @param catchRate base chance of catching this Pokémon
     * @param exp base exp reward for defeating this Pokémon
     * @param money exp base exp reward for defeating this Pokémon
     * @param shiny
     */
    constructor(name: string, id: number, type1: PokemonType, type2: PokemonType, maxHealth: number, level: number, catchRate: number, exp: number, money: number, shiny: boolean, shardReward = 1) {
        this.name = name;
        this.id = id;
        this.type1 = type1;
        this.type2 = type2;
        this.health = ko.observable(maxHealth);
        this.maxHealth = ko.observable(maxHealth);
        this.healthPercentage = ko.observable(100);
        this.level = level;
        this.catchRate = catchRate;
        this.exp = exp;
        this.money = money;
        this.shiny = shiny;
        this.shardReward = shardReward;
    }

    public isAlive(): boolean {
        return this.health() > 0;
    }

    /**
     * Lost health without
     * @param damage
     */
    public damage(damage: number): void {
        this.health(Math.max(0, this.health() - damage));
        this.healthPercentage(Math.floor(this.health() / this.maxHealth() * 100));
    }

    public defeat(trainer = false): void {
        GameHelper.incrementObservable(App.game.statistics.pokemonDefeated[this.id]);
        GameHelper.incrementObservable(App.game.statistics.totalPokemonDefeated);
        if (this.shiny) {
            GameHelper.incrementObservable(App.game.statistics.shinyPokemonDefeated[this.id]);
            GameHelper.incrementObservable(App.game.statistics.totalShinyPokemonDefeated);
        }

        if (this.money) {
            App.game.wallet.gainMoney(this.money);
        }
        App.game.party.gainExp(this.exp, this.level, trainer);
        App.game.shards.gainShards(this.shardReward, this.type1);
        App.game.shards.gainShards(this.shardReward, this.type2);
    }
}



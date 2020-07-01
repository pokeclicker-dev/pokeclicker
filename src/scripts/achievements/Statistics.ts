///<reference path="../oakItems/OakItems.ts"/>
///<reference path="../farming/BerryType.ts"/>
///<reference path="../pokemons/PokemonType.ts"/>
class Statistics {

    clicks: KnockoutObservable<number>;
    hatchedEggs: KnockoutObservable<number>;
    pokemonCaptured: KnockoutObservable<number>;
    pokemonDefeated: KnockoutObservable<number>;
    pokemonEncountered: KnockoutObservable<number>;
    shinyPokemonCaptured: KnockoutObservable<number>;
    shinyPokemonDefeated: KnockoutObservable<number>;
    shinyPokemonEncountered: KnockoutObservable<number>;
    totalPokemonCaptured: Array<KnockoutObservable<number>>;
    totalPokemonDefeated: Array<KnockoutObservable<number>>;
    totalPokemonEncountered: Array<KnockoutObservable<number>>;
    totalShinyPokemonCaptured: Array<KnockoutObservable<number>>;
    totalShinyPokemonDefeated: Array<KnockoutObservable<number>>;
    totalShinyPokemonEncountered: Array<KnockoutObservable<number>>;
    gymsDefeated: Array<KnockoutObservable<number>>;
    dungeonsCleared: Array<KnockoutObservable<number>>;
    digItems: KnockoutObservable<number>; // Total treasure found in underground
    digDeeper: KnockoutObservable<number>; // Total underground layers completed
    totalMoney: KnockoutObservable<number>;
    totalTokens: KnockoutObservable<number>;
    totalQuestPoints: KnockoutObservable<number>;
    totalDiamonds: KnockoutObservable<number>;
    totalFarmPoints: KnockoutObservable<number>;
    pokeballsUsed: Array<KnockoutObservable<number>>;
    pokeballsBought: Array<KnockoutObservable<number>>;
    totalShards: Array<KnockoutObservable<number>>;
    oakItemUses: Array<KnockoutObservable<number>>;
    berriesHarvested: Array<KnockoutObservable<number>>;
    routeKills: Array<KnockoutObservable<number>>;

    private static readonly arraySizes = {
        'gymsDefeated': GameConstants.RegionGyms.flat().length,
        'dungeonsCleared': GameConstants.RegionDungeons.flat().length,
        'pokeballsUsed': GameHelper.enumLength(GameConstants.Pokeball) - 1,   // remove "None" pokeball type
        'pokeballsBought': GameHelper.enumLength(GameConstants.Pokeball) - 1, // remove "None" pokeball type
        'totalShards': GameHelper.enumLength(PokemonType) - 1,  // remove "None" pokemon type
        'oakItemUses': GameHelper.enumLength(OakItems.OakItem),
        'berriesHarvested': GameHelper.enumLength(BerryType) - 1,  // remove "None" berry
        'routeKills': GameConstants.HIGHEST_ROUTE_NUMBER + 1, // Add 1 for "route 0"
        'pokemonCaptured': GameConstants.TotalPokemonsPerRegion[GameConstants.MAX_AVAILABLE_REGION] + 1,
        'pokemonDefeated': GameConstants.TotalPokemonsPerRegion[GameConstants.MAX_AVAILABLE_REGION] + 1,
        'pokemonEncountered': GameConstants.TotalPokemonsPerRegion[GameConstants.MAX_AVAILABLE_REGION] + 1,
        'shinyPokemonCaptured': GameConstants.TotalPokemonsPerRegion[GameConstants.MAX_AVAILABLE_REGION] + 1,
        'shinyPokemonDefeated': GameConstants.TotalPokemonsPerRegion[GameConstants.MAX_AVAILABLE_REGION] + 1,
        'shinyPokemonEncountered': GameConstants.TotalPokemonsPerRegion[GameConstants.MAX_AVAILABLE_REGION] + 1,
    };

    constructor(saved = {}) {
        const observables = [
            'clicks',
            'hatchedEggs',
            'digItems',
            'digDeeper',
            'totalMoney',
            'totalTokens',
            'totalQuestPoints',
            'totalDiamonds',
            'totalFarmPoints',
            'totalPokemonCaptured',
            'totalPokemonDefeated',
            'totalPokemonEncountered',
            'totalShinyPokemonCaptured',
            'totalShinyPokemonDefeated',
            'totalShinyPokemonEncountered',
        ];

        const arrayObservables = [
            'gymsDefeated',
            'dungeonsCleared',
            'pokeballsUsed',
            'pokeballsBought',
            'totalShards',
            'oakItemUses',
            'berriesHarvested',
            'routeKills',
            'pokemonCaptured',
            'pokemonDefeated',
            'pokemonEncountered',
            'shinyPokemonCaptured',
            'shinyPokemonDefeated',
            'shinyPokemonEncountered',
        ];

        for (const prop of observables) {
            this[prop] = ko.observable(saved[prop] || 0);
        }

        for (const array of arrayObservables) {
            this[array] = [...Array(Statistics.arraySizes[array])].map((value, index) => {
                return ko.observable(saved[array] ? saved[array][index] || 0 : 0);
            });
        }
    }

    public static getGymIndex(gym: string) {
        const gyms = GameConstants.RegionGyms.flat();
        return gyms.indexOf(gym);
    }

    public static getDungeonIndex(dungeon: string) {
        const dungeons = GameConstants.RegionDungeons.flat();
        return dungeons.indexOf(dungeon);
    }

}

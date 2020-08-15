enum SortOptions {
    'id' = 0,
    'name' = 1,
    'attack' = 2,
    'level' = 3,
    'shiny' = 4,
    'baseAttack' = 5,
}

type SortOptionConfig = {
    // Display text in sort dropdown
    text: string;

    // How to get the comparison value from a PartyPokemon
    getValue: (p: PartyPokemon) => any;

    // true if the default sort direction should be descending
    invert?: boolean;
}

const SortOptionConfigs: Record<SortOptions, SortOptionConfig> = {
    [SortOptions.id]: {
        'text': 'Pokemon #',
        'getValue': p => p.id,
    },

    [SortOptions.name]: {
        'text': 'Name',
        'getValue': p => p.name,
    },

    [SortOptions.attack]: {
        'text': 'Attack',
        'getValue': p => p.calculateAttack(),
        'invert': true,
    },

    [SortOptions.level]: {
        'text': 'Level',
        'getValue': p => p.level,
        'invert': true,
    },

    [SortOptions.shiny]: {
        'text': 'Shiny',
        'getValue': p => Number(App.game.party.alreadyCaughtPokemon(PokemonHelper.getPokemonByName(p.name).id, true)),
        'invert': true,
    },

    [SortOptions.baseAttack]: {
        'text': 'Base Attack',
        'getValue': p => p.baseAttack,
        'invert': true,
    },
};
GameHelper.enumNumbers(GameConstants.Region).filter(r => r != GameConstants.Region.none).forEach(region => {
    Object.assign(SortOptions, GameConstants.Region[region])
    const RegionThings: Record<SortOptions, SortOptionConfig> = {
        [SortOptions[region]]: {
            'text': `${GameConstants.Region[region].replace(GameConstants.Region[region].charAt(0), GameConstants.Region[region].charAt(0).toUpperCase())}`,
            'getValue': p => p.id <= GameConstants.TotalPokemonsPerRegion[GameConstants.Region[region]] && p.id > GameConstants.TotalPokemonsPerRegion[GameConstants.Region[region - 1]],
            'invert': true,
        },
    }
    Object.assign(SortOptionConfigs, RegionThings)
});

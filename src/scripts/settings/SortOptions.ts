enum SortOptions {
    'id' = 0,
    'name' = 1,
    'attack' = 2,
    'level' = 3,
    'shiny' = 4,
    'baseAttack' = 5,
    'kanto' = 6,
    'johto' = 7,
    'hoenn' = 8,
    'sinnoh' = 9,
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

    [SortOptions.kanto]: {
        'text': 'Kanto',
        'getValue': p => p.id <= GameConstants.TotalPokemonsPerRegion[GameConstants.Region.kanto],
        'invert': true,
    },

    [SortOptions.johto]: {
        'text': 'Johto',
        'getValue': p => p.id <= GameConstants.TotalPokemonsPerRegion[GameConstants.Region.johto] && p.id > GameConstants.TotalPokemonsPerRegion[GameConstants.Region.kanto],
        'invert': true,
    },

    [SortOptions.hoenn]: {
        'text': 'Hoenn',
        'getValue': p => p.id <= GameConstants.TotalPokemonsPerRegion[GameConstants.Region.hoenn] && p.id > GameConstants.TotalPokemonsPerRegion[GameConstants.Region.johto],
        'invert': true,
    },

    [SortOptions.sinnoh]: {
        'text': 'Hoenn',
        'getValue': p => p.id <= GameConstants.TotalPokemonsPerRegion[GameConstants.Region.sinnoh] && p.id > GameConstants.TotalPokemonsPerRegion[GameConstants.Region.hoenn],
        'invert': true,
    },
};
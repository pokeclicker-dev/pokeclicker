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
    'unova' = 10,
    'kalos' = 11,
    'alola' = 12,
    'galar' = 13,
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
        'text': 'Sinnoh',
        'getValue': p => p.id <= GameConstants.TotalPokemonsPerRegion[GameConstants.Region.sinnoh] && p.id > GameConstants.TotalPokemonsPerRegion[GameConstants.Region.hoenn],
        'invert': true,
    },

    [SortOptions.unova]: {
        'text': 'Unova',
        'getValue': p => p.id <= GameConstants.TotalPokemonsPerRegion[GameConstants.Region.unova] && GameConstants.TotalPokemonsPerRegion[GameConstants.Region.sinnoh],
        'invert': true,
    },

    [SortOptions.kalos]: {
        'text': 'Kalos',
        'getValue': p => p.id <= GameConstants.TotalPokemonsPerRegion[GameConstants.Region.kalos] && p.id > GameConstants.TotalPokemonsPerRegion[GameConstants.Region.unova],
        'invert': true,
    },

    [SortOptions.alola]: {
        'text': 'Alola',
        'getValue': p => p.id <= GameConstants.TotalPokemonsPerRegion[GameConstants.Region.alola] && p.id > GameConstants.TotalPokemonsPerRegion[GameConstants.Region.kalos],
        'invert': true,
    },

    [SortOptions.galar]: {
        'text': 'Galar',
        'getValue': p => p.id <= GameConstants.TotalPokemonsPerRegion[GameConstants.Region.galar] && p.id > GameConstants.TotalPokemonsPerRegion[GameConstants.Region.alola],
        'invert': true,
    },
};
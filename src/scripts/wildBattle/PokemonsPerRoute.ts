/**
 * Datalist of all Pokémon that are encountered on the routes
 * No need to ever use this list, use RouteHelper instead
 * If you ever need to use this list, request changes in RouteHelper instead.
 */
class RoutePokemon {
    public land: string[];
    public water: string[];
    public headbutt: string[];

    constructor({ land = [], water = [], headbutt = []}) {
        this.land = land;
        this.water = water;
        this.headbutt = headbutt;
    }
}
const pokemonsPerRoute = {
    2: {
        101: {
            land: ['Wurmple', 'Poochyena', 'Zigzagoon'],
        },
        102: {
            land: ['Surskit', 'Poochyena', 'Wurmple', 'Lotad', 'Zigzagoon', 'Ralts', 'Seedot'],
            water: ['Marill', 'Goldeen', 'Magikarp', 'Corphish'],
        },
        103: {
            land: ['Poochyena', 'Wingull', 'Zigzagoon'],
            water: ['Tentacool', 'Wingull', 'Pelipper', 'Magikarp', 'Wailmer', 'Sharpedo'],
        },
        104: {
            land: ['Poochyena', 'Wurmple', 'Marill', 'Taillow', 'Wingull'],
            water: ['Wingull', 'Pelipper', 'Magikarp'],
        },
        105: {
            land: [],
            water: ['Tentacool', 'Wingull', 'Pelipper', 'Magikarp', 'Wailmer'],
        },
        106: {
            land: [],
            water: ['Tentacool', 'Wingull', 'Pelipper', 'Magikarp', 'Wailmer'],
        },
        107: {
            land: [],
            water: ['Tentacool', 'Wingull', 'Pelipper', 'Magikarp', 'Wailmer'],
        },
        108: {
            land: [],
            water: ['Tentacool', 'Wingull', 'Pelipper', 'Magikarp', 'Wailmer'],
        },
        109: {
            land: [],
            water: ['Tentacool', 'Wingull', 'Pelipper', 'Magikarp', 'Wailmer'],
        },
        110: {
            land: ['Poochyena', 'Electrike', 'Gulpin', 'Minun', 'Oddish', 'Wingull', 'Plusle'],
            water: ['Tentacool', 'Wingull', 'Pelipper', 'Magikarp', 'Wailmer'],
        },
        111: {
            land: ['Sandshrew', 'Trapinch', 'Baltoy', 'Cacnea'],
            water: ['Marill', 'Goldeen', 'Magikarp', 'Barboach'],
            headbutt: ['Geodude'],
        },
        112: {
            land: ['Numel', 'Marill'],
        },
        113: {
            land: ['Spinda', 'Slugma', 'Skarmory'],
        },
        114: {
            land: ['Zangoose', 'Surskit', 'Swablu', 'Lotad', 'Lombre', 'Seviper', 'Nuzleaf'],
            water: ['Marill', 'Goldeen', 'Magikarp', 'Barboach'],
            headbutt: ['Geodude'],
        },
        115: {
            land: ['Swablu', 'Taillow', 'Swellow', 'Jigglypuff', 'Wingull'],
            water: ['Tentacool', 'Wingull', 'Pelipper', 'Magikarp', 'Wailmer'],
        },
        116: {
            land: ['Poochyena', 'Whismur', 'Nincada', 'Abra', 'Taillow', 'Skitty'],
        },
        117: {
            land: ['Surskit', 'Poochyena', 'Oddish', 'Marill', 'Illumise', 'Volbeat', 'Seedot'],
            water: ['Marill', 'Goldeen', 'Magikarp', 'Corphish'],
        },
        118: {
            land: ['Zigzagoon', 'Electrike', 'Linoone', 'Manectric', 'Wingull', 'Kecleon'],
            water: ['Tentacool', 'Wingull', 'Pelipper', 'Magikarp', 'Carvanha', 'Sharpedo'],
        },
        119: {
            land: ['Zigzagoon', 'Linoone', 'Oddish', 'Tropius', 'Kecleon', 'Castform'],
            water: ['Tentacool', 'Wingull', 'Pelipper', 'Magikarp', 'Carvanha'],
        },
        120: {
            land: ['Surskit', 'Poochyena', 'Mightyena', 'Oddish', 'Marill', 'Absol', 'Kecleon', 'Seedot'],
            water: ['Marill', 'Goldeen', 'Magikarp', 'Barboach'],
        },
        121: {
            land: ['Poochyena', 'Shuppet', 'Mightyena', 'Oddish', 'Gloom', 'Wingull', 'Kecleon'],
            water: ['Tentacool', 'Wingull', 'Pelipper', 'Magikarp', 'Wailmer'],
        },
        122: {
            land: [],
            water: ['Tentacool', 'Wingull', 'Pelipper', 'Magikarp', 'Wailmer', 'Sharpedo'],
        },
        123: {
            land: ['Poochyena', 'Shuppet', 'Mightyena', 'Oddish', 'Gloom', 'Wingull', 'Kecleon'],
            water: ['Tentacool', 'Wingull', 'Pelipper', 'Magikarp', 'Wailmer'],
        },
        124: {
            land: [],
            water: ['Tentacool', 'Wingull', 'Pelipper', 'Magikarp', 'Wailmer', 'Sharpedo', 'Clamperl', 'Relicanth'],
        },
        125: {
            land: [],
            water: ['Tentacool', 'Wingull', 'Pelipper', 'Magikarp', 'Wailmer', 'Sharpedo'],
        },
        126: {
            land: [],
            water: ['Tentacool', 'Wingull', 'Pelipper', 'Magikarp', 'Wailmer', 'Sharpedo', 'Clamperl', 'Relicanth'],
        },
        127: {
            land: [],
            water: ['Tentacool', 'Wingull', 'Pelipper', 'Magikarp', 'Wailmer', 'Sharpedo'],
        },
        128: {
            land: [],
            water: ['Tentacool', 'Wingull', 'Pelipper', 'Magikarp', 'Luvdisc', 'Wailmer', 'Corsola'],
        },
        129: {
            land: [],
            water: ['Tentacool', 'Wingull', 'Pelipper', 'Wailord', 'Magikarp', 'Wailmer', 'Sharpedo'],
        },
        130: {
            land: ['Wynaut'],
            water: ['Tentacool', 'Wingull', 'Pelipper', 'Magikarp', 'Wailmer', 'Sharpedo'],
        },
        131: {
            land: [],
            water: ['Tentacool', 'Wingull', 'Pelipper', 'Magikarp', 'Wailmer', 'Sharpedo'],
        },
        132: {
            land: [],
            water: ['Tentacool', 'Wingull', 'Pelipper', 'Magikarp', 'Wailmer', 'Sharpedo', 'Horsea'],
        },
        133: {
            land: [],
            water: ['Tentacool', 'Wingull', 'Pelipper', 'Magikarp', 'Wailmer', 'Sharpedo', 'Horsea'],
        },
        134: {
            land: [],
            water: ['Tentacool', 'Wingull', 'Pelipper', 'Magikarp', 'Wailmer', 'Sharpedo', 'Horsea'],
        },
    },
};

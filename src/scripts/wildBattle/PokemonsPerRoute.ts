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
    1: {
        26: {
            land: ['Raticate', 'Arbok', 'Sandslash', 'Ponyta', 'Doduo', 'Dodrio', 'Quagsire'],
            water: ['Tentacool', 'Tentacruel', 'Magikarp', 'Shellder', 'Chinchou', 'Lanturn'],
            headbutt: ['Exeggcute', 'Hoothoot', 'Ledyba', 'Spinarak', 'Pineco'],
        },
        27: {
            land: ['Raticate', 'Arbok', 'Sandslash', 'Ponyta', 'Doduo', 'Dodrio', 'Quagsire'],
            water: ['Tentacool', 'Tentacruel', 'Magikarp', 'Shellder', 'Chinchou', 'Lanturn'],
            headbutt: ['Exeggcute', 'Hoothoot', 'Ledyba', 'Spinarak', 'Pineco'],
        },
        28: {
            land: ['Ponyta', 'Tangela', 'Donphan', 'Ursaring', 'Rapidash', 'Doduo', 'Dodrio', 'Sneasel', 'Murkrow'],
            water: ['Poliwag', 'Poliwhirl', 'Magikarp'],
            headbutt: ['Natu', 'Aipom', 'Heracross'],
        },
        29: {
            land: ['Pidgey', 'Rattata', 'Sentret', 'Hoothoot'],
            headbutt: ['Exeggcute', 'Ledyba', 'Spinarak', 'Hoothoot', 'Pineco'],
        },
        30: {
            land: ['Pidgey', 'Rattata', 'Caterpie', 'Metapod', 'Weedle', 'Kakuna', 'Zubat', 'Hoothoot', 'Ledyba', 'Spinarak'],
            water: ['Poliwag', 'Poliwhirl', 'Magikarp'],
            headbutt: ['Exeggcute', 'Hoothoot', 'Ledyba', 'Spinarak', 'Pineco'],
        },
        31: {
            land: ['Pidgey', 'Rattata', 'Caterpie', 'Metapod', 'Weedle', 'Kakuna', 'Zubat', 'Poliwag', 'Hoothoot', 'Ledyba', 'Spinarak', 'Bellsprout'],
            water: ['Poliwag', 'Poliwhirl', 'Magikarp'],
            headbutt: ['Spearow', 'Exeggcute', 'Hoothoot', 'Ledyba', 'Spinarak', 'Aipom', 'Pineco', 'Heracross'],
        },
        32: {
            land: ['Rattata', 'Ekans', 'Zubat', 'Bellsprout', 'Mareep', 'Hoppip', 'Wooper'],
            water: ['Tentacool', 'Tentacruel', 'Quagsire', 'Magikarp', 'Qwilfish'],
            headbutt: ['Exeggcute', 'Hoothoot', 'Pineco'],
        },
        33: {
            land: ['Spearow', 'Rattata', 'Ekans', 'Zubat', 'Hoppip'],
            headbutt: ['Spearow', 'Aipom', 'Heracross'],
        },
        34: {
            land: ['Rattata', 'Abra', 'Drowzee', 'Ditto'],
            water: ['Tentacool', 'Tentacruel', 'Krabby', 'Magikarp', 'Staryu', 'Corsola', 'Kingler'],
            headbutt: ['Exeggcute', 'Hoothoot', 'Ledyba', 'Spinarak', 'Pineco'],
        },
        35: {
            land: ['Pidgey', 'Nidoran(F)', 'Nidoran(M)', 'Abra', 'Drowzee', 'Ditto', 'Hoothoot', 'Yanma'],
            water: ['Psyduck', 'Golduck', 'Poliwag', 'Magikarp'],
            headbutt: ['Exeggcute', 'Hoothoot', 'Ledyba', 'Spinarak', 'Pineco'],
        },
        36: {
            land: ['Pidgey', 'Nidoran(M)', 'Nidoran(F)', 'Vulpix', 'Growlithe', 'Hoothoot', 'Stantler', 'Sudowoodo'],
            headbutt: ['Exeggcute', 'Hoothoot', 'Ledyba', 'Spinarak', 'Pineco'],
        },
        37: {
            land: ['Pidgey', 'Pidgeotto', 'Vulpix', 'Growlithe', 'Hoothoot', 'Ledyba', 'Spinarak', 'Stantler'],
            headbutt: ['Exeggcute', 'Hoothoot', 'Ledyba', 'Spinarak', 'Pineco'],
        },
        38: {
            land: ['Rattata', 'Raticate', 'Meowth', 'Magnemite', 'Farfetch\'d', 'Tauros', 'Snubbull', 'Miltank'],
            headbutt: ['Exeggcute', 'Hoothoot', 'Ledyba', 'Spinarak', 'Pineco'],
        },
        39: {
            land: ['Rattata', 'Raticate', 'Meowth', 'Magnemite', 'Farfetch\'d', 'Tauros', 'Miltank'],
            headbutt: ['Exeggcute', 'Hoothoot', 'Ledyba', 'Spinarak', 'Pineco'],
        },
        40: {
            land: [],
            water: ['Tentacool', 'Tentacruel', 'Krabby', 'Magikarp', 'Staryu', 'Corsola', 'Kingler'],
        },
        41: {
            land: [],
            water: ['Tentacool', 'Tentacruel', 'Mantine', 'Magikarp', 'Chinchou', 'Shellder'],
        },
        42: {
            land: ['Spearow', 'Zubat', 'Mankey', 'Mareep', 'Flaaffy'],
            water: ['Goldeen', 'Seaking', 'Magikarp'],
            headbutt: ['Spearow', 'Aipom', 'Heracross'],
        },
        43: {
            land: ['Pidgeotto', 'Venonat', 'Noctowl', 'Mareep', 'Flaaffy', 'Girafarig'],
            water: ['Magikarp', 'Poliwag'],
            headbutt: ['Venonat', 'Exeggcute', 'Hoothoot', 'Pineco'],
        },
        44: {
            land: ['Bellsprout', 'Weepinbell', 'Lickitung', 'Tangela'],
            water: ['Poliwag', 'Poliwhirl', 'Magikarp', 'Remoraid'],
            headbutt: ['Spearow', 'Aipom', 'Heracross'],
        },
        45: {
            land: ['Geodude', 'Graveler', 'Gligar', 'Teddiursa', 'Skarmory', 'Phanpy'],
            water: ['Magikarp', 'Poliwag', 'Dratini'],
            headbutt: ['Spearow', 'Aipom', 'Heracross'],
        },
        46: {
            land: ['Spearow', 'Rattata', 'Geodude'],
            headbutt: ['Spearow', 'Aipom', 'Heracross'],
        },
        47: {
            land: ['Raticate', 'Spearow', 'Fearow', 'Gloom', 'Farfetch\'d', 'Ditto', 'Noctowl', 'Miltank'],
            water: ['Tentacool', 'Seel', 'Staryu', 'Magikarp', 'Shellder', 'Chinchou', 'Lanturn'],
            headbutt: ['Metapod', 'Butterfree', 'Kakuna', 'Beedrill', 'Exeggcute', 'Hoothoot', 'Ledyba', 'Spinarak', 'Pineco', 'Heracross'],
        },
        48: {
            land: ['Fearow', 'Vulpix', 'Gloom', 'Diglett', 'Growlithe', 'Farfetch\'d', 'Tauros', 'Hoppip', 'Girafarig'],
            headbutt: ['Exeggcute', 'Hoothoot', 'Ledyba', 'Spinarak', 'Pineco'],
        },
    },
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

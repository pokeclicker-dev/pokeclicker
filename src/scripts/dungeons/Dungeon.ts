///<reference path="DungeonBossPokemon.ts"/>

/**
 * Gym class.
 */
class Dungeon {

    name: KnockoutObservable<string> = ko.observable('');
    pokemonList: string[];
    itemList: GameConstants.BattleItemType[];
    baseHealth: number;
    bossList: DungeonBossPokemon[];
    tokenCost: number;
    badgeReq: BadgeCase.Badge;
    itemRoute: number; // Nearest route, used for breeding steps
    level: number;
    allPokemonNames: string[];

    constructor(dungeonName: string, pokemonList: string[], itemList: GameConstants.BattleItemType[], baseHealth: number, bossList: DungeonBossPokemon[], tokenCost: number, badgeReq: BadgeCase.Badge, itemRoute: number, level: number) {
        this.name = ko.observable(dungeonName);
        this.pokemonList = pokemonList;
        this.itemList = itemList;
        this.baseHealth = baseHealth;
        this.bossList = bossList;
        this.tokenCost = tokenCost;
        this.badgeReq = badgeReq;
        this.itemRoute = itemRoute;
        this.level = level;
        this.calculateAllPokemonNames();
    }

    public isUnlocked(): boolean {
        if (!App.game.badgeCase.hasBadge(this.badgeReq)) {
            Notifier.notify({ message: `You need the ${BadgeCase.Badge[this.badgeReq]} badge to access this dungeon`, type: GameConstants.NotificationOption.danger });
            return false;
        }

        if (!App.game.keyItems.hasKeyItem(KeyItems.KeyItem.Dungeon_ticket)) {
            Notifier.notify({ message: 'You need the Dungeon ticket to access dungeons', type: GameConstants.NotificationOption.danger });
            return false;
        }
        return true;
    }

    private calculateAllPokemonNames() {
        this.allPokemonNames = JSON.parse(JSON.stringify(this.pokemonList));
        for (let i = 0; i < this.bossList.length; i++) {
            this.allPokemonNames.push(this.bossList[i].name);
        }
    }
}

/**
 * Data list that contains all dungeons, accessible by name.
 */

const dungeonList: { [dungeonName: string]: Dungeon } = {};

// Kanto Dungeons

dungeonList['Viridian Forest'] = new Dungeon('Viridian Forest',
    ['Caterpie', 'Metapod', 'Weedle', 'Kakuna', 'Pidgey', 'Pidgeotto'],
    [GameConstants.BattleItemType.xAttack, GameConstants.BattleItemType.xClick, GameConstants.BattleItemType.xAttack, GameConstants.BattleItemType.xClick, GameConstants.BattleItemType.xAttack, GameConstants.BattleItemType.xClick, GameConstants.BattleItemType.Lucky_incense],
    102,
    [new DungeonBossPokemon('Pikachu', 510, 7)],
    50, BadgeCase.Badge.None, 1, 5
);

dungeonList['Digletts Cave'] = new Dungeon('Digletts Cave',
    ['Diglett'],
    [GameConstants.BattleItemType.xAttack, GameConstants.BattleItemType.xClick, GameConstants.BattleItemType.xAttack, GameConstants.BattleItemType.xClick, GameConstants.BattleItemType.xAttack, GameConstants.BattleItemType.xAttack, GameConstants.BattleItemType.Lucky_incense],
    1208,
    [new DungeonBossPokemon('Dugtrio', 6040, 31)],
    95, BadgeCase.Badge.Boulder, 2, 22
);

dungeonList['Mt. Moon'] = new Dungeon('Mt. Moon',
    ['Sandshrew', 'Clefairy', 'Zubat', 'Paras', 'Geodude', 'Pidgeotto'],
    [GameConstants.BattleItemType.xAttack, GameConstants.BattleItemType.xClick, GameConstants.BattleItemType.xAttack, GameConstants.BattleItemType.xClick, GameConstants.BattleItemType.xAttack, GameConstants.BattleItemType.xAttack, GameConstants.BattleItemType.Token_collector],
    834,
    [new DungeonBossPokemon('Kabuto', 4170, 12), new DungeonBossPokemon('Omanyte', 4170, 12)],
    75, BadgeCase.Badge.Boulder, 4, 10
);

dungeonList['Rock Tunnel'] = new Dungeon('Rock Tunnel',
    ['Zubat', 'Geodude', 'Machop'],
    [GameConstants.BattleItemType.xAttack, GameConstants.BattleItemType.xClick, GameConstants.BattleItemType.xAttack, GameConstants.BattleItemType.xClick, GameConstants.BattleItemType.xAttack, GameConstants.BattleItemType.Item_magnet],
    4117,
    [new DungeonBossPokemon('Onix', 20585, 17)],
    500, BadgeCase.Badge.Cascade, 5, 15
);

dungeonList['Power Plant'] = new Dungeon('Power Plant',
    ['Pikachu', 'Raichu', 'Magnemite', 'Magneton', 'Grimer', 'Muk', 'Electrode'],
    [GameConstants.BattleItemType.xAttack, GameConstants.BattleItemType.xClick, GameConstants.BattleItemType.xAttack, GameConstants.BattleItemType.xClick, GameConstants.BattleItemType.xClick, GameConstants.BattleItemType.Lucky_incense],
    13507,
    [new DungeonBossPokemon('Electabuzz', 67535, 35), new DungeonBossPokemon('Zapdos', 101302, 50)],
    1000, BadgeCase.Badge.Cascade, 8, 25
);

dungeonList['Pokemon Tower'] = new Dungeon('Pokemon Tower',
    ['Gastly', 'Haunter', 'Cubone'],
    [GameConstants.BattleItemType.xAttack, GameConstants.BattleItemType.xClick, GameConstants.BattleItemType.xAttack, GameConstants.BattleItemType.xClick, GameConstants.BattleItemType.Item_magnet],
    7523,
    [new DungeonBossPokemon('Marowak', 37615, 30)],
    750, BadgeCase.Badge.Cascade, 10, 20
);

dungeonList['Seafoam Islands'] = new Dungeon('Seafoam Islands',
    ['Zubat', 'Golbat', 'Psyduck', 'Golduck', 'Slowpoke', 'Slowbro', 'Shellder', 'Krabby', 'Horsea', 'Staryu'],
    [GameConstants.BattleItemType.xAttack, GameConstants.BattleItemType.xClick, GameConstants.BattleItemType.xAttack, GameConstants.BattleItemType.xClick, GameConstants.BattleItemType.Lucky_egg],
    17226,
    [new DungeonBossPokemon('Seel', 86130, 35), new DungeonBossPokemon('Articuno', 129195, 50)],
    1250, BadgeCase.Badge.Soul, 15, 30
);

dungeonList['Pokemon Mansion'] = new Dungeon('Pokemon Mansion',
    ['Growlithe', 'Vulpix', 'Grimer', 'Muk', 'Koffing', 'Weezing'],
    [GameConstants.BattleItemType.xAttack, GameConstants.BattleItemType.xClick, GameConstants.BattleItemType.xAttack, GameConstants.BattleItemType.xClick, GameConstants.BattleItemType.Token_collector],
    17760,
    [new DungeonBossPokemon('Magmar', 88800, 40)],
    1500, BadgeCase.Badge.Soul, 16, 35
);

dungeonList['Victory Road'] = new Dungeon('Victory Road',
    ['Zubat', 'Golbat', 'Machop', 'Geodude', 'Graveler', 'Onix', 'Marowak', 'Venomoth'],
    [GameConstants.BattleItemType.xAttack, GameConstants.BattleItemType.xClick, GameConstants.BattleItemType.xAttack, GameConstants.BattleItemType.xClick, GameConstants.BattleItemType.Item_magnet],
    24595,
    [new DungeonBossPokemon('Machoke', 122975, 42), new DungeonBossPokemon('Moltres', 184462, 50)],
    2000, BadgeCase.Badge.Earth, 20, 40
);

dungeonList['Cerulean Cave'] = new Dungeon('Cerulean Cave',
    ['Arbok', 'Raichu', 'Sandslash', 'Golbat', 'Parasect', 'Venomoth', 'Kadabra', 'Magneton', 'Dodrio', 'Hypno', 'Ditto', 'Wigglytuff', 'Electrode', 'Marowak', 'Chansey'],
    [GameConstants.BattleItemType.xAttack, GameConstants.BattleItemType.xClick, GameConstants.BattleItemType.xClick, GameConstants.BattleItemType.Lucky_incense],
    28735,
    [new DungeonBossPokemon('Rhydon', 143675, 60), new DungeonBossPokemon('Mewtwo', 215512, 70)],
    2500, BadgeCase.Badge.Elite_KantoChampion, 20, 55
);

// Johto Dungeons

dungeonList['Sprout Tower'] = new Dungeon('Sprout Tower',
    ['Rattata', 'Gastly', 'Hoothoot'],
    [GameConstants.BattleItemType.xAttack, GameConstants.BattleItemType.xClick, GameConstants.BattleItemType.xAttack, GameConstants.BattleItemType.Item_magnet],
    56735,
    [new DungeonBossPokemon('Bellsprout', 240000, 10)],
    2500, BadgeCase.Badge.Elite_KantoChampion, 31, 5
);

dungeonList['Ruins of Alph'] = new Dungeon('Ruins of Alph',
    ['Natu', 'Wooper', 'Quagsire', 'Smeargle', 'Magikarp', 'Poliwag', 'Poliwhirl'],
    [GameConstants.BattleItemType.xAttack, GameConstants.BattleItemType.xClick, GameConstants.BattleItemType.xClick, GameConstants.BattleItemType.Item_magnet],
    60600,
    [new DungeonBossPokemon('Unown', 260000, 14)],
    3000, BadgeCase.Badge.Zephyr, 32, 7
);

dungeonList['Union Cave'] = new Dungeon('Union Cave',
    ['Rattata', 'Sandshrew', 'Zubat', 'Geodude', 'Onix', 'Goldeen', 'Magikarp'],
    [GameConstants.BattleItemType.xAttack, GameConstants.BattleItemType.xClick, GameConstants.BattleItemType.xClick, GameConstants.BattleItemType.Item_magnet],
    63600,
    [new DungeonBossPokemon('Wooper', 260000, 14)],
    3000, BadgeCase.Badge.Zephyr, 32, 7
);

dungeonList['Slowpoke Well'] = new Dungeon('Slowpoke Well',
    ['Zubat', 'Slowpoke'],
    [GameConstants.BattleItemType.xAttack, GameConstants.BattleItemType.xClick, GameConstants.BattleItemType.xAttack, GameConstants.BattleItemType.Lucky_egg],
    67900,
    [new DungeonBossPokemon('Slowbro', 280000, 20)],
    3500, BadgeCase.Badge.Zephyr, 33, 12
);

dungeonList['Ilex Forest'] = new Dungeon('Ilex Forest',
    ['Caterpie', 'Metapod', 'Weedle', 'Kakuna', 'Zubat', 'Oddish', 'Paras', 'Hoothoot'],
    [GameConstants.BattleItemType.xAttack, GameConstants.BattleItemType.xClick, GameConstants.BattleItemType.xClick, GameConstants.BattleItemType.Token_collector],
    82200,
    [new DungeonBossPokemon('Noctowl', 300000, 30), new DungeonBossPokemon('Beedrill', 300000, 30), new DungeonBossPokemon('Butterfree', 300000, 30), new DungeonBossPokemon('Celebi', 600000, 50)],
    4000, BadgeCase.Badge.Hive, 34, 15
);

dungeonList['Burned Tower'] = new Dungeon('Burned Tower',
    ['Rattata', 'Zubat', 'Koffing', 'Raticate'],
    [GameConstants.BattleItemType.xAttack, GameConstants.BattleItemType.xClick, GameConstants.BattleItemType.Lucky_incense],
    88500,
    [new DungeonBossPokemon('Golbat', 320000, 35), new DungeonBossPokemon('Weezing', 320000, 35), new DungeonBossPokemon('Shuckle', 610000, 50)],
    4500, BadgeCase.Badge.Fog, 37, 20
);

dungeonList['Tin Tower'] = new Dungeon('Tin Tower',
    ['Rattata', 'Gastly'],
    [GameConstants.BattleItemType.xAttack, GameConstants.BattleItemType.xClick, GameConstants.BattleItemType.Item_magnet],
    88500,
    [new DungeonBossPokemon('Raticate', 320000, 35), new DungeonBossPokemon('Haunter', 320000, 35), new DungeonBossPokemon('Ho-Oh', 610000, 70)],
    4500, BadgeCase.Badge.Fog, 37, 20
);

dungeonList['Whirl Islands'] = new Dungeon('Whirl Islands',
    ['Zubat', 'Golbat', 'Seel', 'Krabby', 'Horsea'],
    [GameConstants.BattleItemType.xAttack, GameConstants.BattleItemType.xClick, GameConstants.BattleItemType.Lucky_egg],
    92800,
    [new DungeonBossPokemon('Dewgong', 340000, 40), new DungeonBossPokemon('Kingler', 340000, 40), new DungeonBossPokemon('Lugia', 660000, 70)],
    5000, BadgeCase.Badge.Storm, 41, 25
);

dungeonList['Mt Mortar'] = new Dungeon('Mt Mortar',
    ['Rattata', 'Zubat', 'Geodude', 'Marill', 'Raticate', 'Golbat', 'Graveler'],
    [GameConstants.BattleItemType.xAttack, GameConstants.BattleItemType.xClick, GameConstants.BattleItemType.Token_collector],
    104100,
    [new DungeonBossPokemon('Tyrogue', 360000, 45)],
    5500, BadgeCase.Badge.Storm, 42, 30
);

dungeonList['Ice Path'] = new Dungeon('Ice Path',
    ['Zubat', 'Jynx', 'Swinub'],
    [GameConstants.BattleItemType.xAttack, GameConstants.BattleItemType.Lucky_incense],
    120400,
    [new DungeonBossPokemon('Delibird', 380000, 50)],
    6000, BadgeCase.Badge.Glacier, 44, 32
);

dungeonList['Dark Cave'] = new Dungeon('Dark Cave',
    ['Zubat', 'Geodude', 'Golbat', 'Graveler', 'Wobbuffet'],
    [GameConstants.BattleItemType.xClick, GameConstants.BattleItemType.Item_magnet],
    127000,
    [new DungeonBossPokemon('Dunsparce', 400000, 55)],
    6500, BadgeCase.Badge.Rising, 45, 35
);

dungeonList['Mt Silver'] = new Dungeon('Mt Silver',
    ['Ponyta', 'Doduo', 'Tangela', 'Sneasel', 'Ursaring', 'Donphan', 'Teddiursa', 'Phanpy', 'Quagsire', 'Misdreavus'],
    [GameConstants.BattleItemType.xAttack, GameConstants.BattleItemType.Lucky_egg],
    130500,
    [new DungeonBossPokemon('Larvitar', 440000, 60)],
    10000, BadgeCase.Badge.Elite_Karen, 28, 50
);

// Hoenn Dungeons

dungeonList['Petalburg Woods'] = new Dungeon('Petalburg Woods',
    ['Poochyena', 'Zigzagoon', 'Wurmple', 'Silcoon', 'Cascoon', 'Taillow', 'Shroomish'],
    [GameConstants.BattleItemType.xAttack, GameConstants.BattleItemType.Lucky_egg],
    190000,
    [new DungeonBossPokemon('Slakoth', 560000, 10)],
    12000, null, 101, 5);

dungeonList['Rusturf Tunnel'] = new Dungeon('Rusturf Tunnel',
    ['Whismur'],
    [GameConstants.BattleItemType.xAttack, GameConstants.BattleItemType.Lucky_egg],
    200000,
    [new DungeonBossPokemon('Whismur', 600000, 20)],
    14000, BadgeCase.Badge.Stone, 101, 5);

dungeonList['Granite Cave'] = new Dungeon('Granite Cave',
    ['Zubat', 'Abra', 'Geodude', 'Makuhita', 'Aron', 'Sableye'],
    [GameConstants.BattleItemType.xAttack, GameConstants.BattleItemType.Lucky_egg],
    210000,
    [new DungeonBossPokemon('Mawile', 660000, 20), new DungeonBossPokemon('Nosepass', 660000, 20)],
    16000, BadgeCase.Badge.Stone, 101, 5);

dungeonList['Fiery Path'] = new Dungeon('Fiery Path',
    ['Machop', 'Grimer', 'Koffing', 'Slugma', 'Numel'],
    [GameConstants.BattleItemType.xAttack, GameConstants.BattleItemType.Lucky_egg],
    224000,
    [new DungeonBossPokemon('Torkoal', 700000, 20)],
    17000, BadgeCase.Badge.Stone, 101, 5);

dungeonList['Meteor Falls'] = new Dungeon('Meteor Falls',
    ['Zubat', 'Golbat', 'Goldeen', 'Magikarp', 'Barboach'],
    [GameConstants.BattleItemType.xAttack, GameConstants.BattleItemType.Lucky_egg],
    243000,
    [
        new DungeonBossPokemon('Solrock', 740000, 20),
        new DungeonBossPokemon('Lunatone', 740000, 20),
    ],
    18000, BadgeCase.Badge.Stone, 101, 5);

dungeonList['Mt. Chimney'] = new Dungeon('Mt. Chimney',
    ['Zubat', 'Poochyena'],
    [GameConstants.BattleItemType.xAttack, GameConstants.BattleItemType.Lucky_egg],
    260000,
    [new DungeonBossPokemon('Numel', 770000, 20)],
    20000, BadgeCase.Badge.Stone, 101, 5);

dungeonList['Jagged Pass'] = new Dungeon('Jagged Pass',
    ['Machop', 'Numel', 'Spoink'],
    [GameConstants.BattleItemType.xAttack, GameConstants.BattleItemType.Lucky_egg],
    260000,
    [
        new DungeonBossPokemon('Machop', 800000, 20),
        new DungeonBossPokemon('Numel', 800000, 20),
        new DungeonBossPokemon('Spoink', 800000, 20),
    ],
    22000, BadgeCase.Badge.Stone, 101, 5);

dungeonList['New Mauville'] = new Dungeon('New Mauville',
    ['Magnemite', 'Voltorb'],
    [GameConstants.BattleItemType.xAttack, GameConstants.BattleItemType.Lucky_egg],
    260000,
    [
        new DungeonBossPokemon('Magneton', 850000, 20),
        new DungeonBossPokemon('Electrode', 850000, 20),
    ],
    24000, BadgeCase.Badge.Stone, 101, 5);

dungeonList['Mt. Pyre'] = new Dungeon('Mt. Pyre',
    ['Shuppet', 'Duskull', 'Vulpix', 'Wingull', 'Meditite'],
    [GameConstants.BattleItemType.xAttack, GameConstants.BattleItemType.Lucky_egg],
    280000,
    [
        new DungeonBossPokemon('Shuppet', 880000, 20),
        new DungeonBossPokemon('Duskull', 890000, 20),
        new DungeonBossPokemon('Chimecho', 880000, 20),
    ],
    26000, BadgeCase.Badge.Stone, 101, 5);

dungeonList['Shoal Cave'] = new Dungeon('Shoal Cave',
    ['Zubat', 'Golbat', 'Spheal', 'Tentacool', 'Magikarp', 'Wailmer'],
    [GameConstants.BattleItemType.xAttack, GameConstants.BattleItemType.Lucky_egg],
    290000,
    [new DungeonBossPokemon('Snorunt', 900000, 20)],
    12000, BadgeCase.Badge.Stone, 101, 5);

dungeonList['Cave of Origin'] = new Dungeon('Cave of Origin',
    ['Zubat', 'Golbat', 'Sableye', 'Mawile'],
    [GameConstants.BattleItemType.xAttack, GameConstants.BattleItemType.Lucky_egg],
    390000,
    [
        new DungeonBossPokemon('Kyogre', 1300000, 20),
        new DungeonBossPokemon('Groudon', 1300000, 20),
    ],
    34000, BadgeCase.Badge.Stone, 101, 5);

dungeonList['Seafloor Cavern'] = new Dungeon('Seafloor Cavern',
    ['Zubat', 'Golbat', 'Tentacool', 'Magikarp', 'Wailmer'],
    [GameConstants.BattleItemType.xAttack, GameConstants.BattleItemType.Lucky_egg],
    330000,
    [new DungeonBossPokemon('Wailmer', 1000000, 20)],
    31000, BadgeCase.Badge.Stone, 101, 5);

dungeonList['Sky Pillar'] = new Dungeon('Sky Pillar',
    ['Golbat', 'Sableye', 'Claydol', 'Banette', 'Mawile', 'Altaria'],
    [GameConstants.BattleItemType.xAttack, GameConstants.BattleItemType.Lucky_egg],
    420000,
    [
        new DungeonBossPokemon('Dusclops', 1200000, 20),
        new DungeonBossPokemon('Rayquaza', 1824002, 20),
    ],
    40000, BadgeCase.Badge.Stone, 101, 5);

dungeonList['Victory Road Hoenn'] = new Dungeon('Victory Road Hoenn',
    ['Zubat', 'Golbat', 'Whismur', 'Loudred', 'Makuhita', 'Aron', 'Mawile', 'Meditite', 'Geodude', 'Goldeen', 'Magikarp', 'Barboach', 'Whiscash'],
    [GameConstants.BattleItemType.xAttack, GameConstants.BattleItemType.Lucky_egg],
    360000,
    [
        new DungeonBossPokemon('Hariyama', 1300000, 20),
        new DungeonBossPokemon('Lairon', 1300000, 20),
        new DungeonBossPokemon('Medicham', 1300000, 20),
        new DungeonBossPokemon('Graveler', 1300000, 20),
    ],
    37000, BadgeCase.Badge.Stone, 101, 5);

// Sinnoh

dungeonList['Lake_Verity'] = new Dungeon('Lake_Verity',
    ['Starly', 'Bidoof', 'Psyduck', 'Golduck', 'Magikarp', 'Goldeen'],
    [GameConstants.BattleItemType.xAttack, GameConstants.BattleItemType.xClick, GameConstants.BattleItemType.xAttack, GameConstants.BattleItemType.Item_magnet],
    28735,
    [new DungeonBossPokemon('Mesprit', 2000, 10), new DungeonBossPokemon('Seaking', 2000, 10)],
    2500, BadgeCase.Badge.Elite_HoennChampion, 31, 5
    ),
dungeonList['Oreburgh_Gate'] = new Dungeon('Oreburgh_Gate',
    ['Zubat', 'Psyduck', 'Geodude', 'Golduck', 'Magikarp', 'Barboach'],
    [GameConstants.BattleItemType.xAttack, GameConstants.BattleItemType.xClick, GameConstants.BattleItemType.xClick, GameConstants.BattleItemType.Item_magnet],
    600,
    [new DungeonBossPokemon('Gyarados', 3000, 14), new DungeonBossPokemon('Whiscash', 3000, 14)],
    3000, BadgeCase.Badge.Zephyr, 32, 7
    ),
dungeonList['Ravaged_Path'] = new Dungeon('Ravaged_Path',
    ['Zubat', 'Psyduck',  'Golduck', 'Magikarp', 'Barboach'],
    [GameConstants.BattleItemType.xAttack, GameConstants.BattleItemType.xClick, GameConstants.BattleItemType.xClick, GameConstants.BattleItemType.Item_magnet],
    600,
    [new DungeonBossPokemon('Gyarados', 3000, 14), new DungeonBossPokemon('Whiscash', 3000, 14)],
    3000, BadgeCase.Badge.Zephyr, 32, 7
    ),
dungeonList['Floaroma_Meadow'] = new Dungeon('Floaroma_Meadow',
    ['Aipom', 'Wurmple', 'Burmy', 'Cherubi', 'Magikarp', 'Barboach'],
    [GameConstants.BattleItemType.xAttack, GameConstants.BattleItemType.xClick, GameConstants.BattleItemType.xAttack, GameConstants.BattleItemType.xExp],
    900,
    [new DungeonBossPokemon('Munchlax', 4000, 20), new DungeonBossPokemon('Combee', 4000, 20), new DungeonBossPokemon('Heracross', 4000, 20)],
    3500, BadgeCase.Badge.Zephyr, 33, 12
    ),
dungeonList['Eterna_Forest'] = new Dungeon('Eterna_Forest',
    ['Gastly', 'Hoothoot', 'Wurmple', 'Silcoon', 'Cascoon', 'Bidoof', 'Kricketot', 'Budew', 'Buneary'],
    [GameConstants.BattleItemType.xAttack, GameConstants.BattleItemType.xClick, GameConstants.BattleItemType.xClick, GameConstants.BattleItemType.Token_collector],
    1200,
    [new DungeonBossPokemon('Leafeon', 5000, 30), new DungeonBossPokemon('Beautifly', 5000, 30), new DungeonBossPokemon('Dustox', 5000, 30)],
    4000, BadgeCase.Badge.Hive, 34, 15
    ),
dungeonList['Mt._Coronet_South'] = new Dungeon('Mt._Coronet_South',
    ['Clefairy', 'Zubat', 'Machop', 'Geodude', 'Nosepass', 'Meditite', 'Chingling', 'Bronzor', 'Magikarp', 'Barboach', 'Clefairy', 'Noctowl'],
    [GameConstants.BattleItemType.xAttack, GameConstants.BattleItemType.xClick, GameConstants.BattleItemType.Lucky_incense],
    1500,
    [new DungeonBossPokemon('Probopass', 6000, 35), new DungeonBossPokemon('Machoke', 6000, 35), new DungeonBossPokemon('Bronzong', 300000, 50), new DungeonBossPokemon('Absol', 300000, 50)],
    4500, BadgeCase.Badge.Fog, 37, 20
    ),
dungeonList['Mt._Coronet_North'] = new Dungeon('Mt._Coronet_North',
    ['Clefairy', 'Zubat', 'Machop', 'Geodude', 'Meditite', 'Chingling', 'Bronzor', 'Magikarp', 'Barboach', 'Clefairy', 'Noctowl', 'Snover'],
    [GameConstants.BattleItemType.xAttack, GameConstants.BattleItemType.xClick, GameConstants.BattleItemType.Lucky_incense],
    1500,
    [new DungeonBossPokemon('Graveler', 6000, 35), new DungeonBossPokemon('Magnezone', 6000, 35), new DungeonBossPokemon('Feebas', 300000, 50), new DungeonBossPokemon('Medicham', 300000, 50)],
    4500, BadgeCase.Badge.Fog, 37, 20
    ),
dungeonList['Lake_Valor'] = new Dungeon('Lake_Valor',
    ['Staravia', 'Bibarel', 'Psyduck', 'Golduck', 'Magikarp', 'Goldeen'],
    [GameConstants.BattleItemType.xAttack, GameConstants.BattleItemType.xClick, GameConstants.BattleItemType.Item_magnet],
    1500,
    [new DungeonBossPokemon('Noctowl', 6000, 35), new DungeonBossPokemon('Azelf', 6000, 35)],
    4500, BadgeCase.Badge.Fog, 37, 20
    ),
dungeonList['Lake_Acuity'] = new Dungeon('Lake_Acuity',
    ['Sneasel', 'Bibarel', 'Psyduck', 'Golduck', 'Magikarp', 'Goldeen','Snover', 'Snorunt'],
    [GameConstants.BattleItemType.xAttack, GameConstants.BattleItemType.xClick, GameConstants.BattleItemType.xExp],
    1800,
    [new DungeonBossPokemon('Glaceon', 7000, 40), new DungeonBossPokemon('Uxie', 7000, 40)],
    5000, BadgeCase.Badge.Storm, 41, 25
    ),
dungeonList['Distortion_World'] = new Dungeon('Distortion_World',
    ['Golbat', 'Gastly', 'Haunter', 'Duskull', 'Chingling', 'Bronzor', 'Chimecho'],
    [GameConstants.BattleItemType.xAttack, GameConstants.BattleItemType.xClick, GameConstants.BattleItemType.Token_collector],
    2100,
    [new DungeonBossPokemon('Dusclops', 8000, 45), new DungeonBossPokemon('Bronzong', 8000, 45), new DungeonBossPokemon('Giratina', 8000, 45)],
    5500, BadgeCase.Badge.Storm, 42, 30
    ),
dungeonList['Flower_Paradise'] = new Dungeon('Flower_Paradise',
    ['Vileplume', 'Bellsprout', 'Exeggutor', 'Bellossom', 'Skiploom', 'Sunflora', 'Roselia'],
    [GameConstants.BattleItemType.xAttack, GameConstants.BattleItemType.Lucky_incense],
    2400,
    [new DungeonBossPokemon('Venusaur', 9000, 50), new DungeonBossPokemon('Meganium', 9000, 50), new DungeonBossPokemon('Shaymin', 9000, 50)],
    6000, BadgeCase.Badge.Glacier, 44, 32
    ),
dungeonList['Spear_Pillar'] = new Dungeon('Spear_Pillar',
    ['Croagunk', 'Stunky', 'Glameow', 'Bronzor', 'Golbat'],
    [GameConstants.BattleItemType.xClick, GameConstants.BattleItemType.Item_magnet],
    3000,
    [new DungeonBossPokemon('Palkia', 10000, 70), new DungeonBossPokemon('Dialga', 10000, 70)],
    6500, BadgeCase.Badge.Rising, 45, 35
    ),
dungeonList['Hall_of_Origin'] = new Dungeon('Hall_of_Origin',
    ['Pikachu', 'Spearow', 'Garchomp', 'Slakoth'],
    [GameConstants.BattleItemType.xClick, GameConstants.BattleItemType.Item_magnet],
    3000,
    [new DungeonBossPokemon('Arceus', 10000, 70), new DungeonBossPokemon('Slaking', 10000, 70)],
    6500, BadgeCase.Badge.Rising, 45, 35
    ),
dungeonList['Valley_Windworks'] = new Dungeon('Valley_Windworks',
    ['Shinx', 'Pachirisu', 'Buizel', 'Shellos', 'Tentacool', 'Tentacruel'],
    [GameConstants.BattleItemType.xClick, GameConstants.BattleItemType.Item_magnet],
    3000,
    [new DungeonBossPokemon('Drifloon', 10000, 70), new DungeonBossPokemon('Finneon', 10000, 70)],
    6500, BadgeCase.Badge.Rising, 45, 35
    ),
dungeonList['Wayward_Cave'] = new Dungeon('Wayward_Cave',
    ['Zubat', 'Geodude', 'Onix'],
    [GameConstants.BattleItemType.xClick, GameConstants.BattleItemType.Item_magnet],
    3000,
    [new DungeonBossPokemon('Bronzor', 10000, 70), new DungeonBossPokemon('Gible', 10000, 70)],
    6500, BadgeCase.Badge.Rising, 45, 35
    ),
dungeonList['Lost_Tower'] = new Dungeon('Lost_Tower',
    ['Zubat', 'Gastly', 'Duskull', 'Shellos', 'Tentacool', 'Tentacruel'],
    [GameConstants.BattleItemType.xClick, GameConstants.BattleItemType.Item_magnet],
    3000,
    [new DungeonBossPokemon('Spiritomb', 10000, 70)],
    6500, BadgeCase.Badge.Rising, 45, 35
    ),
dungeonList['Solaceon Ruins'] = new Dungeon('Solaceon Ruins',
    ['Geodude', 'Hippopotas'],
    [GameConstants.BattleItemType.xClick, GameConstants.BattleItemType.Item_magnet],
    3000,
    [new DungeonBossPokemon('Unown', 10000, 70)],
    6500, BadgeCase.Badge.Rising, 45, 35
    ),
dungeonList['Sinnoh_Victory_Road'] = new Dungeon('Sinnoh_Victory_Road',
    ['Golbat', 'Graveler', 'Onix', 'Rhyhorn', 'Magneton', 'Azumarill', 'Floatzel'],
    [GameConstants.BattleItemType.xClick, GameConstants.BattleItemType.Item_magnet],
    3000,
    [new DungeonBossPokemon('Rhydon', 10000, 70), new DungeonBossPokemon('Steelix', 10000, 70), new DungeonBossPokemon('Gabite', 10000, 70)],
    6500, BadgeCase.Badge.Rising, 45, 35
    ),
dungeonList['Oreburgh_Mine'] = new Dungeon('Oreburgh_Mine',
    ['Zubat', 'Geodude', 'Machop'],
    [GameConstants.BattleItemType.xClick, GameConstants.BattleItemType.Item_magnet],
    3000,
    [new DungeonBossPokemon('Onix', 10000, 70)],
    6500, BadgeCase.Badge.Rising, 45, 35
    ),
dungeonList['Great_Marsh'] = new Dungeon('Great_Marsh',
    ['Tangela', 'Hoothoot','Noctowl', 'Wooper', 'Quagsire', 'Skorupi', 'Croagunk', 'Floatzel'],
    [GameConstants.BattleItemType.xClick, GameConstants.BattleItemType.Item_magnet],
    3000,
    [new DungeonBossPokemon('Carnivine', 10000, 70), new DungeonBossPokemon('Yanma', 10000, 70), new DungeonBossPokemon('Tropius', 10000, 70)],
    6500, BadgeCase.Badge.Rising, 45, 35
    ),
dungeonList['Snowpoint_Temple'] = new Dungeon('Snowpoint_Temple',
    ['Golbat', 'Sneasel', 'Smoochum'],
    [GameConstants.BattleItemType.xClick, GameConstants.BattleItemType.Item_magnet],
    3000,
    [new DungeonBossPokemon('Jynx', 10000, 70),new DungeonBossPokemon('Regigigas', 10000, 70)],
    6500, BadgeCase.Badge.Rising, 45, 35
    ),
dungeonList['Old_Chateau'] = new Dungeon('Old_Chateau',
    ['Gastly', 'Haunter', 'Gengar'],
    [GameConstants.BattleItemType.xClick, GameConstants.BattleItemType.Item_magnet],
    3000,
    [new DungeonBossPokemon('Rotom', 10000, 70)],
    6500, BadgeCase.Badge.Rising, 45, 35
    ),
dungeonList['Iron_Island'] = new Dungeon('Iron_Island',
    ['Tentacool', 'Wingull', 'Tentacruel', 'Pelipper', 'Finneon', 'Zubat', 'Geodude', 'Onix', 'Golbat', 'Graveler'],
    [GameConstants.BattleItemType.xClick, GameConstants.BattleItemType.Item_magnet],
    3000,
    [new DungeonBossPokemon('Riolu', 10000, 70), new DungeonBossPokemon('Steelix', 10000, 70)],
    6500, BadgeCase.Badge.Rising, 45, 35
    ),
dungeonList['Stark_Mountain'] = new Dungeon('Stark_Mountain',
    ['Golbat', 'Graveler', 'Fearow', 'Weezing', 'Rhyhorn', 'Rhydon', 'Numel', 'Slugma', 'Magcargo', 'Camerupt'],
    [GameConstants.BattleItemType.xClick, GameConstants.BattleItemType.Item_magnet],
    3000,
    [new DungeonBossPokemon('Skarmory', 10000, 70), new DungeonBossPokemon('Heatran', 10000, 70)],
    6500, BadgeCase.Badge.Rising, 45, 35
    ),
dungeonList['Fullmoon_Island'] = new Dungeon('Fullmoon_Island',
    ['Illumise', 'Minun', 'Espeon', 'Luvdisc'],
    [GameConstants.BattleItemType.xClick, GameConstants.BattleItemType.Item_magnet],
    3000,
    [new DungeonBossPokemon('Cresselia', 10000, 70)],
    6500, BadgeCase.Badge.Rising, 45, 35
    ),
dungeonList['Newmoon_Island'] = new Dungeon('Newmoon_Island',
    ['Volbeat', 'Plusle', 'Umbreon', 'Luvdisc'],
    [GameConstants.BattleItemType.xClick, GameConstants.BattleItemType.Item_magnet],
    3000,
    [new DungeonBossPokemon('Darkrai', 10000, 70)],
    6500, BadgeCase.Badge.Rising, 45, 35
    );

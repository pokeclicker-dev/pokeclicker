///<reference path="./badgeCase/BadgeCase.ts" />
///<reference path="utilities/Sound.ts"/>
///<reference path="settings/BooleanSetting.ts"/>

/**
 * Contains all game constants for easy access.
 */

namespace GameConstants {

    // Ticks
    export const TICK_TIME = 100;
    export const BATTLE_TICK = 1000;
    export const BATTLE_FRONTIER_TICK = 500;
    export const UNDERGROUND_TICK = 1000;
    export const DUNGEON_TIME = 6000;
    export const DUNGEON_TICK = 10;
    export const EFFECT_ENGINE_TICK = 1000;
    export const SAVE_TICK = 10000;
    export const GYM_TIME = 3000;
    export const GYM_COUNTDOWN = 1000;
    export const GYM_TICK = 10;
    export const ACHIEVEMENT_TICK = 1000;
    export const MIN_LOAD_TIME = 500; // 0.5 Seconds
    export const MAX_LOAD_TIME = 20000; // 20 Seconds

    export const MAX_AVAILABLE_REGION = 3; // Sinnoh

    export const TotalPokemonsPerRegion = [
        151, // 151 - Kanto
        251, // 100 - Johto
        386, // 135 - Hoenn
        493, // 107 - Sinnoh
        649, // 156 - Unova
        721, // 72 - Kalos
        809, // 88 - Alola
        893, // 84 - Galar
    ];

    export const ITEM_USE_TIME = 30;


    export const SECOND = 1000;
    export const MINUTE = 1000 * 60;
    export const HOUR = 1000 * 60 * 60;
    export const DAY = 1000 * 60 * 60 * 24;

    export const ROAMING_MIN_CHANCE = 8192;
    export const ROAMING_MAX_CHANCE = 4096;

    // Shinies
    export const SHINY_CHANCE_BATTLE = 8192;
    export const SHINY_CHANCE_DUNGEON = 4096;
    export const SHINY_CHANCE_BREEDING = 1024;
    export const SHINY_CHANCE_SHOP = 2048;
    export const SHINY_CHANCE_STONE = 4096;
    export const SHINY_CHANCE_SAFARI = 2048;

    export const ITEM_PRICE_MULTIPLIER = 1.00045;
    export const ITEM_PRICE_DEDUCT = 1.0005;

    export const PLATE_VALUE = 100;

    // Breeding
    export const BREEDING_ATTACK_BONUS = 25;

    export const BerryDistribution = [0.39, 0.63, 0.78, 0.87, 0.93, 0.96, 0.98, 1];

    // Dungeons
    export const DUNGEON_SIZE = 5;
    export const DUNGEON_CHEST_SHOW = 2;
    export const DUNGEON_MAP_SHOW = 4;

    // Achievements
    export enum AchievementOption {
        less,
        equal,
        more,
    }

    export enum NotificationOption {
        info,
        success,
        warning,
        danger,
        primary,
        secondary,
        dark,
        light,
    }
    export const NotificationSound = {
        ready_to_hatch: new Sound('ready_to_hatch', 'Egg ready to hatch'),
        shiny_long: new Sound('shiny_long', 'Shiny Pokemon encountered/hatched'),
        new_catch: new Sound('new_catch', 'New pokemon/shiny captured'),
        achievement: new Sound('achievement', 'New achievement earned'),
        battle_item_timer: new Sound('battle_item_timer', 'Battle item about to wear off'),
        quest_ready_to_complete: new Sound('quest_ready_to_complete', 'Quest is ready to be completed'),
        quest_level_increased: new Sound('quest_level_increased', 'Quest level increased'),
        underground_energy_full: new Sound('underground_energy_full', 'Mining energy reached maximum capacity'),
        // TODO: needs a notification
        ready_to_harvest: new Sound('ready_to_harvest', 'Farm ready to harvest'),
    };
    export const NotificationSetting = {
        ready_to_hatch: new BooleanSetting('notification.ready_to_hatch', 'Egg ready to hatch', true),
        route_item_found: new BooleanSetting('notification.route_item_found', 'Item found during route battle', true),
        dungeon_item_found: new BooleanSetting('notification.dungeon_item_found', 'Item found in dungeon chest', true),
        battle_item_timer: new BooleanSetting('notification.battle_item_timer', 'Battle item about to wear off', true),
        encountered_shiny: new BooleanSetting('notification.encountered_shiny', 'Encountered a shiny Pokemon', true),
        quest_ready_to_complete: new BooleanSetting('notification.quest_ready_to_complete', 'Quest is ready to be completed', true),
        underground_energy_full: new BooleanSetting('notification.underground_energy_full', 'Mining energy reached maximum capacity', true),
        event_start_end: new BooleanSetting('notification.event_start_end', 'Event start/end information', true),
        dropped_item: new BooleanSetting('notification.dropped_item', 'Enemy pokemon dropped an item', true),
    };

    export enum DungeonTile {
        empty,
        enemy,
        chest,
        boss,
    }

    // Held item chance
    export const ROUTE_HELD_ITEM_CHANCE = 512;
    export const DUNGEON_HELD_ITEM_CHANCE = 128;

    //Shards from battle
    export const DUNGEON_SHARDS = 3;
    export const DUNGEON_BOSS_SHARDS = 20;
    export const GYM_SHARDS = 5;

    export const SAFARI_BATTLE_CHANCE = 5;

    export const SAFARI_BASE_POKEBALL_COUNT = 30;

    export const LEGAL_WALK_BLOCKS = [
        0,
        10,
        11,
        12,
        13,
        14,
        15,
        16,
        17,
        18,
        19,
        20,
        21,
        22,
        23,
        24,
    ];

    export const SAFARI_OUT_OF_BALLS = 'Game Over!<br>You have run out of safari balls to use.';

    //Quests

    // Numbers calculated by Dimava assumes ability to 1 shot on high routes and some use oak items,
    //   which are now nerfed slightly until upgraded, so those numbers may need further adjusting
    const questBase = 1; // change this to scale all quest points
    export const DEFEAT_POKEMONS_BASE_REWARD  = questBase * 1;
    export const CAPTURE_POKEMONS_BASE_REWARD = DEFEAT_POKEMONS_BASE_REWARD / 0.8; // Defeat reward divided by chance to catch (guessed)
    export const GAIN_MONEY_BASE_REWARD       = questBase * 0.0017;  // Dimava
    export const GAIN_TOKENS_BASE_REWARD      = CAPTURE_POKEMONS_BASE_REWARD / 13; // <route number> tokens gained for every capture
    export const HATCH_EGGS_BASE_REWARD       = questBase * 33;      // Dimava
    export const MINE_LAYERS_BASE_REWARD      = questBase * 720;     // Average of 1/4 squares revealed = 75 energy ~ 12 minutes ~ 720 pokemons
    export const SHINY_BASE_REWARD            = questBase * 3000;    // Dimava
    export const USE_OAK_ITEM_BASE_REWARD     = DEFEAT_POKEMONS_BASE_REWARD; // not balanced at all for some oak items

    export const ACTIVE_QUEST_MULTIPLIER      = 4;

    // Some active quests may be quicker if passive pokemon attack is used instead of active clicking
    // This number is used to estimate time taken in terms of clicks, for reward calculation
    export const QUEST_CLICKS_PER_SECOND      = 5;

    export const QuestTypes = [
        'DefeatPokemons',
        'CapturePokemons',
        'GainMoney',
        'GainTokens',
        'GainShards',
        'HatchEggs',
        'MineLayers',
        'CatchShinies',
        'DefeatGym',
        'DefeatDungeon',
        'UsePokeball',
        'UseOakItem',
        'HarvestBerriesQuest',
    ];

    export const QUESTS_PER_SET = 10;

    /**
     * idle: The game is not doing anything, the battle view isn't shown
     * paused: The battle view is shown, but there are no game ticks
     * fighting: On a route and battling a pokemon
     * gym: Battling a gym
     * dungeon: Exploring a dungeon
     * safari: Exploring the safari zone
     * town: In a town/pre-dungeon, town view is not shown
     */
    export enum GameState {
        idle = 0,
        paused = 1,
        fighting = 2,
        gym = 3,
        dungeon = 4,
        safari = 5,
        town = 6,
        shop = 7,
        battleFrontier = 8,
    }

    export enum Pokeball {
        'None' = -1,
        'Pokeball' = 0,
        'Greatball' = 1,
        'Ultraball' = 2,
        'Masterball' = 3,
    }

    export enum Currency {
        money,
        questPoint,
        dungeonToken,
        diamond,
        farmPoint,
        battlePoint,
    }

    export enum TypeEffectiveness {
        Immune,
        NotVery,
        Normal,
        Very
    }

    export enum TypeEffectivenessValue {
        Immune = 0,
        NotVery = 0.5,
        Normal = 1,
        Very = 2
    }

    export function humanifyString(str: string): string {
        return str.replace(/[_-]+/g, ' ');
    }

    export function camelCaseToString(str: string): string {
        return str.replace(/[\s_-]?([A-Z])/g, ' $1').replace(/\b\w/g, (w) => (w.replace(/\w/, (c) => c.toUpperCase()))).trim();
    }

    export function formatDate(date: Date): string {
        return date.toISOString().replace(/T/, ' ').replace(/.\d+Z/,'');
    }

    export function formatTime(time: number | Date): string {
        if (time == 0) {
            return 'Ready';
        }

        time = parseInt(`${time}`, 10); // don't forget the second param
        const hours: any = `${Math.floor(time / 3600)}`.padStart(2, '0');
        const minutes: any = `${Math.floor((time - (hours * 3600)) / 60)}`.padStart(2, '0');
        const seconds: any = `${time - (hours * 3600) - (minutes * 60)}`.padStart(2, '0');

        return `${hours}:${minutes}:${seconds}`;
    }

    export function formatTimeShortWords(time: number): string {
        if (isNaN(+time) || time == 0) {
            return 'now';
        }
        time = Math.abs(time);

        if (time > GameConstants.DAY) {
            const days = Math.ceil(time / GameConstants.DAY);
            return `${time % GameConstants.DAY ? '< ' : ''}${days} day${days == 1 ? '' : 's'}`;
        }
        if (time > GameConstants.HOUR) {
            const hours = Math.ceil(time / GameConstants.HOUR);
            return `${time % GameConstants.HOUR ? '< ' : ''}${hours} hour${hours == 1 ? '' : 's'}`;
        }
        const minutes = Math.ceil(time / GameConstants.MINUTE);
        return `${time % GameConstants.MINUTE ? '< ' : ''}${minutes} min${minutes == 1 ? '' : 's'}`;
    }

    export function formatNumber(num: number): string {
        if (isNaN(+num)) {
            return '0';
        } else if (num >= 1e9) {
            num = Math.floor(num / 1e8);
            num = num < 100 ? num / 10 : Math.floor(num / 10);
            return `${num}B`;
        } else if (num >= 1e6) {
            num = Math.floor(num / 1e5);
            num = num < 100 ? num / 10 : Math.floor(num / 10);
            return `${num}M`;
        } else if (num >= 1e3) {
            num = Math.floor(num / 1e2);
            num = num < 100 ? num / 10 : Math.floor(num / 10);
            return `${num}K`;
        } else {
            return num.toString();
        }
    }

    export enum Region {
        none = -1,
        kanto = 0,
        johto = 1,
        hoenn = 2,
        sinnoh = 3,
        unova = 4,
        kalos = 5,
        alola = 6,
        galar = 7,
    }

    export const RegionRoute = {
        0: [1, 25],
        1: [26, 48],
        2: [101, 134],
        3: [201, 230],
    };

    export function randomIntBetween(min: number, max: number): number {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    export function randomElement(array: any[]): any {
        return array[GameConstants.randomIntBetween(0, array.length - 1)];
    }

    export function clipNumber(num: number, min: number, max: number): number {
        return Math.min(Math.max(num, min), max);
    }


    export const TypeColor = [
        '#A8A77A', // Normal
        '#EE8130', // Fire
        '#6390F0', // Water
        '#F7D02C', // Electric
        '#7AC74C', // Grass
        '#96D9D6', // Ice
        '#C22E28', // Fighting
        '#A33EA1', // Poison
        '#E2BF65', // Ground
        '#A98FF3', // Flying
        '#F95587', // Psychic
        '#A6B91A', // Bug
        '#B6A136', // Rock
        '#735797', // Ghost
        '#6F35FC', // Dragon
        '#705746', // Dark
        '#B7B7CE', // Steel
        '#D685AD', // Fairy
    ];

    export const ROUTE_KILLS_NEEDED = 10;

    export const WaterAreas = {
        0: new Set(['Cerulean City', 19, 20, 21, 24]),
        1: new Set([40, 41, 'Slowpoke Well']),
        2: new Set([105, 106, 107, 108, 109, 118, 122, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 'Shoal Cave', 'Seafloor Cavern']),
        3: new Set([218, 219, 220, 223, 230, 'Lake Verity', 'Lake Valor', 'Pastoria City']),
    };

    export const IceAreas = {
        0: new Set(['Seafoam Islands']),
        1: new Set(['Mahogany Town', 'Ice Path', 'Whirl Islands']),
        2: new Set(['Sootopolis City']),
        3: new Set([216, 217, 'Lake Acuity', 'Snowpoint City']),
    };

    export const ForestAreas = {
        0: new Set([25, 'Fuchsia City', 'Viridian Forest']),
        1: new Set([36, 38, 43,  'Azalea Town', 'Ilex Forest']),
        2: new Set([119, 'Petalburg Woods']),
        3: new Set([201, 204, 'Eterna Forest', 'Eterna City', 'Fullmoon Island', 'Newmoon Island']),
    };

    export const CaveAreas = {
        0: new Set(['Pewter City', 'Digletts Cave', 'Mt. Moon', 'Rock Tunnel', 'Victory Road']),
        1: new Set(['Cianwood City', 'Ruins of Alph', 'Union Cave', 'Mt Mortar', 'Dark Cave']),
        2: new Set(['Rustboro City', 'Dewford Town', 'Rusturf Tunnel', 'Granite Cave', 'New Mauville', 'Meteor Falls', 'Victory Road Hoenn']),
        3: new Set(['Oreburgh Gate', 'Oreburgh City', 'Ravaged Path', 'Wayward Cave', 'Mt. Coronet South', 'Iron Island', 'Mt. Coronet North', 'Victory Road Sinnoh']),
    };

    export const GemCaveAreas = {
        0: new Set(['Viridian City', 'Cerulean Cave']),
        1: new Set(['Blackthorn City', 'Mt Silver']),
        2: new Set(['Cave of Origin', 'Sky Pillar']),
        3: new Set(['Spear Pillar', 'Hall of Origin', 'Stark Mountain']),
    };

    export const PowerPlantAreas = {
        0: new Set(['Vermillion City', 'Power Plant']),
        1: new Set(['Tin Tower']),
        2: new Set(['Mauville City']),
        3: new Set(['Sunyshore City']),
    };

    export const MansionAreas = {
        0: new Set(['Cinnabar Island', 'Pokemon Mansion']),
        1: new Set(['Olivine City', 'Burned Tower']),
        2: new Set(['Lavaridge Town', 'Petalburg City', 'Jagged Pass', 'Fiery Path', 'Mt. Chimney']),
        3: new Set(['Old Chateau', 'Veilstone City', 'Canalave City', 'Snowpoint Temple']),
    };

    export const GraveyardAreas = {
        0: new Set(['Saffron City', 'Pokemon Tower']),
        1: new Set(['Ecruteak City']),
        2: new Set(['Mossdeep City', 'Mt. Pyre']),
        3: new Set(['Hearthome City']),
    };

    export enum Starter {
        'None' = -1,
        'Bulbasaur' = 0,
        'Charmander' = 1,
        'Squirtle' = 2,
        'Pikachu' = 3,
    }

    export enum StoneType {
        'None' = -1,
        'Fire_stone',
        'Water_stone',
        'Thunder_stone',
        'Leaf_stone',
        'Moon_stone',
        'Sun_stone',
        'Trade_stone',
        'Dragon_scale',
        'Metal_coat',
        'Kings_rock',
        'Upgrade',
        'Soothe_bell',
        'Deepsea_tooth',
        'Deepsea_scale',
        'Dawn_stone',
        'Dusk_stone',
        'Shiny_stone',
        'Dubious_disc',
        'Electirizer',
        'Magmarizer',
        'Protector',
        'Reaper_cloth',
        'Razor_claw',
        'Razor_fang',
        'Prism_scale',
    }

    export enum BattleItemType {
        'xAttack' = 'xAttack',
        'xClick' = 'xClick',
        'Lucky_egg' = 'Lucky_egg',
        'Token_collector' = 'Token_collector',
        'Item_magnet' = 'Item_magnet',
        'Lucky_incense' = 'Lucky_incense'
    }

    export enum PokemonItemType {
        'Eevee',
        'Porygon',
        'Jynx',
        'Mr. Mime',
        'Lickitung',
        'Togepi',
        'Beldum',
        'Skorupi',
        'Combee',
        'Burmy (plant)',
        'Spiritomb',
        'Cherubi',
    }

    export enum PokeBlockColor {
        Black,
        Red,
        Gold,
        Purple,
        Gray,
        White
    }

    export enum VitaminType {
        Protein,
        RareCandy
    }

    export enum EnergyRestoreSize {
        SmallRestore,
        MediumRestore,
        LargeRestore
    }

    export enum EggItemType {
        'Fire_egg',
        'Water_egg',
        'Grass_egg',
        'Fighting_egg',
        'Electric_egg',
        'Dragon_egg',
        'Pokemon_egg',
        'Mystery_egg',
    }

    export const EnergyRestoreEffect = {
        SmallRestore: 0.1,
        MediumRestore: 0.2,
        LargeRestore: 0.5,
    };

    export const KeyToDirection = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down',
        65: 'left', //a
        68: 'right', //d
        83: 'down', //s
        87: 'up', //w
    };

    export const FossilToPokemon = {
        'Helix Fossil': 'Omanyte',
        'Dome Fossil': 'Kabuto',
        'Old Amber': 'Aerodactyl',
        'Root Fossil': 'Lileep',
        'Claw Fossil': 'Anorith',
        'Armor Fossil': 'Shieldon',
        'Skull Fossil': 'Cranidos',
        'Cover Fossil': 'Tirtouga',
        'Plume Fossil': 'Archen',
    };

    //Used for image name
    export const PokemonToFossil = {
        'Omanyte': 'Helix Fossil',
        'Kabuto': 'Dome Fossil',
        'Aerodactyl': 'Old Amber',
        'Lileep': 'Root Fossil',
        'Anorith': 'Claw Fossil',
        'Shieldon': 'Armor Fossil',
        'Cranidos': 'Skull Fossil',
        'Tirtouga': 'Cover Fossil',
        'Archen': 'Plume Fossil',

    };

    // For random quest, name matches entry in gymList (created in Gym.ts)
    export const KantoGyms = [
        'Pewter City',
        'Cerulean City',
        'Vermillion City',
        'Celadon City',
        'Saffron City',
        'Fuchsia City',
        'Cinnabar Island',
        'Viridian City',
        'Elite Lorelei',
        'Elite Bruno',
        'Elite Agatha',
        'Elite Lance',
        'Champion Blue',
    ];

    export const JohtoGyms = [
        'Violet City',
        'Azalea Town',
        'Goldenrod City',
        'Ecruteak City',
        'Cianwood City',
        'Olivine City',
        'Mahogany Town',
        'Blackthorn City',
        'Elite Will',
        'Elite Koga',
        'Elite Bruno2',
        'Elite Karen',
        'Champion Lance',
    ];

    export const HoennGyms = [
        'Rustboro City',
        'Dewford Town',
        'Mauville City',
        'Lavaridge Town',
        'Petalburg City',
        'Fortree City',
        'Mossdeep City',
        'Sootopolis City',
        'Elite Sidney',
        'Elite Phoebe',
        'Elite Glacia',
        'Elite Drake',
        'Champion Wallace',
    ];

    export const SinnohGyms = [
        'Oreburgh City',
        'Eterna City',
        'Hearthome City',
        'Veilstone City',
        'Pastoria City',
        'Canalave City',
        'Snowpoint City',
        'Sunyshore City',
        'Elite Aaron',
        'Elite Bertha',
        'Elite Flint',
        'Elite Lucian',
        'Champion Cynthia',
    ];
    
    export const UnovaGyms = [
        'Aspertia City',
        'Virbank City',
        'Castelia City',
        'Nimbasa City',
        'Driftveil City',
        'Mistralton City',
        'Opelucid City',
        'Humilau City',
        'Elite Shauntal',
        'Elite Marshal',
        'Elite Grimsley',
        'Elite Caitlin',
        'Champion Iris',
    ];

    export const RegionGyms = [
        KantoGyms,
        JohtoGyms,
        HoennGyms,
        SinnohGyms,
        UnovaGyms,
    ];

    export const KantoDungeons = [
        'Viridian Forest',
        'Digletts Cave',
        'Mt. Moon',
        'Rock Tunnel',
        'Power Plant',
        'Pokemon Tower',
        'Seafoam Islands',
        'Pokemon Mansion',
        'Victory Road',
        'Cerulean Cave',
    ];

    export const JohtoDungeons = [
        'Sprout Tower',
        'Ruins of Alph',
        'Union Cave',
        'Slowpoke Well',
        'Ilex Forest',
        'Burned Tower',
        'Tin Tower',
        'Whirl Islands',
        'Mt Mortar',
        'Ice Path',
        'Dark Cave',
        'Mt Silver',
    ];

    export const HoennDungeons = [
        'Rusturf Tunnel',
        'Granite Cave',
        'Jagged Pass',
        'Fiery Path',
        'Mt. Chimney',
        'Meteor Falls',
        'Mt. Pyre',
        'Shoal Cave',
        'Seafloor Cavern',
        'Cave of Origin',
        'Sky Pillar',
        'Victory Road Hoenn',
        'Petalburg Woods',
        'New Mauville',
        // These aren't implemented anywhere yet
        /*
        "Island Cave",
        "Desert Ruins",
        "Scorched Slab",
        "Ancient Tomb",
        "Aqua Hideout",
        "Magma Hideout",
        "Sealed Chamber",
        "Artisan Cave",
        "Desert Underpass",
        "Marine Cave",
        "Terra Cave",
        "Southern Island",
        "Faraway Island",
        "Birth Island",
        "Devon Corporation",
        "Oceanic Museum",
        "Mirage Tower",
        "Weather Institute",
        "Safari Zone",
        "Mirage Island",
        "Battle Tower",
        "Trainer Hill",
        "Abandoned Ship",
        "Battle Maison",
        "Battle Resort",
        "Mirage Spots",
        */
    ];

    export const SinnohDungeons = [
        // TODO: SINNOH
        'Oreburgh Gate',
        'Ravaged Path',
        'Eterna Forest',
        'Old Chateau',
        'Wayward Cave',
        'Mt. Coronet South',
        'Iron Island',
        'Mt. Coronet North',
        'Lake Verity',
        'Lake Valor',
        'Lake Acuity',
        'Distortion World',
        'Victory Road Sinnoh',
        'Spear Pillar',
        'Hall of Origin',
        'Fullmoon Island',
        'Newmoon Island',
        'Flower Paradise',
        'Snowpoint Temple',
        'Stark Mountain',
    ];
    
    export const UnovaDungeons = [
        'Pledge Grove',
        'Flocessy Ranch',
        'Virbank Complex',    //Optional dungeon, contains no unique Pokémon, safe to scrap
        'Liberty Garden',
        'Castelia Sewers',
        'Relic Passage',
        'Desert Resort',    //Should really be a route
        'Relic Castle',
        'Lostlorn Forest',
        'Chargestone Cave',
        'Mistralton Cave',
        'Celestial Tower',
        'Reversal Mountain',
        'Strange House',    //Optional dungeon, contains no unique Pokémon, safe to scrap
        'Undella Bay',    //Should really be a route
        'Seaside Cave',
        'Giant Chasm',
        'Abundant Shrine',
        'Cave of Being',    //Contains gen 4 trio only
        'Victory Road Unova',
        'Twist Mountain',
        'Dragonspiral Tower',
        'Moor of Icirrus',
        'Pinwheel Forest',
        'Wellspring Cave',    //Optional dungeon, contains no unique Pokémon, safe to scrap
        'Dreamyard',
        'P2 Laboratory',
    ];

    export const RegionDungeons = [
        KantoDungeons,
        JohtoDungeons,
        HoennDungeons,
        SinnohDungeons,
        UnovaDungeons,
    ];

    export const StartingTowns = [
        'Pallet Town',
        'New Bark Town',
        'Littleroot Town',
        'Twinleaf Town',
        'Aspertia City',
    ];

    export const DockTowns = [
        'Vermillion City',
        'Olivine City',
        'Slateport City',
        'Canalave City',
        'Castelia City',
    ];
}

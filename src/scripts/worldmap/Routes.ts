///<reference path="Route.ts"/>
class Routes {
    public static regionRoutes = [];
    constructor() {}

    public static add(route: Route) {
        this.regionRoutes.push(route);
    }

    public static getRoute(region, route): Route {
        return this.regionRoutes.find(routeData => routeData.region == region && routeData.number == route);
    }

    public static normalizedNumber(region, route): number {
        return this.regionRoutes
            .sort((routeA, routeB) => routeA.orderNumber - routeB.orderNumber)
            .sort((routeA, routeB) => routeA.region - routeB.region)
            .findIndex(routeData => routeData.region == region && routeData.number == route) + 1;
    }
}

/*
KANTO
*/
Routes.add(new Route(
    GameConstants.Region.kanto, 1,
    new RoutePokemon({
        land: ['Pidgey', 'Rattata'],
    })
));
Routes.add(new Route(
    GameConstants.Region.kanto, 2,
    new RoutePokemon({
        land: ['Caterpie', 'Weedle', 'Rattata', 'Nidoran(F)', 'Nidoran(M)'],
    }),
    [new RouteKillRequirement(10, 1)]
));
Routes.add(new Route(
    GameConstants.Region.kanto, 3,
    new RoutePokemon({
        land: ['Pidgey', 'Rattata', 'Spearow', 'Sandshrew', 'Jigglypuff', 'Mankey'],
    }),
    [
        new RouteKillRequirement(10, 2),
        new GymBadgeRequirement(BadgeCase.Badge.Boulder),
    ]
));
Routes.add(new Route(
    GameConstants.Region.kanto, 4,
    new RoutePokemon({
        land: ['Rattata', 'Spearow', 'Ekans', 'Sandshrew', 'Mankey'],
        water: ['Poliwag', 'Goldeen', 'Psyduck', 'Krabby', 'Seaking'],
    }),
    [
        new RouteKillRequirement(10, 3),
        new ClearDungeonRequirement(1, Statistics.getDungeonIndex('Mt. Moon')),
    ]
));
Routes.add(new Route(
    GameConstants.Region.kanto, 24,
    new RoutePokemon({
        land: ['Caterpie', 'Metapod', 'Weedle', 'Kakuna', 'Pidgey', 'Pidgey', 'Pidgeotto', 'Oddish', 'Venonat', 'Abra', 'Bellsprout'],
        water: ['Poliwag', 'Goldeen', 'Psyduck', 'Krabby', 'Seaking'],
    }),
    [new RouteKillRequirement(10, 4)],
    4.1
));
Routes.add(new Route(
    GameConstants.Region.kanto, 25,
    new RoutePokemon({
        land: ['Caterpie', 'Metapod', 'Weedle', 'Kakuna', 'Pidgey', 'Pidgeotto', 'Oddish', 'Venonat', 'Abra', 'Bellsprout'],
        water: ['Poliwag', 'Goldeen', 'Psyduck', 'Krabby'],
    }),
    [new RouteKillRequirement(10, 24)],
    4.2
));
Routes.add(new Route(
    GameConstants.Region.kanto, 5,
    new RoutePokemon({
        land: ['Pidgey', 'Pidgeotto', 'Rattata', 'Jigglypuff', 'Oddish', 'Meowth', 'Mankey', 'Abra', 'Bellsprout'],
    }),
    [
        // Need to reach bills house
        new RouteKillRequirement(10, 25),
    ]
));
Routes.add(new Route(
    GameConstants.Region.kanto, 6,
    new RoutePokemon({
        land: ['Pidgey', 'Pidgeotto', 'Rattata', 'Jigglypuff', 'Oddish', 'Meowth', 'Mankey', 'Abra', 'Bellsprout'],
        water: ['Poliwag', 'Goldeen', 'Shellder', 'Krabby'],
    }),
    [new RouteKillRequirement(10, 5)]
));
Routes.add(new Route(
    GameConstants.Region.kanto, 11,
    new RoutePokemon({
        land: ['Pidgey', 'Pidgeotto', 'Raticate', 'Rattata', 'Spearow', 'Ekans', 'Sandshrew', 'Drowzee'],
        water: ['Poliwag', 'Goldeen', 'Tentacool', 'Shellder', 'Krabby', 'Horsea'],
    }),
    [new RouteKillRequirement(10, 6)],
    6.1
));
Routes.add(new Route(
    GameConstants.Region.kanto, 9,
    new RoutePokemon({
        land: ['Rattata', 'Raticate', 'Spearow', 'Fearow', 'Ekans', 'Sandshrew', 'Nidoran(F)', 'Nidoran(M)', 'Nidorina', 'Nidorino'],
    }),
    [
        new RouteKillRequirement(10, 6),
        new GymBadgeRequirement(BadgeCase.Badge.Cascade),
    ]
));
Routes.add(new Route(
    GameConstants.Region.kanto, 10,
    new RoutePokemon({
        land: ['Rattata', 'Raticate', 'Spearow', 'Ekans', 'Sandshrew', 'Nidoran(F)', 'Nidoran(M)', 'Machop', 'Magnemite', 'Voltorb'],
        water: ['Poliwag', 'Goldeen', 'Poliwhirl', 'Slowpoke', 'Krabby', 'Kingler', 'Horsea'],
    }),
    [
        new RouteKillRequirement(10, 9),
        new ClearDungeonRequirement(1, Statistics.getDungeonIndex('Rock Tunnel')),
    ]
));
Routes.add(new Route(
    GameConstants.Region.kanto, 7,
    new RoutePokemon({
        land: ['Pidgey', 'Pidgeotto', 'Rattata', 'Vulpix', 'Jigglypuff', 'Oddish', 'Meowth', 'Mankey', 'Growlithe', 'Abra', 'Bellsprout'],
    }),
    [new RouteKillRequirement(10, 10)],
    10.1
));
Routes.add(new Route(
    GameConstants.Region.kanto, 8,
    new RoutePokemon({
        land: ['Pidgey', 'Pidgeotto', 'Rattata', 'Ekans', 'Sandshrew', 'Vulpix', 'Jigglypuff', 'Meowth', 'Mankey', 'Growlithe', 'Abra', 'Kadabra'],
    }),
    [new RouteKillRequirement(10, 7)],
    10.2
));
Routes.add(new Route(
    GameConstants.Region.kanto, 12,
    new RoutePokemon({
        land: ['Pidgey', 'Pidgeotto', 'Oddish', 'Gloom', 'Venonat', 'Bellsprout', 'Weepinbell', 'Farfetch\'d', 'Snorlax'],
        water: ['Slowbro', 'Magikarp', 'Poliwag', 'Goldeen', 'Tentacool', 'Krabby', 'Horsea', 'Seadra'],
    }),
    [new ClearDungeonRequirement(1, Statistics.getDungeonIndex('Pokemon Tower'))]
));
Routes.add(new Route(
    GameConstants.Region.kanto, 13,
    new RoutePokemon({
        land: ['Pidgey', 'Pidgeotto', 'Oddish', 'Gloom', 'Venonat', 'Bellsprout', 'Weepinbell', 'Farfetch\'d', 'Ditto'],
        water: ['Slowbro', 'Magikarp', 'Poliwag', 'Goldeen', 'Tentacool', 'Krabby', 'Horsea', 'Seadra'],
    }),
    [
        new EitherRequirement([
            new RouteKillRequirement(10, 12),
            new RouteKillRequirement(10, 14),
        ]),
    ]
));
Routes.add(new Route(
    GameConstants.Region.kanto, 14,
    new RoutePokemon({
        land: ['Pidgey', 'Pidgeotto', 'Oddish', 'Gloom', 'Venonat', 'Venomoth', 'Bellsprout', 'Weepinbell', 'Ditto'],
        water: ['Poliwag', 'Goldeen'],
    }),
    [
        new EitherRequirement([
            new RouteKillRequirement(10, 13),
            new RouteKillRequirement(10, 15),
        ]),
    ]
));
Routes.add(new Route(
    GameConstants.Region.kanto, 15,
    new RoutePokemon({
        land: ['Pidgey', 'Pidgeotto', 'Oddish', 'Gloom', 'Venonat', 'Venomoth', 'Bellsprout', 'Weepinbell', 'Ditto'],
    }),
    [
        new EitherRequirement([
            new RouteKillRequirement(10, 18),
            new RouteKillRequirement(10, 14),
        ]),
    ]
));
Routes.add(new Route(
    GameConstants.Region.kanto, 16,
    new RoutePokemon({
        land: ['Rattata', 'Raticate', 'Spearow', 'Fearow', 'Doduo', 'Snorlax'],
    }),
    [new ClearDungeonRequirement(1, Statistics.getDungeonIndex('Pokemon Tower'))]
));
Routes.add(new Route(
    GameConstants.Region.kanto, 17,
    new RoutePokemon({
        land: ['Raticate', 'Spearow', 'Fearow', 'Ponyta', 'Doduo', 'Dodrio'],
        water: ['Poliwag', 'Goldeen', 'Tentacool', 'Shellder', 'Krabby'],
    }),
    [
        new EitherRequirement([
            new RouteKillRequirement(10, 16),
            new RouteKillRequirement(10, 18),
        ]),
    ]
));
Routes.add(new Route(
    GameConstants.Region.kanto, 18,
    new RoutePokemon({
        land: ['Rattata', 'Raticate', 'Spearow', 'Fearow', 'Doduo'],
        water: ['Poliwag', 'Goldeen', 'Tentacool', 'Shellder', 'Krabby'],
    }),
    [
        new EitherRequirement([
            new RouteKillRequirement(10, 17),
            new RouteKillRequirement(10, 15),
        ]),
    ]
));
Routes.add(new Route(
    GameConstants.Region.kanto, 19,
    new RoutePokemon({
        water: ['Tentacool', 'Magikarp', 'Poliwag', 'Goldeen', 'Tentacruel', 'Shellder', 'Horsea', 'Staryu'],
    }),
    [new GymBadgeRequirement(BadgeCase.Badge.Soul)]
));
Routes.add(new Route(
    GameConstants.Region.kanto, 20,
    new RoutePokemon({
        water: ['Tentacool', 'Magikarp', 'Poliwag', 'Goldeen', 'Tentacruel', 'Shellder', 'Horsea', 'Staryu'],
    }),
    [
        new EitherRequirement([
            new RouteKillRequirement(10, 21),
            new ClearDungeonRequirement(1, Statistics.getDungeonIndex('Seafoam Islands')),
        ]),
    ]
));
Routes.add(new Route(
    GameConstants.Region.kanto, 21,
    new RoutePokemon({
        land: ['Pidgey', 'Pidgeotto', 'Rattata', 'Raticate', 'Tangela'],
        water: ['Magikarp', 'Poliwag', 'Goldeen', 'Tentacruel', 'Shellder', 'Horsea', 'Staryu'],
    }),
    [new GymBadgeRequirement(BadgeCase.Badge.Soul)]
));
Routes.add(new Route(
    GameConstants.Region.kanto, 22,
    new RoutePokemon({
        land: ['Rattata', 'Spearow', 'Nidoran(F)', 'Nidoran(M)', 'Mankey'],
        water: ['Poliwag', 'Poliwhirl', 'Goldeen'],
    }),
    [new GymBadgeRequirement(BadgeCase.Badge.Earth)]
));
Routes.add(new Route(
    GameConstants.Region.kanto, 23,
    new RoutePokemon({
        land: ['Spearow', 'Fearow', 'Ekans', 'Arbok', 'Sandshrew', 'Sandslash', 'Nidorina', 'Nidorino', 'Mankey', 'Primeape', 'Ditto'],
        water: ['Poliwag', 'Goldeen', 'Poliwhirl', 'Slowbro', 'Kingler', 'Seadra', 'Seaking'],
    }),
    [new RouteKillRequirement(10, 22)]
));


/*
JOHTO
*/
Routes.add(new Route(
    GameConstants.Region.johto, 29,
    new RoutePokemon({
        land: ['Pidgey', 'Rattata', 'Sentret', 'Hoothoot'],
        headbutt: ['Exeggcute', 'Ledyba', 'Spinarak', 'Hoothoot', 'Pineco'],
    }),
    [new GymBadgeRequirement(BadgeCase.Badge.Elite_HoennChampion)]
));
Routes.add(new Route(
    GameConstants.Region.johto, 30,
    new RoutePokemon({
        land: ['Pidgey', 'Rattata', 'Caterpie', 'Metapod', 'Weedle', 'Kakuna', 'Zubat', 'Hoothoot', 'Ledyba', 'Spinarak'],
        water: ['Poliwag', 'Poliwhirl', 'Magikarp'],
        headbutt: ['Exeggcute', 'Hoothoot', 'Ledyba', 'Spinarak', 'Pineco'],
    }),
    [new RouteKillRequirement(10, 29)]
));
Routes.add(new Route(
    GameConstants.Region.johto, 31,
    new RoutePokemon({
        land: ['Pidgey', 'Rattata', 'Caterpie', 'Metapod', 'Weedle', 'Kakuna', 'Zubat', 'Poliwag', 'Hoothoot', 'Ledyba', 'Spinarak', 'Bellsprout'],
        water: ['Poliwag', 'Poliwhirl', 'Magikarp'],
        headbutt: ['Spearow', 'Exeggcute', 'Hoothoot', 'Ledyba', 'Spinarak', 'Aipom', 'Pineco', 'Heracross'],
    }),
    [new RouteKillRequirement(10, 30)]
));
Routes.add(new Route(
    GameConstants.Region.johto, 32,
    new RoutePokemon({
        land: ['Rattata', 'Ekans', 'Zubat', 'Bellsprout', 'Mareep', 'Hoppip', 'Wooper'],
        water: ['Tentacool', 'Tentacruel', 'Quagsire', 'Magikarp', 'Qwilfish'],
        headbutt: ['Exeggcute', 'Hoothoot', 'Pineco'],
    }),
    [new GymBadgeRequirement(BadgeCase.Badge.Zephyr)]
));
Routes.add(new Route(
    GameConstants.Region.johto, 33,
    new RoutePokemon({
        land: ['Spearow', 'Rattata', 'Ekans', 'Zubat', 'Hoppip'],
        headbutt: ['Spearow', 'Aipom', 'Heracross'],
    }),
    [
        new RouteKillRequirement(10, 32),
        new ClearDungeonRequirement(1, Statistics.getDungeonIndex('Union Cave')),
    ]
));
Routes.add(new Route(
    GameConstants.Region.johto, 34,
    new RoutePokemon({
        land: ['Rattata', 'Abra', 'Drowzee', 'Ditto'],
        water: ['Tentacool', 'Tentacruel', 'Krabby', 'Magikarp', 'Staryu', 'Corsola', 'Kingler'],
        headbutt: ['Exeggcute', 'Hoothoot', 'Ledyba', 'Spinarak', 'Pineco'],
    }),
    [
        new RouteKillRequirement(10, 33),
        new GymBadgeRequirement(BadgeCase.Badge.Hive),
        new ClearDungeonRequirement(1, Statistics.getDungeonIndex('Union Cave')),
    ]
));
Routes.add(new Route(
    GameConstants.Region.johto, 35,
    new RoutePokemon({
        land: ['Pidgey', 'Nidoran(F)', 'Nidoran(M)', 'Abra', 'Drowzee', 'Ditto', 'Hoothoot', 'Yanma'],
        water: ['Psyduck', 'Golduck', 'Poliwag', 'Magikarp'],
        headbutt: ['Exeggcute', 'Hoothoot', 'Ledyba', 'Spinarak', 'Pineco'],
    }),
    [new GymBadgeRequirement(BadgeCase.Badge.Plain)]
));
Routes.add(new Route(
    GameConstants.Region.johto, 36,
    new RoutePokemon({
        land: ['Pidgey', 'Nidoran(M)', 'Nidoran(F)', 'Vulpix', 'Growlithe', 'Hoothoot', 'Stantler', 'Sudowoodo'],
        headbutt: ['Exeggcute', 'Hoothoot', 'Ledyba', 'Spinarak', 'Pineco'],
    }),
    [new RouteKillRequirement(10, 35)]
));
Routes.add(new Route(
    GameConstants.Region.johto, 37,
    new RoutePokemon({
        land: ['Pidgey', 'Pidgeotto', 'Vulpix', 'Growlithe', 'Hoothoot', 'Ledyba', 'Spinarak', 'Stantler'],
        headbutt: ['Exeggcute', 'Hoothoot', 'Ledyba', 'Spinarak', 'Pineco'],
    }),
    [new RouteKillRequirement(10, 36)]
));
Routes.add(new Route(
    GameConstants.Region.johto, 38,
    new RoutePokemon({
        land: ['Rattata', 'Raticate', 'Meowth', 'Magnemite', 'Farfetch\'d', 'Tauros', 'Snubbull', 'Miltank'],
        headbutt: ['Exeggcute', 'Hoothoot', 'Ledyba', 'Spinarak', 'Pineco'],
    }),
    [new GymBadgeRequirement(BadgeCase.Badge.Fog)]
));
Routes.add(new Route(
    GameConstants.Region.johto, 39,
    new RoutePokemon({
        land: ['Rattata', 'Raticate', 'Meowth', 'Magnemite', 'Farfetch\'d', 'Tauros', 'Miltank'],
        headbutt: ['Exeggcute', 'Hoothoot', 'Ledyba', 'Spinarak', 'Pineco'],
    }),
    [new RouteKillRequirement(10, 38)]
));
Routes.add(new Route(
    GameConstants.Region.johto, 40,
    new RoutePokemon({
        water: ['Tentacool', 'Tentacruel', 'Krabby', 'Magikarp', 'Staryu', 'Corsola', 'Kingler'],
    }),
    [new RouteKillRequirement(10, 39)]
));
Routes.add(new Route(
    GameConstants.Region.johto, 41,
    new RoutePokemon({
        water: ['Tentacool', 'Tentacruel', 'Mantine', 'Magikarp', 'Chinchou', 'Shellder'],
    }),
    [new RouteKillRequirement(10, 40)]
));
Routes.add(new Route(
    GameConstants.Region.johto, 42,
    new RoutePokemon({
        land: ['Spearow', 'Zubat', 'Mankey', 'Mareep', 'Flaaffy'],
        water: ['Goldeen', 'Seaking', 'Magikarp'],
        headbutt: ['Spearow', 'Aipom', 'Heracross'],
    }),
    [new GymBadgeRequirement(BadgeCase.Badge.Mineral)]
));
Routes.add(new Route(
    GameConstants.Region.johto, 43,
    new RoutePokemon({
        land: ['Pidgeotto', 'Venonat', 'Noctowl', 'Mareep', 'Flaaffy', 'Girafarig'],
        water: ['Magikarp', 'Poliwag'],
        headbutt: ['Venonat', 'Exeggcute', 'Hoothoot', 'Pineco'],
    }),
    [new GymBadgeRequirement(BadgeCase.Badge.Glacier)]
));
Routes.add(new Route(
    GameConstants.Region.johto, 44,
    new RoutePokemon({
        land: ['Bellsprout', 'Weepinbell', 'Lickitung', 'Tangela'],
        water: ['Poliwag', 'Poliwhirl', 'Magikarp', 'Remoraid'],
        headbutt: ['Spearow', 'Aipom', 'Heracross'],
    }),
    [new GymBadgeRequirement(BadgeCase.Badge.Glacier)]
));
Routes.add(new Route(
    GameConstants.Region.johto, 45,
    new RoutePokemon({
        land: ['Geodude', 'Graveler', 'Gligar', 'Teddiursa', 'Skarmory', 'Phanpy'],
        water: ['Magikarp', 'Poliwag', 'Dratini'],
        headbutt: ['Spearow', 'Aipom', 'Heracross'],
    }),
    [new GymBadgeRequirement(BadgeCase.Badge.Rising)]
));
Routes.add(new Route(
    GameConstants.Region.johto, 46,
    new RoutePokemon({
        land: ['Spearow', 'Rattata', 'Geodude'],
        headbutt: ['Spearow', 'Aipom', 'Heracross'],
    }),
    [new RouteKillRequirement(10, 45)]
));
Routes.add(new Route(
    GameConstants.Region.johto, 47,
    new RoutePokemon({
        land: ['Raticate', 'Spearow', 'Fearow', 'Gloom', 'Farfetch\'d', 'Ditto', 'Noctowl', 'Miltank'],
        water: ['Tentacool', 'Seel', 'Staryu', 'Magikarp', 'Shellder', 'Chinchou', 'Lanturn'],
        headbutt: ['Metapod', 'Butterfree', 'Kakuna', 'Beedrill', 'Exeggcute', 'Hoothoot', 'Ledyba', 'Spinarak', 'Pineco', 'Heracross'],
    }),
    [new GymBadgeRequirement(BadgeCase.Badge.Storm)]
));
Routes.add(new Route(
    GameConstants.Region.johto, 48,
    new RoutePokemon({
        land: ['Fearow', 'Vulpix', 'Gloom', 'Diglett', 'Growlithe', 'Farfetch\'d', 'Tauros', 'Hoppip', 'Girafarig'],
        headbutt: ['Exeggcute', 'Hoothoot', 'Ledyba', 'Spinarak', 'Pineco'],
    }),
    [new RouteKillRequirement(10, 47)]
));
Routes.add(new Route(
    GameConstants.Region.johto, 26,
    new RoutePokemon({
        land: ['Raticate', 'Arbok', 'Sandslash', 'Ponyta', 'Doduo', 'Dodrio', 'Quagsire'],
        water: ['Tentacool', 'Tentacruel', 'Magikarp', 'Shellder', 'Chinchou', 'Lanturn'],
        headbutt: ['Exeggcute', 'Hoothoot', 'Ledyba', 'Spinarak', 'Pineco'],
    }),
    [new RouteKillRequirement(10, 46)],
    49
));
Routes.add(new Route(
    GameConstants.Region.johto, 27,
    new RoutePokemon({
        land: ['Raticate', 'Arbok', 'Sandslash', 'Ponyta', 'Doduo', 'Dodrio', 'Quagsire'],
        water: ['Tentacool', 'Tentacruel', 'Magikarp', 'Shellder', 'Chinchou', 'Lanturn'],
        headbutt: ['Exeggcute', 'Hoothoot', 'Ledyba', 'Spinarak', 'Pineco'],
    }),
    [new RouteKillRequirement(10, 26)],
    50
));
Routes.add(new Route(
    GameConstants.Region.johto, 28,
    new RoutePokemon({
        land: ['Ponyta', 'Tangela', 'Donphan', 'Ursaring', 'Rapidash', 'Doduo', 'Dodrio', 'Sneasel', 'Murkrow'],
        water: ['Poliwag', 'Poliwhirl', 'Magikarp'],
        headbutt: ['Natu', 'Aipom', 'Heracross'],
    }),
    [new GymBadgeRequirement(BadgeCase.Badge.Elite_JohtoChampion)],
    51
));

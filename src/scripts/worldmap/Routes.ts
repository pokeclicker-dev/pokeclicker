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
    [new GymBadgeRequirement(BadgeCase.Badge.Cascade)]
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
    [new ClearDungeonRequirement(1, Statistics.getDungeonIndex('Rock Tunnel'))],
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
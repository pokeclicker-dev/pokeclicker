class MapHelper {
    public static returnToMap() {
        if (player.currentTown()) {
            return this.moveToTown(player.currentTown());
        }
        if (player.route()) {
            return this.moveToRoute(player.route(), player.region);
        }
    }

    public static moveToRoute = function (route: number, region: GameConstants.Region) {
        if (isNaN(route)) {
            return;
        }
        let genNewEnemy = false;
        if (route != player.route()) {
            genNewEnemy = true;
        }
        if (this.accessToRoute(route, region)) {
            player.route(route);
            player.region = region;
            player.currentTown('');
            if (genNewEnemy) {
                Battle.generateNewEnemy();
            }
            App.game.gameState = GameConstants.GameState.fighting;
            GameController.applyRouteBindings();
        } else {
            let reqsList = '';

            if (!MapHelper.routeExist(route, region)) {
                reqsList += `<br>Route ${route} does not exist in the ${GameConstants.Region[region]} region.`;
            }

            if (!MapHelper.hasBadgeReq(route, region)) {
                const badgeNumber = GameConstants.routeBadgeRequirements[region][route];
                reqsList += `<br>Requires the ${GameConstants.camelCaseToString(BadgeCase.Badge[badgeNumber])} badge.`;
            }

            if (!MapHelper.hasDungeonReq(route, region)) {
                const dungeon = GameConstants.routeDungeonRequirements[region][route];
                reqsList += `<br>${dungeon} dungeon needs to be completed.`;
            }

            if (!MapHelper.hasRouteKillReq(route, region)) {
                const reqList = GameConstants.routeRequirements[region][route];
                const routesNotCompleted = [];

                for (let i = 0; i < reqList.length; i++) {
                    const route: number = reqList[i];
                    if (App.game.statistics.routeKills[route]() < GameConstants.ROUTE_KILLS_NEEDED) {
                        routesNotCompleted.push(route);
                    }
                }

                if (routesNotCompleted.length > 0) {
                    const routesList = routesNotCompleted.join(', ');
                    if (routesNotCompleted.length > 1) {
                        reqsList += `<br>Routes ${routesList} still need to be completed.`;
                    } else {
                        reqsList += `<br>Route ${routesList} still needs to be completed.`;
                    }
                }
            }

            Notifier.notify({ message: `You don't have access to that route yet.${reqsList}`, type: GameConstants.NotificationOption.warning });
        }
    };

    public static routeExist(route: number, region: GameConstants.Region): boolean {
        return route >= GameConstants.RegionRoute[region][0] && route <= GameConstants.RegionRoute[region][1];
    }

    public static normalizeRoute(route: number, region: GameConstants.Region): number {
        // get route placement within this region
        const localRouteSequence = (route - GameConstants.RegionRoute[region][0]) + 1;
        // calculate total routes per previous regions
        const previousRegionsRoutes = Object.values(GameConstants.RegionRoute).slice(0, region);
        const previousRegionsRoutesLast = previousRegionsRoutes.reduce((a, b) => {
            return a + (b[1] - (b[0] - 1));
        }, 0);
        // get the route in sequence from all regions
        return previousRegionsRoutesLast + localRouteSequence;
    }

    private static hasBadgeReq(route: number, region: GameConstants.Region) {
        return App.game.badgeCase.hasBadge(GameConstants.routeBadgeRequirements[region][route]);
    }

    private static hasDungeonReq(route: number, region: GameConstants.Region) {
        const dungeonReq = GameConstants.routeDungeonRequirements[region][route];
        return dungeonReq == undefined || 0 < App.game.statistics.dungeonsCleared[Statistics.getDungeonIndex(dungeonReq)]();
    }

    private static hasRouteKillReq(route: number, region: GameConstants.Region) {
        const reqList = GameConstants.routeRequirements[region][route];
        if (reqList == undefined) {
            return true;
        }
        for (let i = 0; i < reqList.length; i++) {
            const route: number = reqList[i];
            if (App.game.statistics.routeKills[route]() < GameConstants.ROUTE_KILLS_NEEDED) {
                return false;
            }
        }
        return true;
    }

    public static accessToRoute = function (route: number, region: GameConstants.Region) {
        return this.routeExist(route, region) && this.hasBadgeReq(route, region) && this.hasDungeonReq(route, region) && this.hasRouteKillReq(route, region);
    };

    public static calculateBattleCssClass(): string {
        const area = player.route() || player.town()?.name() || undefined;

        if (GameConstants.WaterAreas[player.region].has(area)) {
            return 'water';
        } else if (GameConstants.IceAreas[player.region].has(area)) {
            return 'ice';
        } else if (GameConstants.ForestAreas[player.region].has(area)) {
            return 'forest';
        } else if (GameConstants.CaveAreas[player.region].has(area)) {
            return 'cave';
        } else if (GameConstants.GemCaveAreas[player.region].has(area)) {
            return 'cave-gem';
        } else if (GameConstants.PowerPlantAreas[player.region].has(area)) {
            return 'power-plant';
        } else if (GameConstants.MansionAreas[player.region].has(area)) {
            return 'mansion';
        } else if (GameConstants.GraveyardAreas[player.region].has(area)) {
            return 'graveyard';
        }
    }

    public static calculateRouteCssClass(route: number, region: GameConstants.Region): string {
        let cls;

        if (player.route() == route && player.region == region) {
            cls = 'currentRoute';
        } else if (MapHelper.accessToRoute(route, region)) {
            if (App.game.statistics.routeKills[route]() >= GameConstants.ROUTE_KILLS_NEEDED) {
                cls = 'unlockedRoute';
            } else {
                cls = 'unlockedUnfinishedRoute';
            }
        } else {
            cls = 'lockedRoute';
        }

        // Water routes
        if (GameConstants.WaterAreas[region].has(route)) {
            cls = `${cls} waterRoute`;
        }

        return cls;
    }

    public static calculateTownCssClass(town: string): string {
        // TODO(@Isha) this is very weird, refactor this.
        if (App.game.keyItems.hasKeyItem(KeyItems.KeyItem[town])) {
            return 'city unlockedTown';
        }
        if (player.currentTown() == town) {
            return 'city currentTown';
        }
        if (MapHelper.accessToTown(town)) {
            if (dungeonList.hasOwnProperty(town)) {
                if (App.game.statistics.dungeonsCleared[Statistics.getDungeonIndex(town)]()) {
                    return 'dungeon completedDungeon';
                }
                return 'dungeon unlockedDungeon';
            }
            if (gymList.hasOwnProperty(town)) {
                // If defeated the previous gym, but not this one
                const gymIndex = Statistics.getGymIndex(town);
                if ((gymIndex == 0 || App.game.statistics.gymsDefeated[gymIndex - 1]()) && !App.game.statistics.gymsDefeated[gymIndex]()) {
                    return 'city unlockedUnfinishedTown';
                }
            }
            return 'city unlockedTown';
        }
        if (dungeonList.hasOwnProperty(town)) {
            return 'dungeon';
        }
        return 'city';
    }

    public static accessToTown(townName: string): boolean {
        const town = TownList[townName];
        if (!town) {
            return false;
        }
        return town.isUnlocked();
    }

    public static moveToTown(townName: string) {
        if (MapHelper.accessToTown(townName)) {
            App.game.gameState = GameConstants.GameState.idle;
            player.route(0);
            player.town(TownList[townName]);
            player.currentTown(townName);
            Battle.enemyPokemon(null);
            //this should happen last, so all the values all set beforehand
            App.game.gameState = GameConstants.GameState.town;
            GameController.applyRouteBindings();
        } else {
            const town = TownList[townName];
            let reqsList = '';

            if (town instanceof DungeonTown) {
                if (town.badgeReq && !App.game.badgeCase.hasBadge(town.badgeReq)) {
                    reqsList += `<br/>Requires the ${GameConstants.camelCaseToString(BadgeCase.Badge[town.badgeReq])} badge.`;
                }
            }

            if (!town.hasDungeonReq()) {
                reqsList += `<br/>${town.dungeonReq} needs to be completed.`;
            }

            if (!town.hasRouteReq()) {
                const reqList = town.reqRoutes;
                const routesNotCompleted = [];

                for (let i = 0; i < reqList.length; i++) {
                    const route: number = reqList[i];
                    if (App.game.statistics.routeKills[route]() < GameConstants.ROUTE_KILLS_NEEDED) {
                        routesNotCompleted.push(route);
                    }
                }

                if (routesNotCompleted.length > 0) {
                    const routesList = routesNotCompleted.join(', ');
                    if (routesNotCompleted.length > 1) {
                        reqsList += `<br/>Routes ${routesList} still need to be completed.`;
                    } else {
                        reqsList += `<br/>Route ${routesList} still needs to be completed.`;
                    }
                }
            }

            Notifier.notify({ message: `You don't have access to that location yet.${reqsList}`, type: GameConstants.NotificationOption.warning });
        }
    }

    public static validRoute(route = 0, region: GameConstants.Region = 0): boolean {
        return route >= GameConstants.RegionRoute[region][0] && route <= GameConstants.RegionRoute[region][1];
    }

    public static openShipModal() {
        const openModal = () => {
            $('#ShipModal').modal('show');
        };
        switch (player.region) {
            case 0:
                if (TownList['Vermillion City'].isUnlocked() && player.highestRegion() > 0) {
                    openModal();
                    return;
                }
            case 1:
                if (TownList['Olivine City'].isUnlocked()) {
                    openModal();
                    return;
                }
            case 2:
                if (TownList['Slateport City'].isUnlocked()) {
                    openModal();
                    return;
                }
        }
        Notifier.notify({ message: 'You cannot access this dock yet', type: GameConstants.NotificationOption.warning });
    }

    public static ableToTravel() {
        return player.highestRegion() < GameConstants.MAX_AVAILABLE_REGION && App.game.party.caughtPokemon.filter(p => p.id > 0).length >= GameConstants.TotalPokemonsPerRegion[player.highestRegion()];
    }

    public static travelToNextRegion() {
        if (MapHelper.ableToTravel()) {
            player.highestRegion(player.highestRegion() + 1);
            MapHelper.moveToTown(GameConstants.StartingTowns[player.highestRegion()]);
            player.region = player.highestRegion();
        }
    }

}

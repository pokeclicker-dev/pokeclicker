class BattleFrontier {
    //Move to stats later on, so it saves
    public static highestStage = ko.observable(0).extend({ numeric: 0 });

    constructor() {}

    public static canAccess() {
        // TODO: check if player can access yet
        return TownList['Battle Frontier'].isUnlocked();
    }

    public static enter() {
        App.game.gameState = GameConstants.GameState.battleFrontier;
    }

    public static start() {
        BattleFrontierRunner.start();
    }

    fromJSON(json): void {
        if (!json) {
            return;
        }
    }

    toJSON(): Record<string, any> {
        return {};
    }

}

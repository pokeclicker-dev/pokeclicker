class BattleFrontier {
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

    public static leave() {
        // Put the user back in the town
        App.game.gameState = GameConstants.GameState.town;
    }
}

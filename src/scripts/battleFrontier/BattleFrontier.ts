class BattleFrontier {
    //Move to stats later on, so it saves
    public static highestStage = ko.observable(0).extend({ numeric: 0 });
    // TODO: rafactor to MilstoneReward class
    private static readonly milestoneRewards = [
        {item: 'Pokeball', amount: 10, stage: 10},
        {item: 'Greatball', amount: 10, stage: 20},
        {item: 'Ultraball', amount: 10, stage: 30},
        {item: 'Ultraball', amount: 50, stage: 30},
        {item: 'Masterball', amount: 1, stage: 50},
        {item: 'Masterball', amount: 1, stage: 100},
        {item: 'Eevee', amount: 1, stage: 150},
        {item: 'Porygon', amount: 1, stage: 200},
        {item: 'Jynx', amount: 1, stage: 250},
        {item: 'Lickitung', amount: 1, stage: 300},
        {item: 'Togepi', amount: 1, stage: 400},
        {item: 'Beldum', amount: 1, stage: 500},
    ];

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

    public static nextMileStone() {
        return this.milestoneRewards.filter(r => r.stage > this.highestStage() && r.stage > BattleFrontierBattle.stage())[0];
    }

    public static nextMileStoneStage() {
        const reward = this.nextMileStone();
        if (reward) {
            return reward.stage;
        } else {
            return Infinity;
        }
    }

    public static nextMileStoneReward() {
        const reward = this.nextMileStone();
        if (reward) {
            return `${reward.amount} × ${reward.item}`;
        } else {
            return 'Nothing';
        }
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

// TODO: Does this need to be savable, probably not..
class BattleFrontier implements Saveable {
    defaults: Record<string, any>;
    saveKey = 'battleFrontier';

    // TODO: move this to BattleFrontierRunner or whatever..
    public static counter = 0;

    // TODO: Do we need this
    public static fighting = ko.observable(false);

    public static timeRemaining = ko.observable(0).extend({ numeric: 0 });

    //Move to stats later on, so it saves
    public static highestStage = ko.observable(0).extend({ numeric: 0 });

    constructor() {}

    // TODO: move this to BattleFrontierRunner or whatever..
    public static tick() {}

    public static canAccess() {
        // TODO: check if player can access yet
        return TownList['Battle Frontier Exchange'].isUnlocked();
    }

    public static openModal() {
        if (this.canAccess()) {
            App.game.gameState = GameConstants.GameState.paused;
            $('#battleFrontierModal').modal({backdrop: 'static', keyboard: false});
        } else {
            Notifier.notify({ message: 'You need to beat the Hoenn Elite Four and Champion before you can challenge the Battle Frontier', type: GameConstants.NotificationOption.warning });
        }
    }

    public static closeModal() {
        if (!this.fighting()) {
            $('#battleFrontierModal').modal('hide');
        }
    }

    public static start() {
        App.game.gameState = GameConstants.GameState.battleFrontier;
        this.fighting(true);
        BattleFrontierBattle.generateNewEnemy();
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

document.addEventListener('DOMContentLoaded', function (event) {
    $('#battleFrontierModal').on('hide.bs.modal', function () {
        MapHelper.moveToTown('Battle Frontier Exchange');
    });
});
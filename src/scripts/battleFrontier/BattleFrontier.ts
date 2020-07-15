class BattleFrontier {
    //Move to stats later on, so it saves
    public static highestStage = ko.observable(0).extend({ numeric: 0 });

    constructor() {}

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
        if (!BattleFrontierRunner.started) {
            $('#battleFrontierModal').modal('hide');
        }
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

document.addEventListener('DOMContentLoaded', function (event) {
    $('#battleFrontierModal').on('hide.bs.modal', function () {
        MapHelper.moveToTown('Battle Frontier Exchange');
    });
});
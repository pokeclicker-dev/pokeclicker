class BattleFrontier implements Saveable {
    defaults: Record<string, any>;
    saveKey = 'battleFrontier';
    // TODO: Do we need this
    public static inBattle = ko.observable(false);

    public static timeRemaining = ko.observable(0).extend({ numeric: 0 });

    // save in statistics?
    public static currentStage = ko.observable(0).extend({ numeric: 0 });
    public static highestStage = ko.observable(0).extend({ numeric: 0 });

    
    constructor() {}

    public static canAccess() {
        // TODO: check if player can access yet
        return TownList['Battle Frontier Exchange'].isUnlocked();
    }

    public static openModal() {
        if (this.canAccess()) {
            App.game.gameState = GameConstants.GameState.battleFrontier;
            $('#battleFrontierModal').modal({backdrop: 'static', keyboard: false});
        } else {
            Notifier.notify({ message: 'You need to beat the Hoenn Champion before challenging the Battle Frontier', type: GameConstants.NotificationOption.warning });
        }
    }

    public static closeModal() {
        if (!this.inBattle()) {
            $('#battleFrontierModal').modal('hide');
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

document.addEventListener('DOMContentLoaded', function (event) {
    $('#battleFrontierModal').on('hide.bs.modal', function () {
        MapHelper.moveToTown('Battle Frontier Exchange');
    });
});
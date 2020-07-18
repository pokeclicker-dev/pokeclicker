// TODO: Does this need to be savable, probably not..
class BattleFrontierRunner {
    public static timeLeft: KnockoutObservable<number> = ko.observable(GameConstants.GYM_TIME);
    public static timeLeftPercentage: KnockoutObservable<number> = ko.observable(100);

    // TODO: move this to BattleFrontierRunner or whatever..
    public static counter = 0;

    public static started = ko.observable(false);

    constructor() {}

    // TODO: Count down the timer..
    public static tick() {
        if (!this.started()) {
            return;
        }
        if (this.timeLeft() < 0) {
            this.battleLost();
        }
        this.timeLeft(this.timeLeft() - GameConstants.GYM_TICK);
        this.timeLeftPercentage(Math.floor(this.timeLeft() / GameConstants.GYM_TIME * 100));
    }

    public static start() {
        this.started(true);
        BattleFrontierBattle.stage(1);
        BattleFrontierBattle.pokemonIndex(0);
        BattleFrontierBattle.generateNewEnemy();
        BattleFrontierRunner.timeLeft(GameConstants.GYM_TIME);
        BattleFrontierRunner.timeLeftPercentage(100);
        App.game.gameState = GameConstants.GameState.battleFrontier;
    }

    public static end() {
        BattleFrontierBattle.enemyPokemon(null);
        this.started(false);
    }

    public static resetTimer() {
        BattleFrontierRunner.timeLeft(GameConstants.GYM_TIME);
        BattleFrontierRunner.timeLeftPercentage(100);
    }

    public static battleLost() {
        // Give Battle Points based on how far the user got
        const battlePointsMultiplier = Math.floor((GameHelper.incrementObservable(BattleFrontierBattle.stage(BattleFrontierBattle.stage() / 100), 1)))
        const battlePointsEarned = BattleFrontierBattle.stage() * battlePointMultiplier;
        const moneyEarned = BattleFrontierBattle.stage() * 100;

        Notifier.notify({ title: 'Battle Frontier', message: `You made it to stage ${BattleFrontierBattle.stage()}.<br/>You received ${battlePointsEarned} BP`, type: GameConstants.NotificationOption.success, timeout: 5 * GameConstants.MINUTE });

        // Award battle points
        App.game.wallet.gainBattlePoints(battlePointsEarned);
        App.game.wallet.gainMoney(moneyEarned);

        this.end();
    }

    public static battleQuit() {
        // Don't give any points, user quit the challenge
        Notifier.notify({ title: 'Battle Frontier', message: `You made it to stage ${BattleFrontierBattle.stage()}`, type: GameConstants.NotificationOption.info, timeout: 5 * GameConstants.MINUTE });

        this.end();
    }

    public static timeLeftSeconds = ko.pureComputed(function () {
        return (Math.ceil(BattleFrontierRunner.timeLeft() / 10) / 10).toFixed(1);
    })

    public static pokemonLeftImages = ko.pureComputed(function () {
        let str = '';
        for (let i = 0; i < 3; i++) {
            str += `<img class="pokeball-smallest" src="assets/images/pokeball/Pokeball-small.png"${BattleFrontierBattle.pokemonIndex() > i ? ' style="filter: saturate(0);"' : ''}>`;
        }
        return str;
    })
}

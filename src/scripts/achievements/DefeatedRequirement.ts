///<reference path="Requirement.ts"/>

class DefeatedRequirement extends Requirement {
    constructor( value: number, type: GameConstants.AchievementOption = GameConstants.AchievementOption.more) {
        super(value, type);
    }

    public getProgress() {
        return Math.min(player.statistics.totalPokemonDefeated(), this.requiredValue);
    }
}

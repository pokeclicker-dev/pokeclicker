///<reference path="BattleFrontierMilestone.ts"/>
///<reference path="BattleFrontierMilestoneItem.ts"/>

class BattleFrontierMilestones {

    public static milestoneRewards = [];

    public static addMilestone(milestone: BattleFrontierMilestone) {
        this.milestoneRewards.push(milestone);
        // Sort the milestones by lowest to highest stage incase they are added out of order
        this.milestoneRewards.sort((a, b) => a.stage - b.stage);
    }

    public static nextMileStone() {
        // Get the next possible reward
        return this.milestoneRewards.find(r => r.stage > BattleFrontier.highestStage());
    }


    public static nextMileStoneStage(): number {
        // Return the stage number the next reward is unlocked at
        const reward = this.nextMileStone();
        if (reward) {
            return reward.stage;
        } else {
            return Infinity;
        }
    }

    public static nextMileStoneRewardDescription(): string {
        // Return the description of the next reward
        const reward = this.nextMileStone();
        if (reward) {
            return reward.description;
        } else {
            return 'Nothing';
        }
    }

    public static gainReward(defeatedStage: number): void {
        const reward = this.nextMileStone();
        if (reward && reward.stage == defeatedStage) {
            Notifier.notify({ title: '[Battle Frontier]', message: `You've successfully defeated stage ${defeatedStage} and earned ${reward.description}!`, type: GameConstants.NotificationOption.warning, timeout: 1e4 });
            reward.gain();
        }
    }
}

// TODO: update rewards
BattleFrontierMilestones.addMilestone(new BattleFrontierMilestoneItem(5, 'Pokeball', 5));
BattleFrontierMilestones.addMilestone(new BattleFrontierMilestone(7, 'Flying Pikachu', () => {
    App.game.party.gainPokemonById(-1);
}));
BattleFrontierMilestones.addMilestone(new BattleFrontierMilestoneItem(10, 'Pokeball', 50));
BattleFrontierMilestones.addMilestone(new BattleFrontierMilestoneItem(20, 'Greatball', 50));
BattleFrontierMilestones.addMilestone(new BattleFrontierMilestoneItem(30, 'Ultraball', 50));
BattleFrontierMilestones.addMilestone(new BattleFrontierMilestoneItem(50, 'Masterball', 1));
BattleFrontierMilestones.addMilestone(new BattleFrontierMilestoneItem(100, 'Masterball', 2));
BattleFrontierMilestones.addMilestone(new BattleFrontierMilestoneItem(150, 'Masterball', 4));
BattleFrontierMilestones.addMilestone(new BattleFrontierMilestoneItem(200, 'Masterball', 8));
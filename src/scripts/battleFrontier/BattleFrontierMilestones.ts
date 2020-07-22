class BattleFrontierMilestones {

    public static readonly milestoneRewards = [
        {item: 'Pokeball', amount: 0, stage: 10},
        {item: 'Pokeball', amount: 50, stage: 20},
        {item: 'Greatball', amount: 50, stage: 30},
        {item: 'Ultraball', amount: 50, stage: 50},
        {item: 'Masterball', amount: 1, stage: 50},
    ];
    // I did the item this way because I'm weird
    public static readonly milestoneRewards2 = [
        {item: 'Pokeball', amount: 50, stage: 10},
        {item: 'Greatball', amount: 50, stage: 30},
        {item: 'Ultraball', amount: 50, stage: 30},
        {item: 'Masterball', amount: 1, stage: 50},
    ];

    public static nextMileStone() {
        return this.milestoneRewards.filter(r => r.stage > BattleFrontier.highestStage() && r.stage > BattleFrontierRunner.stage())[0];
    }

    public static nextVisualMilestone() {
        return this.milestoneRewards2.filter(r => r.stage > BattleFrontier.highestStage() && r.stage > BattleFrontierRunner.stage())[0];
    }

    public static nextMileStoneStage() {
        const reward = this.nextMileStone();
        const visual = this.nextVisualMilestone();
        if (reward) {
            return visual.stage;
        } else {
            return Infinity;
        }
    }

    public static nextMileStoneReward() {
        const reward = this.nextMileStone();
        const visual = this.nextVisualMilestone();
        if (reward) {
            //this.gainStuff()

            // if (BattleFrontierRunner.stage() === reward.stage) {
            //     this.gainStuff()
            // }
            for (let stage = BattleFrontier.highestStage(); stage < BattleFrontierRunner.stage(); stage++){
                if (reward) {
                  this.gainStuff()
                  BattleFrontier.highestStage(reward.stage);
                }
            }
            return `${visual.amount} × ${visual.item}`;
        } else {
            return 'Nothing';
        }
    }
    
    public static nextMileStoneRewardItem() {
        const reward = this.nextMileStone();
        const visual = this.nextVisualMilestone();
        if (reward) {
            return `${reward.item}`;
        } else {
            return 'Nothing';
        }
    }
    
    public static nextMileStoneRewardAmount() {
        const reward = this.nextMileStone();
        const visual = this.nextVisualMilestone();
        if (reward) {
            return `${reward.amount}`;
        } else {
            return 0;
        }
    }

    public static gainStuff() {
        const milestoneAmount = Number(this.nextMileStoneRewardAmount());
        const milestoneReward = this.nextMileStoneRewardItem();
        ItemList[milestoneReward].gain(milestoneAmount);
    }
}

class BattleFrontierMilestones {

    public static readonly milestoneRewards = [
        {item: 'Pokeball', amount: 5, stage: 1},
        {item: 'Pokeball', amount: 50, stage: 10},
        {item: 'Greatball', amount: 50, stage: 20},
        {item: 'Ultraball', amount: 50, stage: 30},
        {item: 'Masterball', amount: 1, stage: 50},
        {item: 'Masterball', amount: 2, stage: 100},
        {item: 'Masterball', amount: 4, stage: 150},
        {item: 'Masterball', amount: 8, stage: 200},
        {item: 'Apple\'s blood, sweat and tears', amount: 1, stage: 69420666}, // placeholder
    ];

    public static nextMileStone() {
        return this.milestoneRewards.filter(r => r.stage > BattleFrontier.highestStage() && r.stage > BattleFrontierRunner.stage())[0];
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
            // if (BattleFrontierRunner.stage() - 1 <= BattleFrontier.highestStage()) {
            //     return;
            // }
            // BattleFrontier.highestStage(BattleFrontierRunner.stage() - 1);
            // if (reward.stage < BattleFrontierRunner.stage()) {
            //     debugger;
            // }
            this.gainItemForStage(BattleFrontierRunner.stage());
            return `${reward.amount} × ${reward.item}`;
        } else {
            return 'Nothing';
        }
    }
    
    public static nextMileStoneRewardItem() {
        const reward = this.nextMileStone();
        if (reward) {
            return `${reward.item}`;
        } else {
            return 'Nothing';
        }
    }
    
    public static nextMileStoneRewardAmount() {
        const reward = this.nextMileStone();
        if (reward) {
            return `${reward.amount}`;
        } else {
            return 0;
        }
    }

    public static gainItemForStage(cStage: number) {
        const reward = this.nextMileStone();
        const mStage = this.milestoneRewards.find(r => r.stage == cStage);
        if (reward) {
            ItemList[mStage.item].gain(mStage.amount);
        }
    }
}

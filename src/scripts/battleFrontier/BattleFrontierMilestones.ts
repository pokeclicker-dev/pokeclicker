class BattleFrontierMilestones {

    public static readonly milestoneRewards = [
        {item: 'Pokeball', amount: 5, stage: 1},
        {item: 'Pokeball', amount: 50, stage: 10},
        {item: 'Greatball', amount: 50, stage: 20},
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

    public static gainStuff() {
        const milestoneAmount = Number(this.nextMileStoneRewardAmount());
        const milestoneReward = this.nextMileStoneRewardItem();
        ItemList[milestoneReward].gain(milestoneAmount);
    }

    public static gainItemForStage(cStage: number) {
        const reward = this.nextMileStone();
        const mStage = this.milestoneRewards.find(r=>r.stage == cStage);
        ItemList[mStage.item].gain(mStage.amount);
    }
}

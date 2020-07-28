class BattleFrontierMilestone {
    public description: string;
    public stage: number;
    private rewardFunction: () => void;
    
    constructor (stage: number, description: string, rewardFunction: () => void ) {
        this.description = description;
        this.stage = stage;
        this.rewardFunction = rewardFunction;
    }

    gain () {
        this.rewardFunction();
    }
}

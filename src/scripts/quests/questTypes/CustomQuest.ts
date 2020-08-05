class CustomQuest extends Quest implements QuestInterface {
    initialValue?: number;
    customReward?;

    constructor(amount: number, reward: number, description: string, focus, initialValue?: number, customReward?) {
        super(amount, reward);
        this.description = description;
        this.focus = focus;
        this.initialValue = initialValue;
        this.customReward = customReward;
    }

    begin() {
        if (this.initialValue !== undefined) {
            this.initial(this.initialValue);
        } else {
            super.begin();
        }
    }

    claim(): boolean {
        if (this.customReward !== undefined) {
            this.customReward();
        }
        return super.claim();
    }
}

class CustomQuest extends Quest implements QuestInterface {
    initialValue?: number;

    constructor(amount: number, reward: number, description: string, focus, initialValue?: number) {
        super(amount, reward);
        this.description = description;
        this.questFocus = focus;
        this.initialValue = initialValue;
    }

    beginQuest() {
        if (this.initialValue !== undefined) {
            this.initial(this.initialValue);
        } else {
            super.beginQuest();
        }
    }
}

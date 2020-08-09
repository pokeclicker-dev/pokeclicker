class BattleFrontierMilestoneItem extends BattleFrontierMilestone {
    itemName: string;
    amount: number;

    constructor (stage: number, itemName: string, amount: number ) {
        super(stage, description, () => {});
        const description = `${amount} × ${GameConstants.humanifyString(itemName)}`;

        this.itemName = itemName;
        this.amount = amount;
    }

    gain () {
        if (ItemList[this.itemName]) {
            ItemList[this.itemName].gain(this.amount);
        }
    }
}

///<reference path="Item.ts"/>
class EnergyRestore extends Item {

    type: GameConstants.EnergyRestoreSize;

    constructor(type: GameConstants.EnergyRestoreSize, basePrice: number, currency: GameConstants.Currency = GameConstants.Currency.money) {
        super(GameConstants.EnergyRestoreSize[type], basePrice, currency);
        this.type = type;
    }

    use() {
        if (player.itemList[this.name()]() <= 0) {
            return;
        }
        if (Underground.energy === Underground.getMaxEnergy()) {
            Notifier.notify({ message: 'Your mining energy is already full!', type: GameConstants.NotificationOption.danger });
            return;
        }
        Underground.gainEnergyThroughItem(this.type);
        player.loseItem(this.name(), 1);
    }
}

ItemList['SmallRestore']  = new EnergyRestore(GameConstants.EnergyRestoreSize.SmallRestore, 20000);
ItemList['SmallRestore'].isAvailable = ko.pureComputed(() => {
    return TownList['Cinnabar Island'].isUnlocked();
});

ItemList['MediumRestore'] = new EnergyRestore(GameConstants.EnergyRestoreSize.MediumRestore, 40000);
ItemList['MediumRestore'].isAvailable = ko.pureComputed(() => {
    return TownList['Violet City'].isUnlocked();
});

ItemList['LargeRestore']  = new EnergyRestore(GameConstants.EnergyRestoreSize.LargeRestore, 100000);
ItemList['LargeRestore'].isAvailable = ko.pureComputed(() => {
    return TownList['Blackthorn City'].isUnlocked();
});
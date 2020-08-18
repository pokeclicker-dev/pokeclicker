///<reference path="Item.ts"/>
class BattleItem extends Item {

    type: GameConstants.BattleItemType;
    description: string;

    constructor(type: GameConstants.BattleItemType, description: string, basePrice: number, currency: GameConstants.Currency = GameConstants.Currency.money) {
        super(GameConstants.BattleItemType[type], basePrice, currency);
        this.type = type;
        this.description = description;
    }

    use() {
        EffectEngineRunner.addEffect(this.name());
    }
}

ItemList['xAttack'] = new BattleItem(GameConstants.BattleItemType.xAttack, '+50% Bonus to Pokémon attack', 600);
ItemList['xClick'] = new BattleItem(GameConstants.BattleItemType.xClick, '+50% Bonus to click attack', 400);
ItemList['Lucky_egg'] = new BattleItem(GameConstants.BattleItemType.Lucky_egg, '+50% Bonus to experience gained', 800);
ItemList['Lucky_egg'].isAvailable = ko.pureComputed(() => {
    return TownList['Pewter City'].isUnlocked();
});
ItemList['Token_collector'] = new BattleItem(GameConstants.BattleItemType.Token_collector, '+50% Bonus to dungeon tokens gained', 1000);
ItemList['Token_collector'].isAvailable = ko.pureComputed(() => {
    return TownList['Pewter City'].isUnlocked();
});
ItemList['Item_magnet']     = new BattleItem(GameConstants.BattleItemType.Item_magnet, '+50% Chance of gaining an extra item', 1500);
ItemList['Item_magnet'].isAvailable = ko.pureComputed(() => {
    return TownList['Lavender Town'].isUnlocked();
});
ItemList['Lucky_incense']   = new BattleItem(GameConstants.BattleItemType.Lucky_incense, '+50% Bonus to money gained', 2000);
ItemList['Lucky_incense'].isAvailable = ko.pureComputed(() => {
    return TownList['Lavender Town'].isUnlocked();
});
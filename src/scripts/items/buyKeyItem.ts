///<reference path="../keyItems/KeyItems.ts"/>
class BuyKeyItem extends Item {

        item: KeyItems.KeyItem;

        constructor(item: KeyItems.KeyItem, basePrice: number, currency: GameConstants.Currency = GameConstants.Currency.questPoint, options = {}) {
            super(KeyItems.KeyItem[item], basePrice, currency, { maxAmount: 1, ...options });
            this.item = item;
        }

        totalPrice(amt: number) {
            if (amt > this.maxAmount) {
                amt = this.maxAmount;
            }
            return this.basePrice * amt;
        }

        gain(amt: number) {
            App.game.keyItems.gainKeyItem(this.item);
        }

        use() {
        }

        isAvailable(): boolean {
            return super.isAvailable() && !App.game.keyItems.hasKeyItem(this.item);
        }
}


ItemList['Dungeon_ticket'] = new BuyKeyItem(KeyItems.KeyItem.Dungeon_ticket, 100);
ItemList['Explorer_kit']   = new BuyKeyItem(KeyItems.KeyItem.Explorer_kit, 5000);

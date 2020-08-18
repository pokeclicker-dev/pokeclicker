class Shop {
    items: KnockoutObservableArray<Item>;

    constructor(items: Item[]) {
        this.items = ko.observableArray(items);
    }
}

class PokeMart extends Shop {
    constructor(items: Item[]) {
        items = [
            ItemList['Pokeball'],
            ItemList['Greatball'],
            ItemList['Ultraball'],
            ItemList['xAttack'],
            ItemList['xClick'],
            ItemList['Lucky_egg'],
            ItemList['Item_magnet'],
            ItemList['Token_collector'],
            ItemList['Lucky_incense'],
            ItemList['SmallRestore'],
            ItemList['MediumRestore'],
            ItemList['LargeRestore'],
            ...items,
        ];
        super(items);
    }
}


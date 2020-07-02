class BreedingController {
    public static openBreedingModal() {
        if (App.game.breeding.canAccess()) {
            App.game.gameState = GameConstants.GameState.paused;
            $('#breedingModal').modal('show');
        } else {
            Notifier.notify({ message: 'You do not have access to that location', type: GameConstants.NotificationOption.warning });
        }
    }

    public static getEggImage(egg: Egg): string {
        let eggType = EggType[egg.type].toLowerCase();
        if (eggType == 'pokemon') {
            const dataPokemon: DataPokemon = PokemonHelper.getPokemonByName(egg.pokemon);
            eggType = String(PokemonType[dataPokemon.type1]).toLowerCase();
        } else if (eggType == 'fossil') {
            eggType = GameConstants.PokemonToFossil[egg.pokemon];
        }
        return `assets/images/breeding/egg${eggType}.png`;
    }
}

document.addEventListener('DOMContentLoaded', function () {
    $('#breedingModal').on('hidden.bs.modal', function () {
        MapHelper.returnToMap();
    });

});

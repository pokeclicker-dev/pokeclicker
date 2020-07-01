/// <reference path="Quest.ts" />

class CapturePokemonsQuest extends Quest implements QuestInterface {

    constructor(capturesNeeded: number) {
        super(capturesNeeded, capturesNeeded * GameConstants.CAPTURE_POKEMONS_BASE_REWARD);
        this.description = `Capture ${capturesNeeded} pokemon from any source.`;
        this.questFocus = App.game.statistics.totalPokemonCaptured;
    }
}

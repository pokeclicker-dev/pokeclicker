class TimedStoneEvolution extends StoneEvolution {

    stone: GameConstants.StoneType;
    startHour: number; // including
    endHour: number; // excluding

    constructor(basePokemon: string, evolution: string, startHour: number, endHour: number, stone: GameConstants.StoneType = GameConstants.StoneType.Time_stone) {
        super(basePokemon, evolution, stone);
        this.startHour = startHour;
        this.endHour = endHour;
        this.stone = stone;
    }

    isSatisfied(): boolean {
        const currentHour = new Date().getHours();
        // Check that evolution is within reached regions
        return PokemonHelper.calcNativeRegion(this.evolvedPokemon) <= player.highestRegion()
        // Check current time within evolution hours
        && currentHour >= this.startHour && currentHour < this.endHour;
    }
}

class DayTimedStoneEvolution extends TimedStoneEvolution {
    constructor(basePokemon: string, evolution: string, stone: GameConstants.StoneType = GameConstants.StoneType.Time_stone) {
        super(basePokemon, evolution, 6, 18, stone);
    }
}
class NightTimedStoneEvolution extends TimedStoneEvolution {
    constructor(basePokemon: string, evolution: string, stone: GameConstants.StoneType = GameConstants.StoneType.Time_stone) {
        super(basePokemon, evolution, 18, 6, stone);
    }
}
///<reference path="Evolution.ts"/>
///<reference path="EvolutionType.ts"/>

class TimedStoneEvolution extends StoneEvolution {

    stone: GameConstants.StoneType;
    startHour: number; // including
    endHour: number; // excluding
    evolution: string;

    constructor(basePokemon: string, evolution: string, startHour: number, endHour: number, stone: GameConstants.StoneType = GameConstants.StoneType.Time_stone) {
        super(basePokemon, evolution, stone);
        this.startHour = startHour;
        this.endHour = endHour;
        this.stone = stone;
        this.evolution = evolution;
    }

    isSatisfied(): boolean {
        const currentHour = new Date().getHours();
        return currentHour >= this.startHour && currentHour < this.endHour;
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
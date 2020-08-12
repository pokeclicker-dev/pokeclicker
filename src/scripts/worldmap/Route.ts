class Route {
    constructor(
        public region: GameConstants.Region,
        public number: number,
        public pokemon: RoutePokemon,
        public requirements: (EitherRequirement | Requirement)[] = [],
        public orderNumber?: number
    ) {
        orderNumber = orderNumber || number;
    }

    public isUnlocked() {
        return this.requirements.every(requirement => requirement.isCompleted());
    }
}
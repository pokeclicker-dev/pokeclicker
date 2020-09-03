class DiscordCode {
    public claimed = false;
    
    constructor(
        public name: string,
        public image: string,
        public price: number,
        public description: string,
        private claimFunction = () => true
    ) {}

    claim() {
        if (this.claimed) {
            Notifier.notify({
                title: `[Discord Code] ${this.name}`,
                message: 'Already claimed!',
                type: GameConstants.NotificationOption.warning,
            });
            return;
        }

        if (this.claimFunction()) {
            this.claimed = true;
            Notifier.notify({
                title: `[Discord Code] ${this.name}`,
                message: 'Successfully claimed!',
                type: GameConstants.NotificationOption.success,
            });
        }
    }

    toJSON() {
        return {
            name: this.name,
            image: this.image,
            price: this.price,
            description: this.description,
            claimed: this.claimed,
        };
    }
}

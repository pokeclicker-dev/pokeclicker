///<reference path="Requirement.ts"/>

class EitherRequirement {
    constructor(public requirements: Requirement[]) {}

    public isCompleted() {
        return this.requirements.some(requirement => {
            return requirement.isCompleted();
        });
    }

    public hint(): string {
        const output = [];
        this.requirements.forEach(requirement => {
            if (!requirement.isCompleted()) {
                output.push(requirement.hint());
            }
        });
        return output.join(' or ');
    }
}
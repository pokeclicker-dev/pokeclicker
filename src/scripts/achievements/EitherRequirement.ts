///<reference path="Requirement.ts"/>

class EitherRequirement {
    constructor(public requirements: Requirement[]) {}

    public isCompleted() {
        return this.requirements.some(requirement => {
            return requirement.isCompleted();
        });
    }
}
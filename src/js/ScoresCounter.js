export class ScoresCounter {
    constructor() {
        this.count = 0;
        this.strike = 0;
        this.bite = false;
    }
    addPoint(point) {
        this.count += point;
    }
    addStrikes(point) {
        this.strike += point;
    }
    resetStrikes() {
        this.strike = 0;
    }
    resetPoints() {
        this.count = 0;
    }

}

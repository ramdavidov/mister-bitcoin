export class Move {

    constructor(public toId: string, public to: string = '', public at?: number, public amount: number = 0) {
    }

    setAt?() {
        this.at = Date.now()
    }
}
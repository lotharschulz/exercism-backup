export default class Squares {

    public _difference: number
    public _squareOfSum = 0
    public _sumOfSquares = 0

    get difference(): number {
        return this._difference;
    }

    get squareOfSum(): number {
        return this._squareOfSum;
    }

    get sumOfSquares(): number {
        return this._sumOfSquares;
    }

    constructor(x: number = 0) {
        let sum = 0
        for (let i = 1; i <= x; i++){
            sum += i;
            this._sumOfSquares += i * i
        }
        this._squareOfSum = sum * sum
        this._difference = this._squareOfSum - this._sumOfSquares
    }

}

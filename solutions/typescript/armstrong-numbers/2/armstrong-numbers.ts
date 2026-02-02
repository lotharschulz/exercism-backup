export default class ArmstrongNumbers {
    static isArmstrongNumber(input: number): boolean {
        const numberOfDigits = ArmstrongNumbers.getNumberOfDigits(input);
        const digitsArray = ArmstrongNumbers.getDigits(input);
        const reducer = (accumulator: number, currentValue: number) => accumulator + (Math.pow(currentValue, numberOfDigits));
        const armstrongNumberCandidate = digitsArray.reduce(reducer, 0);
        return (input > -1 ? input === armstrongNumberCandidate : false);
    }

    private static getNumberOfDigits(input: number): number {
        return Math.floor(Math.log10(input)+1);
    }

    private static getDigits(input: number): number[] {
        let nmbr = input;
        let digits:number[] = []; 
        if(nmbr>0){
            while (nmbr > 0) {
                digits.push(Math.floor(nmbr % 10));
                nmbr = Math.floor(nmbr / 10);
            }
            digits = digits.reverse();
        } else if (nmbr === 0) {
            digits.push(0);
        }
        return digits;
    }
}
  
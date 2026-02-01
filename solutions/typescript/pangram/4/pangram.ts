class Pangram {
    constructor(readonly input: string) {}
    isPangram = (): boolean => {
      const asciiChars = "abcdefghijklmnopqrstuvwxyz";
      return [...asciiChars].every(char => this.input.toLowerCase().replace(/[^a-z]/g, "").includes(char))
    }
  }
  
export default Pangram

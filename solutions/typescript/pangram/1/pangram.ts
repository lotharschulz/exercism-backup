class Pangram {
    constructor(readonly input: string) {}

    isPangram = () => {
      const lowercaseAlphabet = "abcdefghijklmnopqrstuvwxyz";
      return [...new Set([...this.input.toLowerCase().replace(/\s|_|\d|\.|\"|[^a-z]/g, "")])].sort().join('') === lowercaseAlphabet;
    }
  }
  
export default Pangram
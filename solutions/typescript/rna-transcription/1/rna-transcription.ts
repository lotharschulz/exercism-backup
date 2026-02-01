class Transcriptor {
  dnaToRna = new Map([
    ['G', 'C'],
    ['C', 'G'],
    ['T', 'A'],
    ['A', 'U'],
  ]);

  toRna(dna: string): string {
    const dnaArray = dna.split("");
    if (dnaArray.some(nucleotide => !this.dnaToRna.has(nucleotide))){
      throw "Invalid input DNA.";
    }

    return dnaArray
      .map(nucleotide => this.dnaToRna.get(nucleotide))
      .join("");
  }
}

export default Transcriptor

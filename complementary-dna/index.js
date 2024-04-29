const dna1 = "ATTGC";
const dna2 = "TAACG";
const dna3 = "GTAT";

// solution 1
function DNAStrand1(dna) {
  const dnaComplementary = {
    A: "T",
    T: "A",
    C: "G",
    G: "C",
  };

  return dna
    .split("")
    .map((nucleotide) => dnaComplementary[nucleotide])
    .join("");
}

// solution 2
function DNAStrand2(dna) {
  return dna.replace(/./g, (nucleotide) => {
    switch (nucleotide) {
      case "A":
        return "T";
      case "T":
        return "A";
      case "C":
        return "G";
      case "G":
        return "C";
    }
  });
}

// solution 3
function DNAStrand(dna) {
  return dna.replace(/./g, (nucleotide) => {
    return {
      A: "T",
      T: "A",
      C: "G",
      G: "C",
    }[nucleotide];
  });
}

console.log(DNAStrand(dna1)); // TAACG
console.log(DNAStrand(dna2)); // ATTGC
console.log(DNAStrand(dna3)); // CATA

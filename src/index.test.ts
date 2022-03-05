import { ZoomerIpsum } from "./index";

const lorem = new ZoomerIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4
  },
  wordsPerSentence: {
    max: 16,
    min: 4
  }
});

console.log(lorem.generateWords());
console.log(lorem.generateSentences());
console.log(lorem.generateParagraphs());
console.log(lorem.generateParagraphs(1));
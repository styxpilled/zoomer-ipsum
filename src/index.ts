import { LoremFormat, FORMAT_PLAIN } from "./constants/formats";
import {
  LoremUnit,
  UNIT_PARAGRAPHS,
  UNIT_SENTENCES,
  UNIT_WORDS,
} from "./constants/units";
import { WORDS } from "./constants/words";
import { IPrng } from "./lib/generator";
import ZoomerIpsum from "./lib/ZoomerIpsum";

export interface IzoomerIpsumParams {
  count?: number;
  format?: LoremFormat;
  paragraphLowerBound?: number;
  paragraphUpperBound?: number;
  random?: IPrng;
  sentenceLowerBound?: number;
  sentenceUpperBound?: number;
  units?: LoremUnit;
  words?: string[];
  suffix?: string;
}

const zoomerIpsum = ({
  count = 1,
  format = FORMAT_PLAIN,
  paragraphLowerBound = 3,
  paragraphUpperBound = 7,
  random,
  sentenceLowerBound = 5,
  sentenceUpperBound = 15,
  units = UNIT_SENTENCES,
  words = WORDS,
  suffix = "",
}: IzoomerIpsumParams = {}): string => {
  const options = {
    random,
    sentencesPerParagraph: {
      max: paragraphUpperBound,
      min: paragraphLowerBound,
    },
    words,
    wordsPerSentence: {
      max: sentenceUpperBound,
      min: sentenceLowerBound,
    },
  };

  const lorem: ZoomerIpsum = new ZoomerIpsum(options, format, suffix);

  switch (units) {
    case UNIT_PARAGRAPHS:
      return lorem.generateParagraphs(count);
    case UNIT_SENTENCES:
      return lorem.generateSentences(count);
    case UNIT_WORDS:
      return lorem.generateWords(count);
    default:
      return "";
  }
};

export { zoomerIpsum, ZoomerIpsum };

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
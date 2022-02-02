import { FORMAT_HTML, FORMAT_PLAIN, FORMATS, LoremFormat } from "../constants/formats";
import Generator, { IGeneratorOptions } from "./generator";
import { makeArrayOfStrings } from "../util";

class ZoomerIpsum {
  public generator: Generator;

  constructor(
    options: IGeneratorOptions = {},
    public format: LoremFormat = FORMAT_PLAIN,
    public suffix?: string,
  ) {
    if (FORMATS.indexOf(format.toLowerCase()) === -1) {
      throw new Error(
        `${format} is an invalid format. Please use ${FORMATS.join(" || ")}.`,
      );
    }
    this.generator = new Generator(options);
  }

  public getLineEnding() {
    if (this.suffix) {
      return this.suffix;
    }
    return "\r\n";
  }

  public formatString(str: string): string {
    if (this.format === FORMAT_HTML) {
      return `<p>${str}</p>`;
    }
    return str;
  }

  public formatStrings(strings: string[]): string[] {
    return strings.map((str) => this.formatString(str));
  }

  public generateWords(num: number = 1): string {
    return this.formatString(this.generator.generateRandomWords(num));
  }

  public generateSentences(num: number = 1): string {
    return this.formatString(this.generator.generateRandomParagraph(num));
  }

  public generateParagraphs(num: number = 1): string {
    const makeString = this.generator.generateRandomParagraph.bind(
      this.generator,
    );
    return this.formatStrings(makeArrayOfStrings(num, makeString)).join(
      this.getLineEnding(),
    );
  }
}

export default ZoomerIpsum;
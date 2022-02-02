import { makeArrayOfLength } from ".";
/**
 * @param length  Length "x".
 * @returns       An array of strings of length "x".
 */
export const makeArrayOfStrings = (
  length: number,
  makeString: () => string,
): string[] => {
  const arr = makeArrayOfLength(length);
  return arr.map(() => makeString());
};
/**
 * @param length Length "x".
 * @returns      An array of indexes of length "x".
 */
export const makeArrayOfLength = (length: number = 0): number[] => {
  return Array.apply(null, Array(length)).map(
    (item: any, index: number): number => index,
  );
};
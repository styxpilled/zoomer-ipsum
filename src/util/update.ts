/**
 * DEVELOPMENT AHEAD
 * VERY YUCKY
 */
import { WORDS } from "../constants/words";

WORDS.sort((a,
  b) => {
  return a.localeCompare(b) || a.length - b.length;
})

console.log('export const WORDS = [');
for (const word of WORDS) {
  console.log(`  '${word}',`);
}
console.log('];');
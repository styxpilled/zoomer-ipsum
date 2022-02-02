/**
 * DEVELOPMENT AHEAD
 * VERY YUCKY
 */
import { WORDS } from "../constants/words";

const SORTED = WORDS.sort((a, b) => {
  return a.localeCompare(b) || a.length - b.length;
}).reduce(function (a, b) {
  if (a.indexOf(b) < 0) a.push(b);
  return a;
}, []);

console.log('export const WORDS = [');
for (const word of SORTED) {
  console.log(`  '${word}',`);
}
console.log('];');
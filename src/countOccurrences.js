'use strict';
function countOccurrences(phrase, letter) {
  let counter = 0;
  for (let i = 0; i < phrase.length; i++) {
    if (phrase[i].toLowerCase() === letter) {
      counter++;
    }
  }
  return counter;
}

module.exports = countOccurrences;

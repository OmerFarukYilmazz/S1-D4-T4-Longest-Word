function getLongestWord(metin) {
  /* kodlar buraya */
  if (metin.length < 1) {
    return '';
  }
  let array = metin.split(' ');
  let maxLength = 0;
  let longestWord = '';
  for (let i = 0; i < array.length; i++) {
    if (array[i].length > maxLength) {
      maxLength = array[i].length;
      longestWord = array[i];
    }
  }
  return longestWord;
}

/* Bu satırdan sonraki satırları silmeyin! */
module.exports = getLongestWord;

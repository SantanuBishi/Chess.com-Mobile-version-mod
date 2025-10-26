// src/utils/fenParser.js

export const parseFEN = (fen) => {
  const rows = fen.split(' ')[0].split('/');
  const files = 'abcdefgh';
  const positionMap = {};

  rows.forEach((row, rankIndex) => {
    let fileIndex = 0;
    for (let char of row) {
      if (isNaN(char)) {
        const square = `${files[fileIndex]}${8 - rankIndex}`;
        positionMap[square] = char;
        fileIndex++;
      } else {
        fileIndex += parseInt(char, 10);
      }
    }
  });

  return positionMap;
};

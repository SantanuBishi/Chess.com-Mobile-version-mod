// src/lessons/lessonPositions/l1.js

const l1 = {
  title: 'The King and the Goal',
  pgn: `[Event "King Basics"]
[Site "ChessPlatform"]
[Date "2025.10.26"]
[Round "?"]
[White "User"]
[Black "Bot"]
[Result "*"]
1. e4 e5 2. Ke2 Ke7 3. Kf3 Kf6`,
  challenges: [
    {
      id: 'c1',
      type: 'fen',
      position: 'r2q1rk1/ppp2ppp/2n2n2/3p4/3P4/2N1PN2/PPP2PPP/R1BQ1RK1 w - - 0 1',
      goal: 'Recognize checkmate threat',
      correctMove: 'e3e5',
      hint: 'King ko corner mein safe le ja!',
    },
    {
      id: 'c2',
      type: 'fen',
      position: '8/8/8/8/5K2/8/8/4Q3 w - - 0 1',
      goal: 'Escape from check',
      correctMove: 'Kg5',
      hint: 'Check se bachne ke liye king ko hata!',
    },
    {
      id: 'c3',
      type: 'fen',
      position: '8/8/8/8/8/8/5K2/6k1 w - - 0 1',
      goal: 'Move the king legally',
      correctMove: 'Ke3',
      hint: 'King ko diagonally ya straight chala!',
    },
  ],
};

export default l1;
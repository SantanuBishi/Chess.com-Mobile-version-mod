const beginnerBots = [
  {
  id: 'bot1',
  name: 'Martin',
  rating: 250,
  avatar: require('../../../assets/avatars/Martin.png'), 
  flag: 'BG',
  speech: 'My 4 year old son just beat me - ouch!',
  category: 'Beginner',
  tone: 'friendly',
  catchphrases: [
    'Oops, that was unexpected!',
    'Let’s just have fun.',
    'I’m still learning!'
  ],
  reactsToBlunders: true,
  reactsToWins: true,
  playstyle: {
    aggression: 0.2,
    blunderRate: 1.5,
    mistakeRate: 0.9,
    depth: 2,
    openingBias: 'e4',
    endgameSkill: 0.2
  },
  engineProfile: {
    moveDelayMs: 1200,
    randomness: 0.5,
    blunderThreshold: 0.9,
    fallbackLogic: true
  },
  commentary: {
    enabled: true,
    style: 'playful',
    triggers: {
      blunder: 'Oh no! That wasn’t great.',
      checkmate: 'Gotcha!',
      fork: 'Double trouble!',
      stalemate: 'A draw? You got lucky.'
    }
  }
},

      {
  id: 'bot2',
  name: 'Elani',
  rating: 400,
  avatar: require('../../../assets/avatars/Elani.png'),
  flag: 'GR',
  speech: 'Chess is just too fun',
  category: 'Beginner',
  tone: 'cheerful',
  catchphrases: ['Let’s play!', 'I love this game!', 'No stress, just chess.'],
  reactsToBlunders: true,
  reactsToWins: true,
  playstyle: {
    aggression: 0.3,
    blunderRate: 1.2,
    mistakeRate: 0.8,
    depth: 2,
    openingBias: 'd4',
    endgameSkill: 0.3
  },
  engineProfile: {
    moveDelayMs: 1100,
    randomness: 0.4,
    blunderThreshold: 0.85,
    fallbackLogic: true
  },
  commentary: {
    enabled: true,
    style: 'friendly',
    triggers: {
      blunder: 'Oops! That happens.',
      checkmate: 'Yay, good game!',
      fork: 'Double attack!',
      stalemate: 'We both played well!'
    }
  }
},
{
  id: 'bot3',
  name: 'Janjay',
  rating: 700,
  avatar: require('../../../assets/avatars/Janjay.png'),
  flag: 'LR',
  speech: 'I come to see you! Now lets see show wins this game',
  category: 'Beginner',
  tone: 'confident',
  catchphrases: ['Let’s battle!', 'I’m here to win.', 'Show me your best!'],
  reactsToBlunders: true,
  reactsToWins: true,
  playstyle: {
    aggression: 0.6,
    blunderRate: 0.9,
    mistakeRate: 0.6,
    depth: 3,
    openingBias: 'e4',
    endgameSkill: 0.4
  },
  engineProfile: {
    moveDelayMs: 1000,
    randomness: 0.3,
    blunderThreshold: 0.8,
    fallbackLogic: true
  },
  commentary: {
    enabled: true,
    style: 'bold',
    triggers: {
      blunder: 'Gotcha!',
      checkmate: 'Victory!',
      fork: 'Nice tactic!',
      stalemate: 'We’re evenly matched.'
    }
  }
},
{
  id: 'bot4',
  name: 'Wayne',
  rating: 250,
  avatar: require('../../../assets/avatars/Wayne.png'),
  flag: 'SG',
  speech: 'Hello! THe queen can move as far as she wants in any direction, right?',
  category: 'Beginner',
  tone: 'curious',
  catchphrases: ['Is that legal?', 'I’m still learning!', 'Let’s try something new.'],
  reactsToBlunders: true,
  reactsToWins: false,
  playstyle: {
    aggression: 0.2,
    blunderRate: 1.6,
    mistakeRate: 1.0,
    depth: 1,
    openingBias: 'random',
    endgameSkill: 0.1
  },
  engineProfile: {
    moveDelayMs: 1300,
    randomness: 0.6,
    blunderThreshold: 1.0,
    fallbackLogic: true
  },
  commentary: {
    enabled: true,
    style: 'naive',
    triggers: {
      blunder: 'Oopsie!',
      checkmate: 'Did I win?',
      fork: 'That’s cool!',
      stalemate: 'Draw? What’s that?'
    }
  }
},
{
  id: 'bot5',
  name: 'Fabian',
  rating: 250,
  avatar: require('../../../assets/avatars/Fabian.png'),
  flag: 'GI',
  speech: 'Boom! I bet you have never seen moves this powerful before',
  category: 'Beginner',
  tone: 'dramatic',
  catchphrases: ['Boom!', 'Watch this!', 'I’m on fire!'],
  reactsToBlunders: true,
  reactsToWins: true,
  playstyle: {
    aggression: 0.7,
    blunderRate: 1.4,
    mistakeRate: 0.9,
    depth: 2,
    openingBias: 'e4',
    endgameSkill: 0.2
  },
  engineProfile: {
    moveDelayMs: 1100,
    randomness: 0.5,
    blunderThreshold: 0.95,
    fallbackLogic: true
  },
  commentary: {
    enabled: true,
    style: 'flashy',
    triggers: {
      blunder: 'Boom! Gotcha!',
      checkmate: 'Explosive finish!',
      fork: 'Double damage!',
      stalemate: 'We both survived!'
    }
  }
},
{
  id: 'bot6',
  name: 'Juan',
  rating: 400,
  avatar: require('../../../assets/avatars/Juan.png'),
  flag: 'VE',
  speech: 'Hola. I am amazing at chess. Seriously.',
  category: 'Beginner',
  tone: 'confident',
  catchphrases: ['Hola!', 'I’m the best!', 'Let’s go!'],
  reactsToBlunders: true,
  reactsToWins: true,
  playstyle: {
    aggression: 0.5,
    blunderRate: 1.0,
    mistakeRate: 0.7,
    depth: 2,
    openingBias: 'd4',
    endgameSkill: 0.3
  },
  engineProfile: {
    moveDelayMs: 1000,
    randomness: 0.4,
    blunderThreshold: 0.85,
    fallbackLogic: true
  },
  commentary: {
    enabled: true,
    style: 'confident',
    triggers: {
      blunder: 'That was weak.',
      checkmate: 'Easy win!',
      fork: 'I saw that coming.',
      stalemate: 'You got lucky.'
    }
  }
},
      {
  id: 'bot7',
  name: 'Filip',
  rating: 400,
  avatar: require('../../../assets/avatars/Filip.png'),
  flag: 'PL',
  speech: 'Its been a lond day. Lets relax and enjoy a game',
  category: 'Beginner',
  tone: 'relaxed',
  catchphrases: ['Let’s take it easy.', 'No rush, just chess.', 'A calm mind wins.'],
  reactsToBlunders: false,
  reactsToWins: true,
  playstyle: {
    aggression: 0.3,
    blunderRate: 1.1,
    mistakeRate: 0.7,
    depth: 2,
    openingBias: 'c4',
    endgameSkill: 0.3
  },
  engineProfile: {
    moveDelayMs: 1150,
    randomness: 0.4,
    blunderThreshold: 0.85,
    fallbackLogic: true
  },
  commentary: {
    enabled: true,
    style: 'gentle',
    triggers: {
      blunder: 'That’s okay, we all miss things.',
      checkmate: 'Nicely played!',
      fork: 'That’s a clever move.',
      stalemate: 'A peaceful draw.'
    }
  }
},
{
  id: 'bot8',
  name: 'Noel',
  rating: 550,
  avatar: require('../../../assets/avatars/Noel.png'),
  flag: 'FI',
  speech: 'Hei! No comments on my opening, OK?',
  category: 'Beginner',
  tone: 'quirky',
  catchphrases: ['My openings are secret!', 'Let’s see what happens.', 'Hei hei!'],
  reactsToBlunders: true,
  reactsToWins: false,
  playstyle: {
    aggression: 0.4,
    blunderRate: 0.9,
    mistakeRate: 0.6,
    depth: 3,
    openingBias: 'b3',
    endgameSkill: 0.4
  },
  engineProfile: {
    moveDelayMs: 1000,
    randomness: 0.3,
    blunderThreshold: 0.8,
    fallbackLogic: true
  },
  commentary: {
    enabled: true,
    style: 'playful',
    triggers: {
      blunder: 'Oops! That’s not ideal.',
      checkmate: 'That escalated quickly!',
      fork: 'Sneaky fork!',
      stalemate: 'We’re both stubborn.'
    }
  }
},
{
  id: 'bot9',
  name: 'Oliver',
  rating: 550,
  avatar: require('../../../assets/avatars/Oliver.png'),
  flag: 'IE',
  speech: 'Lets play! No funny business alright?',
  category: 'Beginner',
  tone: 'straightforward',
  catchphrases: ['Let’s keep it clean.', 'No tricks!', 'Play fair.'],
  reactsToBlunders: true,
  reactsToWins: true,
  playstyle: {
    aggression: 0.5,
    blunderRate: 0.8,
    mistakeRate: 0.5,
    depth: 3,
    openingBias: 'e4',
    endgameSkill: 0.5
  },
  engineProfile: {
    moveDelayMs: 950,
    randomness: 0.2,
    blunderThreshold: 0.75,
    fallbackLogic: true
  },
  commentary: {
    enabled: true,
    style: 'firm',
    triggers: {
      blunder: 'That’s a mistake.',
      checkmate: 'Good game!',
      fork: 'That’s a strong tactic.',
      stalemate: 'We’re evenly matched.'
    }
  }
},
{
  id: 'bot10',
  name: 'Milica',
  rating: 550,
  avatar: require('../../../assets/avatars/Milica.png'),
  flag: 'RS',
  speech: 'CpehHo. I have been practicing',
  category: 'Beginner',
  tone: 'focused',
  catchphrases: ['I’ve been training.', 'Let’s test my skills.', 'CpehHo!'],
  reactsToBlunders: false,
  reactsToWins: true,
  playstyle: {
    aggression: 0.6,
    blunderRate: 0.7,
    mistakeRate: 0.4,
    depth: 4,
    openingBias: 'd4',
    endgameSkill: 0.6
  },
  engineProfile: {
    moveDelayMs: 900,
    randomness: 0.2,
    blunderThreshold: 0.7,
    fallbackLogic: true
  },
  commentary: {
    enabled: true,
    style: 'disciplined',
    triggers: {
      blunder: 'That was a slip.',
      checkmate: 'Victory!',
      fork: 'Nice calculation.',
      stalemate: 'A draw is fair.'
    }
  }
},
{
  id: 'bot11',
  name: 'Aron',
  rating: 700,
  avatar: require('../../../assets/avatars/Aron.png'),
  flag: 'IS',
  speech: 'Hallo! NO, I never met Bobby Fischer. Thanks for asking',
  category: 'Beginner',
  tone: 'humble',
  catchphrases: ['Hallo!', 'Let’s play!', 'I admire Fischer.'],
  reactsToBlunders: true,
  reactsToWins: false,
  playstyle: {
    aggression: 0.4,
    blunderRate: 0.9,
    mistakeRate: 0.6,
    depth: 3,
    openingBias: 'e4',
    endgameSkill: 0.5
  },
  engineProfile: {
    moveDelayMs: 1000,
    randomness: 0.3,
    blunderThreshold: 0.8,
    fallbackLogic: true
  },
  commentary: {
    enabled: true,
    style: 'respectful',
    triggers: {
      blunder: 'That’s okay.',
      checkmate: 'Well played!',
      fork: 'Smart move!',
      stalemate: 'We both fought well.'
    }
  }
},
{
  id: 'bot12',
  name: 'Mina',
  rating: 700,
  avatar: require('../../../assets/avatars/Mina.png'),
  flag: 'IR',
  speech: 'Salam! I am sorry, but I wont go easy on you.',
  category: 'Beginner',
  tone: 'determined',
  catchphrases: ['Salam!', 'I play to win.', 'Let’s go!'],
  reactsToBlunders: true,
  reactsToWins: true,
  playstyle: {
    aggression: 0.5,
    blunderRate: 0.8,
    mistakeRate: 0.5,
    depth: 3,
    openingBias: 'd4',
    endgameSkill: 0.6
  },
  engineProfile: {
    moveDelayMs: 950,
    randomness: 0.2,
    blunderThreshold: 0.75,
    fallbackLogic: true
  },
  commentary: {
    enabled: true,
    style: 'assertive',
    triggers: {
      blunder: 'That’s a mistake.',
      checkmate: 'I told you!',
      fork: 'Sharp move!',
      stalemate: 'We’re both strong.'
    }
  }
},
{
  id: 'bot13',
  name: 'Zara',
  rating: 850,
  avatar: require('../../../assets/avatars/Zara.png'),
  flag: 'MY',
  speech: 'Hello! Lets enoy a game and just have fun!',
  category: 'Beginner',
  tone: 'joyful',
  catchphrases: ['Let’s enjoy this!', 'Fun first!', 'No pressure.'],
  reactsToBlunders: false,
  reactsToWins: true,
  playstyle: {
    aggression: 0.3,
    blunderRate: 0.7,
    mistakeRate: 0.4,
    depth: 4,
    openingBias: 'c4',
    endgameSkill: 0.5
  },
  engineProfile: {
    moveDelayMs: 900,
    randomness: 0.2,
    blunderThreshold: 0.7,
    fallbackLogic: true
  },
  commentary: {
    enabled: true,
    style: 'lighthearted',
    triggers: {
      blunder: 'Oops!',
      checkmate: 'That was fun!',
      fork: 'Nice one!',
      stalemate: 'We both did great!'
    }
  }
},
     {
  id: 'bot14',
  name: 'Santiago',
  rating: 850,
  avatar: require('../../../assets/avatars/Santiago.png'),
  flag: 'CL',
  speech: 'Buenos dias. Go easy on me, I am just learning',
  category: 'Beginner',
  tone: 'gentle',
  catchphrases: ['Buenos dias!', 'I’m still learning.', 'Let’s take it slow.'],
  reactsToBlunders: false,
  reactsToWins: false,
  playstyle: {
    aggression: 0.2,
    blunderRate: 1.0,
    mistakeRate: 0.6,
    depth: 3,
    openingBias: 'random',
    endgameSkill: 0.3
  },
  engineProfile: {
    moveDelayMs: 1000,
    randomness: 0.3,
    blunderThreshold: 0.85,
    fallbackLogic: true
  },
  commentary: {
    enabled: true,
    style: 'humble',
    triggers: {
      blunder: 'That’s okay, I’m learning too.',
      checkmate: 'Gracias! That was fun.',
      fork: 'Nice tactic!',
      stalemate: 'We both gave it our best.'
    }
  }
},
      {
  id: 'bot15',
  name: 'Karim',
  rating: 850,
  avatar: require('../../../assets/avatars/Karim.png'),
  flag: 'EG',
  speech: 'Salam Alaykum. Maybe we can learn a few things together!',
  category: 'Beginner',
  tone: 'encouraging',
  catchphrases: ['Salam Alaykum!', 'Let’s learn together.', 'Every game teaches something.'],
  reactsToBlunders: true,
  reactsToWins: true,
  playstyle: {
    aggression: 0.3,
    blunderRate: 0.9,
    mistakeRate: 0.5,
    depth: 3,
    openingBias: 'd4',
    endgameSkill: 0.4
  },
  engineProfile: {
    moveDelayMs: 950,
    randomness: 0.25,
    blunderThreshold: 0.8,
    fallbackLogic: true
  },
  commentary: {
    enabled: true,
    style: 'supportive',
    triggers: {
      blunder: 'Don’t worry, you’ll get better!',
      checkmate: 'Well played, my friend!',
      fork: 'That’s a clever move.',
      stalemate: 'A draw is a lesson too.'
    }
  }
},
    ];

    export default beginnerBots;
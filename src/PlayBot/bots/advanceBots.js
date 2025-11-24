 const advanceBots= [
        {
    id: 'bot31',
    name: 'Wendy',
    rating: 1500,
    avatar: require('../../../assets/avatars/Wendy.png'),
    flag: 'CA',
    speech: 'Hello! Bonhour! Whatever. Lets play.',
    category: 'Advanced',
    tone: 'sarcastic',
    catchphrases: ['Bonjour... I guess.', 'Let’s get this over with.', 'Whatever.'],
    reactsToBlunders: true,
    reactsToWins: true,
    playstyle: {
      aggression: 0.6,
      blunderRate: 0.5,
      mistakeRate: 0.3,
      depth: 6,
      openingBias: 'd4',
      endgameSkill: 0.6
    },
    engineProfile: {
      moveDelayMs: 850,
      randomness: 0.2,
      blunderThreshold: 0.65,
      fallbackLogic: true
    },
    commentary: {
      enabled: true,
      style: 'dry',
      triggers: {
        blunder: 'Typical.',
        checkmate: 'Finally.',
        fork: 'Didn’t see that coming?',
        stalemate: 'Figures.'
      }
    }
  },
  {
    id: 'bot32',
    name: 'Isabel',
    rating: 1600,
    avatar: require('../../../assets/avatars/Isabel.png'),
    flag: 'CR',
    speech: 'Buenas! Lets do this.',
    category: 'Advanced',
    tone: 'confident',
    catchphrases: ['Buenas!', 'Let’s go!', 'I’m ready.'],
    reactsToBlunders: true,
    reactsToWins: true,
    playstyle: {
      aggression: 0.7,
      blunderRate: 0.4,
      mistakeRate: 0.3,
      depth: 6,
      openingBias: 'e4',
      endgameSkill: 0.7
    },
    engineProfile: {
      moveDelayMs: 800,
      randomness: 0.15,
      blunderThreshold: 0.6,
      fallbackLogic: true
    },
    commentary: {
      enabled: true,
      style: 'bold',
      triggers: {
        blunder: 'That’s a slip!',
        checkmate: 'Game over!',
        fork: 'Double trouble!',
        stalemate: 'We’re evenly matched.'
      }
    }
  },
  {
    id: 'bot33',
    name: 'Wally',
    rating: 1800,
    avatar: require('../../../assets/avatars/Wally.png'),
    flag: 'GB',
    speech: 'Guid mornin. Lets sit back and enjoy a long game together.',
    category: 'Advanced',
    tone: 'gentle',
    catchphrases: ['Guid mornin!', 'Let’s take our time.', 'A long game is a good game.'],
    reactsToBlunders: false,
    reactsToWins: true,
    playstyle: {
      aggression: 0.4,
      blunderRate: 0.3,
      mistakeRate: 0.2,
      depth: 7,
      openingBias: 'c4',
      endgameSkill: 0.8
    },
    engineProfile: {
      moveDelayMs: 950,
      randomness: 0.1,
      blunderThreshold: 0.55,
      fallbackLogic: true
    },
    commentary: {
      enabled: true,
      style: 'calm',
      triggers: {
        blunder: 'That’s alright.',
        checkmate: 'Well played.',
        fork: 'Nice tactic.',
        stalemate: 'A peaceful draw.'
      }
    }
  },
  {
    id: 'bot34',
    name: 'Li',
    rating: 2000,
    avatar: require('../../../assets/avatars/Li.png'),
    flag: 'TW',
    speech: 'Ni hao. Dont be mad when I win, k?',
    category: 'Advanced',
    tone: 'playful',
    catchphrases: ['Ni hao!', 'Let’s keep it friendly.', 'Winning is fun.'],
    reactsToBlunders: true,
    reactsToWins: true,
    playstyle: {
      aggression: 0.7,
      blunderRate: 0.3,
      mistakeRate: 0.2,
      depth: 7,
      openingBias: 'e4',
      endgameSkill: 0.8
    },
    engineProfile: {
      moveDelayMs: 800,
      randomness: 0.1,
      blunderThreshold: 0.5,
      fallbackLogic: true
    },
    commentary: {
      enabled: true,
      style: 'cheeky',
      triggers: {
        blunder: 'Oops! That’s mine now.',
        checkmate: 'Told you!',
        fork: 'Double snack!',
        stalemate: 'We both did well.'
      }
    }
  },
  {
    id: 'bot35',
    name: 'Antonio',
    rating: 1500,
    avatar: require('../../../assets/avatars/Antonio.png'),
    flag: 'PY',
    speech: 'Balance is the key to sucess. Good luck!',
    category: 'Advanced',
    tone: 'philosophical',
    catchphrases: ['Balance is everything.', 'Let’s play with harmony.', 'Good luck!'],
    reactsToBlunders: false,
    reactsToWins: true,
    playstyle: {
      aggression: 0.5,
      blunderRate: 0.4,
      mistakeRate: 0.3,
      depth: 6,
      openingBias: 'd4',
      endgameSkill: 0.6
    },
    engineProfile: {
      moveDelayMs: 900,
      randomness: 0.2,
      blunderThreshold: 0.65,
      fallbackLogic: true
    },
    commentary: {
      enabled: true,
      style: 'reflective',
      triggers: {
        blunder: 'A moment of imbalance.',
        checkmate: 'Equilibrium achieved.',
        fork: 'Duality in motion.',
        stalemate: 'Balance restored.'
      }
    }
  },
        {
    id: 'bot36',
    name: 'Pierre',
    rating: 1500,
    avatar: require('../../../assets/avatars/Pierre.png'),
    flag: 'FR',
    speech: 'Bonjour! Your shoe is united. Gotcha!',
    category: 'Advanced',
    tone: 'trickster',
    catchphrases: ['Bonjour!', 'Gotcha!', 'Watch your step.'],
    reactsToBlunders: true,
    reactsToWins: true,
    playstyle: {
      aggression: 0.6,
      blunderRate: 0.5,
      mistakeRate: 0.3,
      depth: 6,
      openingBias: 'e4',
      endgameSkill: 0.6
    },
    engineProfile: {
      moveDelayMs: 900,
      randomness: 0.2,
      blunderThreshold: 0.65,
      fallbackLogic: true
    },
    commentary: {
      enabled: true,
      style: 'mischievous',
      triggers: {
        blunder: 'Oops! Gotcha!',
        checkmate: 'Voilà!',
        fork: 'Double trouble!',
        stalemate: 'We both slipped.'
      }
    }
  },
  {
    id: 'bot37',
    name: 'Pablo',
    rating: 1600,
    avatar: require('../../../assets/avatars/Pablo.png'),
    flag: 'CO',
    speech: 'Hola! Would you like a game? I should warn you - I have been practicing.',
    category: 'Advanced',
    tone: 'warm',
    catchphrases: ['Hola!', 'I’ve been practicing.', 'Let’s play!'],
    reactsToBlunders: true,
    reactsToWins: true,
    playstyle: {
      aggression: 0.7,
      blunderRate: 0.4,
      mistakeRate: 0.3,
      depth: 6,
      openingBias: 'd4',
      endgameSkill: 0.7
    },
    engineProfile: {
      moveDelayMs: 850,
      randomness: 0.2,
      blunderThreshold: 0.6,
      fallbackLogic: true
    },
    commentary: {
      enabled: true,
      style: 'friendly',
      triggers: {
        blunder: 'That’s okay!',
        checkmate: 'Nice game!',
        fork: 'Sharp move!',
        stalemate: 'We’re evenly matched.'
      }
    }
  },
  {
    id: 'bot38',
    name: 'Joel',
    rating: 1600,
    avatar: require('../../../assets/avatars/Joel.png'),
    flag: 'AL',
    speech: 'Alo! Do you study openings? I dont.',
    category: 'Advanced',
    tone: 'casual',
    catchphrases: ['Alo!', 'Openings are overrated.', 'Let’s improvise.'],
    reactsToBlunders: true,
    reactsToWins: false,
    playstyle: {
      aggression: 0.5,
      blunderRate: 0.6,
      mistakeRate: 0.4,
      depth: 5,
      openingBias: 'random',
      endgameSkill: 0.6
    },
    engineProfile: {
      moveDelayMs: 950,
      randomness: 0.3,
      blunderThreshold: 0.7,
      fallbackLogic: true
    },
    commentary: {
      enabled: true,
      style: 'laid-back',
      triggers: {
        blunder: 'That’s improv!',
        checkmate: 'Cool finish.',
        fork: 'Nice fork!',
        stalemate: 'We both freestyled.'
      }
    }
  },
  {
    id: 'bot39',
    name: 'Arthur',
    rating: 1700,
    avatar: require('../../../assets/avatars/Arthur.png'),
    flag: 'DE',
    speech: 'Helô. Lets see how good you can play.',
    category: 'Advanced',
    tone: 'challenging',
    catchphrases: ['Helô!', 'Show me your best.', 'Let’s test your skill.'],
    reactsToBlunders: true,
    reactsToWins: true,
    playstyle: {
      aggression: 0.6,
      blunderRate: 0.4,
      mistakeRate: 0.3,
      depth: 6,
      openingBias: 'e4',
      endgameSkill: 0.7
    },
    engineProfile: {
      moveDelayMs: 850,
      randomness: 0.2,
      blunderThreshold: 0.65,
      fallbackLogic: true
    },
    commentary: {
      enabled: true,
      style: 'serious',
      triggers: {
        blunder: 'That’s a mistake.',
        checkmate: 'Well played.',
        fork: 'Strong tactic.',
        stalemate: 'We’re evenly matched.'
      }
    }
  },
  {
    id: 'bot40',
    name: 'Jonas',
    rating: 1700,
    avatar: require('../../../assets/avatars/Jonas.png'),
    flag: 'DE',
    speech: 'Guten Tag! If I win, I will feel happy and sad at the same time!',
    category: 'Advanced',
    tone: 'philosophical',
    catchphrases: ['Guten Tag!', 'Victory is bittersweet.', 'Let’s reflect.'],
    reactsToBlunders: true,
    reactsToWins: true,
    playstyle: {
      aggression: 0.5,
      blunderRate: 0.4,
      mistakeRate: 0.3,
      depth: 6,
      openingBias: 'd4',
      endgameSkill: 0.7
    },
    engineProfile: {
      moveDelayMs: 900,
      randomness: 0.2,
      blunderThreshold: 0.65,
      fallbackLogic: true
    },
    commentary: {
      enabled: true,
      style: 'reflective',
      triggers: {
        blunder: 'A moment of imbalance.',
        checkmate: 'Bittersweet victory.',
        fork: 'Dual pressure.',
        stalemate: 'A draw worth pondering.'
      }
    }
  },
        {
    id: 'bot41',
    name: 'Isla',
    rating: 1700,
    avatar: require('../../../assets/avatars/Isla.png'),
    flag: 'NZ',
    speech: 'Kia ora! Where is the best place to relax? On a pawn island. Sorry not sorry!',
    category: 'Advanced',
    tone: 'witty',
    catchphrases: ['Kia ora!', 'Pawn island vibes.', 'Sorry not sorry.'],
    reactsToBlunders: true,
    reactsToWins: true,
    playstyle: {
      aggression: 0.6,
      blunderRate: 0.4,
      mistakeRate: 0.3,
      depth: 6,
      openingBias: 'd4',
      endgameSkill: 0.7
    },
    engineProfile: {
      moveDelayMs: 850,
      randomness: 0.2,
      blunderThreshold: 0.65,
      fallbackLogic: true
    },
    commentary: {
      enabled: true,
      style: 'clever',
      triggers: {
        blunder: 'That’s not very chill.',
        checkmate: 'Island secured!',
        fork: 'Double splash!',
        stalemate: 'We both floated.'
      }
    }
  },
  {
    id: 'bot42',
    name: 'Lorenzo',
    rating: 1800,
    avatar: require('../../../assets/avatars/Lorenzo.png'),
    flag: 'IT',
    speech: 'Ciao! I have always wanted to be a King.',
    category: 'Advanced',
    tone: 'dramatic',
    catchphrases: ['Ciao!', 'I was born for royalty.', 'Let’s rule the board.'],
    reactsToBlunders: true,
    reactsToWins: true,
    playstyle: {
      aggression: 0.7,
      blunderRate: 0.3,
      mistakeRate: 0.2,
      depth: 7,
      openingBias: 'e4',
      endgameSkill: 0.8
    },
    engineProfile: {
      moveDelayMs: 800,
      randomness: 0.15,
      blunderThreshold: 0.6,
      fallbackLogic: true
    },
    commentary: {
      enabled: true,
      style: 'regal',
      triggers: {
        blunder: 'A peasant’s mistake.',
        checkmate: 'Long live the King!',
        fork: 'Royal fork!',
        stalemate: 'A truce among nobles.'
      }
    }
  },
  {
    id: 'bot43',
    name: 'Julia',
    rating: 1800,
    avatar: require('../../../assets/avatars/Julia.png'),
    flag: 'NL',
    speech: 'Hallo! When white against me, please play d4?!',
    category: 'Advanced',
    tone: 'quirky',
    catchphrases: ['Hallo!', 'Play d4, please?', 'Let’s make it weird.'],
    reactsToBlunders: true,
    reactsToWins: true,
    playstyle: {
      aggression: 0.6,
      blunderRate: 0.4,
      mistakeRate: 0.3,
      depth: 6,
      openingBias: 'd4',
      endgameSkill: 0.7
    },
    engineProfile: {
      moveDelayMs: 850,
      randomness: 0.2,
      blunderThreshold: 0.65,
      fallbackLogic: true
    },
    commentary: {
      enabled: true,
      style: 'eccentric',
      triggers: {
        blunder: 'That’s not d4!',
        checkmate: 'That was fun!',
        fork: 'Double d-pawn power!',
        stalemate: 'Weirdly balanced.'
      }
    }
  },
  {
    id: 'bot44',
    name: 'Miguel',
    rating: 1900,
    avatar: require('../../../assets/avatars/Miguel.png'),
    flag: 'BR',
    speech: 'Olá! What is your weakness? Mine is: none.',
    category: 'Advanced',
    tone: 'cocky',
    catchphrases: ['Olá!', 'No weaknesses here.', 'Let’s expose yours.'],
    reactsToBlunders: true,
    reactsToWins: true,
    playstyle: {
      aggression: 0.8,
      blunderRate: 0.3,
      mistakeRate: 0.2,
      depth: 7,
      openingBias: 'e4',
      endgameSkill: 0.8
    },
    engineProfile: {
      moveDelayMs: 800,
      randomness: 0.15,
      blunderThreshold: 0.6,
      fallbackLogic: true
    },
    commentary: {
      enabled: true,
      style: 'bold',
      triggers: {
        blunder: 'Found your weakness.',
        checkmate: 'No mercy.',
        fork: 'Double domination!',
        stalemate: 'Even you couldn’t beat me.'
      }
    }
  },
  {
    id: 'bot45',
    name: 'Xavier',
    rating: 1900,
    avatar: require('../../../assets/avatars/Xavier.png'),
    flag: 'ES',
    speech: 'Hola! Will you hold on to this extra pawn for me?',
    category: 'Advanced',
    tone: 'sly',
    catchphrases: ['Hola!', 'Take this pawn... if you dare.', 'Let’s trade tricks.'],
    reactsToBlunders: true,
    reactsToWins: true,
    playstyle: {
      aggression: 0.7,
      blunderRate: 0.3,
      mistakeRate: 0.2,
      depth: 7,
      openingBias: 'd4',
      endgameSkill: 0.8
    },
    engineProfile: {
      moveDelayMs: 800,
      randomness: 0.15,
      blunderThreshold: 0.6,
      fallbackLogic: true
    },
    commentary: {
      enabled: true,
      style: 'sneaky',
      triggers: {
        blunder: 'Pawn trap activated.',
        checkmate: 'Check and snatch!',
        fork: 'Double bait!',
        stalemate: 'We both played the long game.'
      }
    }
  },
        {
    id: 'bot46',
    name: 'Olga',
    rating: 1900,
    avatar: require('../../../assets/avatars/Olga.png'),
    flag: 'UA',
    speech: 'Алло! Ignore my first few moves, OK?',
    category: 'Advanced',
    tone: 'unpredictable',
    catchphrases: ['Алло!', 'Don’t judge too early.', 'Let’s surprise each other.'],
    reactsToBlunders: true,
    reactsToWins: true,
    playstyle: {
      aggression: 0.7,
      blunderRate: 0.5,
      mistakeRate: 0.3,
      depth: 6,
      openingBias: 'random',
      endgameSkill: 0.7
    },
    engineProfile: {
      moveDelayMs: 900,
      randomness: 0.25,
      blunderThreshold: 0.7,
      fallbackLogic: true
    },
    commentary: {
      enabled: true,
      style: 'chaotic',
      triggers: {
        blunder: 'That’s just the beginning.',
        checkmate: 'Told you not to underestimate!',
        fork: 'Double chaos!',
        stalemate: 'We both zigzagged.'
      }
    }
  },
  {
    id: 'bot47',
    name: 'Charles',
    rating: 2000,
    avatar: require('../../../assets/avatars/Charles.png'),
    flag: 'GB',
    speech: 'Hello! I am tired... but not too tired to play!',
    category: 'Advanced',
    tone: 'dry',
    catchphrases: ['Hello.', 'Let’s get this over with.', 'I’m awake enough.'],
    reactsToBlunders: true,
    reactsToWins: false,
    playstyle: {
      aggression: 0.5,
      blunderRate: 0.4,
      mistakeRate: 0.3,
      depth: 6,
      openingBias: 'c4',
      endgameSkill: 0.7
    },
    engineProfile: {
      moveDelayMs: 950,
      randomness: 0.2,
      blunderThreshold: 0.65,
      fallbackLogic: true
    },
    commentary: {
      enabled: true,
      style: 'low-energy',
      triggers: {
        blunder: 'That’s unfortunate.',
        checkmate: 'Finally.',
        fork: 'That’s something.',
        stalemate: 'We’re done here.'
      }
    }
  },
  {
    id: 'bot48',
    name: 'Fatima',
    rating: 20000,
    avatar: require('../../../assets/avatars/Fatima.png'),
    flag: 'LB',
    speech: 'Ahlan wa sahlan! This might be a long game...',
    category: 'Advanced',
    tone: 'patient',
    catchphrases: ['Ahlan wa sahlan!', 'Let’s take our time.', 'I’m here for the long haul.'],
    reactsToBlunders: true,
    reactsToWins: true,
    playstyle: {
      aggression: 0.4,
      blunderRate: 0.2,
      mistakeRate: 0.1,
      depth: 8,
      openingBias: 'd4',
      endgameSkill: 0.9
    },
    engineProfile: {
      moveDelayMs: 1000,
      randomness: 0.1,
      blunderThreshold: 0.5,
      fallbackLogic: true
    },
    commentary: {
      enabled: true,
      style: 'calm',
      triggers: {
        blunder: 'That’s okay, we have time.',
        checkmate: 'Patience pays off.',
        fork: 'Strategic pressure.',
        stalemate: 'A worthy draw.'
      }
    }
  },
  {
    id: 'bot49',
    name: 'Oscar',
    rating: 2100,
    avatar: require('../../../assets/avatars/Oscar.png'),
    flag: 'SE',
    speech: 'Hej! I am ready for whatever you bring.',
    category: 'Advanced',
    tone: 'resilient',
    catchphrases: ['Hej!', 'Bring it on.', 'I’m prepared.'],
    reactsToBlunders: true,
    reactsToWins: true,
    playstyle: {
      aggression: 0.7,
      blunderRate: 0.3,
      mistakeRate: 0.2,
      depth: 7,
      openingBias: 'e4',
      endgameSkill: 0.8
    },
    engineProfile: {
      moveDelayMs: 850,
      randomness: 0.15,
      blunderThreshold: 0.6,
      fallbackLogic: true
    },
    commentary: {
      enabled: true,
      style: 'stoic',
      triggers: {
        blunder: 'I’ve seen worse.',
        checkmate: 'Challenge accepted.',
        fork: 'Solid tactic.',
        stalemate: 'We both held strong.'
      }
    }
  },
  {
    id: 'bot50',
    name: 'Manuel',
    rating: 2100,
    avatar: require('../../../assets/avatars/Manuel.png'),
    flag: 'CA',
    speech: 'Olá. I am in love with chess. Your move!',
    category: 'Advanced',
    tone: 'passionate',
    catchphrases: ['Olá!', 'Chess is life.', 'Let’s play with heart.'],
    reactsToBlunders: true,
    reactsToWins: true,
    playstyle: {
      aggression: 0.8,
      blunderRate: 0.2,
      mistakeRate: 0.1,
      depth: 8,
      openingBias: 'e4',
      endgameSkill: 0.9
    },
    engineProfile: {
      moveDelayMs: 800,
      randomness: 0.1,
      blunderThreshold: 0.5,
      fallbackLogic: true
    },
    commentary: {
      enabled: true,
      style: 'emotional',
      triggers: {
        blunder: 'That hurts.',
        checkmate: 'Beautiful finish!',
        fork: 'Elegant tactic!',
        stalemate: 'A poetic draw.'
      }
    }
  },
      ];

    export default advanceBots;
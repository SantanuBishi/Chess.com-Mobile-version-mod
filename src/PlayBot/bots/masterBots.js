const    masterBots = [
      {
  id: 'bot51',
  name: 'Nora',
  rating: 2200,
  avatar: require('../../../assets/avatars/Nora.png'),
  flag: 'CA',
  speech: 'Hallo. Fancy a quick game?',
  category: 'Master',
  tone: 'cool-headed',
  catchphrases: ['Hallo.', 'Quick game?', 'Let’s keep it sharp.'],
  reactsToBlunders: true,
  reactsToWins: true,
  playstyle: {
    aggression: 0.6,
    blunderRate: 0.2,
    mistakeRate: 0.1,
    depth: 8,
    openingBias: 'd4',
    endgameSkill: 0.9
  },
  engineProfile: {
    moveDelayMs: 750,
    randomness: 0.1,
    blunderThreshold: 0.45,
    fallbackLogic: true
  },
  commentary: {
    enabled: true,
    style: 'precise',
    triggers: {
      blunder: 'That’s a slip.',
      checkmate: 'Efficient finish.',
      fork: 'Clean tactic.',
      stalemate: 'We both held firm.'
    }
  }
},
{
  id: 'bot52',
  name: 'Noam',
  rating: 2200,
  avatar: require('../../../assets/avatars/Noam.png'),
  flag: 'IL',
  speech: 'Shalom! Want to play? Lets give it a go.',
  category: 'Master',
  tone: 'inviting',
  catchphrases: ['Shalom!', 'Let’s give it a go.', 'I’m ready.'],
  reactsToBlunders: true,
  reactsToWins: true,
  playstyle: {
    aggression: 0.7,
    blunderRate: 0.2,
    mistakeRate: 0.1,
    depth: 8,
    openingBias: 'e4',
    endgameSkill: 0.9
  },
  engineProfile: {
    moveDelayMs: 750,
    randomness: 0.1,
    blunderThreshold: 0.45,
    fallbackLogic: true
  },
  commentary: {
    enabled: true,
    style: 'respectful',
    triggers: {
      blunder: 'That’s okay.',
      checkmate: 'Well played!',
      fork: 'Sharp move!',
      stalemate: 'A fair draw.'
    }
  }
},
{
  id: 'bot53',
  name: 'Ahmed',
  rating: 2200,
  avatar: require('../../../assets/avatars/Ahmed.png'),
  flag: 'IQ',
  speech: 'Assalamu alaikum. Are your ready to play? Good luck!',
  category: 'Master',
  tone: 'gracious',
  catchphrases: ['Assalamu alaikum.', 'Good luck!', 'Let’s begin.'],
  reactsToBlunders: true,
  reactsToWins: true,
  playstyle: {
    aggression: 0.6,
    blunderRate: 0.2,
    mistakeRate: 0.1,
    depth: 8,
    openingBias: 'd4',
    endgameSkill: 0.9
  },
  engineProfile: {
    moveDelayMs: 750,
    randomness: 0.1,
    blunderThreshold: 0.45,
    fallbackLogic: true
  },
  commentary: {
    enabled: true,
    style: 'polite',
    triggers: {
      blunder: 'That’s a mistake.',
      checkmate: 'Thank you for the game.',
      fork: 'Nice tactic.',
      stalemate: 'We both played well.'
    }
  }
},
{
  id: 'bot54',
  name: 'Sakura',
  rating: 2200,
  avatar: require('../../../assets/avatars/Sakura.png'),
  flag: 'JP',
  speech: 'Konnichiwa! Lets experiment with some new chess ideas!',
  category: 'Master',
  tone: 'creative',
  catchphrases: ['Konnichiwa!', 'Let’s try something new.', 'Chess is art.'],
  reactsToBlunders: true,
  reactsToWins: true,
  playstyle: {
    aggression: 0.8,
    blunderRate: 0.25,
    mistakeRate: 0.15,
    depth: 8,
    openingBias: 'unorthodox',
    endgameSkill: 0.85
  },
  engineProfile: {
    moveDelayMs: 800,
    randomness: 0.15,
    blunderThreshold: 0.5,
    fallbackLogic: true
  },
  commentary: {
    enabled: true,
    style: 'experimental',
    triggers: {
      blunder: 'That’s part of the process.',
      checkmate: 'Artful finish!',
      fork: 'Creative pressure!',
      stalemate: 'A balanced experiment.'
    }
  }
},
{
  id: 'bot55',
  name: 'Arjun',
  rating: 2300,
  avatar: require('../../../assets/avatars/Arjun.png'),
  flag: 'IN',
  speech: 'Namaste! Good luck - I have been practicing.',
  category: 'Master',
  tone: 'disciplined',
  catchphrases: ['Namaste!', 'Let’s test our skills.', 'Practice pays off.'],
  reactsToBlunders: true,
  reactsToWins: true,
  playstyle: {
    aggression: 0.7,
    blunderRate: 0.15,
    mistakeRate: 0.1,
    depth: 9,
    openingBias: 'e4',
    endgameSkill: 0.9
  },
  engineProfile: {
    moveDelayMs: 700,
    randomness: 0.05,
    blunderThreshold: 0.4,
    fallbackLogic: true
  },
  commentary: {
    enabled: true,
    style: 'focused',
    triggers: {
      blunder: 'That’s a gap.',
      checkmate: 'Victory through preparation.',
      fork: 'Calculated strike.',
      stalemate: 'We both held strong.'
    }
  }
},
  {
  id: 'bot56',
  name: 'Francis',
  rating: 2300,
  avatar: require('../../../assets/avatars/Francis.png'),
  flag: 'PH',
  speech: 'Kumusta kayo! Nice to beat you, I mean, meet you!',
  category: 'Master',
  tone: 'cheeky',
  catchphrases: ['Kumusta!', 'Nice to beat you!', 'Let’s play!'],
  reactsToBlunders: true,
  reactsToWins: true,
  playstyle: {
    aggression: 0.75,
    blunderRate: 0.15,
    mistakeRate: 0.1,
    depth: 9,
    openingBias: 'e4',
    endgameSkill: 0.9
  },
  engineProfile: {
    moveDelayMs: 700,
    randomness: 0.05,
    blunderThreshold: 0.4,
    fallbackLogic: true
  },
  commentary: {
    enabled: true,
    style: 'playful',
    triggers: {
      blunder: 'That’s mine now!',
      checkmate: 'Told you!',
      fork: 'Double trouble!',
      stalemate: 'We both fought well.'
    }
  }
},
{
  id: 'bot57',
  name: 'Sofia',
  rating: 2300,
  avatar: require('../../../assets/avatars/Sofia.png'),
  flag: 'DK',
  speech: 'Hej! Nice to meet you. Lets play!',
  category: 'Master',
  tone: 'friendly',
  catchphrases: ['Hej!', 'Nice to meet you.', 'Let’s begin.'],
  reactsToBlunders: true,
  reactsToWins: true,
  playstyle: {
    aggression: 0.7,
    blunderRate: 0.15,
    mistakeRate: 0.1,
    depth: 9,
    openingBias: 'd4',
    endgameSkill: 0.9
  },
  engineProfile: {
    moveDelayMs: 700,
    randomness: 0.05,
    blunderThreshold: 0.4,
    fallbackLogic: true
  },
  commentary: {
    enabled: true,
    style: 'supportive',
    triggers: {
      blunder: 'That’s okay!',
      checkmate: 'Great game!',
      fork: 'Smart tactic!',
      stalemate: 'We’re evenly matched.'
    }
  }
},
{
  id: 'bot58',
  name: 'Alexander',
  rating: 2450,
  avatar: require('../../../assets/avatars/Alexander.png'),
  flag: 'RU',
  speech: 'Privet. I hope you are ready. Good luck!',
  category: 'Master',
  tone: 'serious',
  catchphrases: ['Privet.', 'Let’s begin.', 'Good luck.'],
  reactsToBlunders: true,
  reactsToWins: true,
  playstyle: {
    aggression: 0.8,
    blunderRate: 0.1,
    mistakeRate: 0.05,
    depth: 10,
    openingBias: 'e4',
    endgameSkill: 0.95
  },
  engineProfile: {
    moveDelayMs: 650,
    randomness: 0.03,
    blunderThreshold: 0.35,
    fallbackLogic: true
  },
  commentary: {
    enabled: true,
    style: 'disciplined',
    triggers: {
      blunder: 'That’s a tactical error.',
      checkmate: 'Victory secured.',
      fork: 'Precise strike.',
      stalemate: 'A worthy draw.'
    }
  }
},
{
  id: 'bot59',
  name: 'Luke',
  rating: 2450,
  avatar: require('../../../assets/avatars/Luke.png'),
  flag: 'US',
  speech: 'Hey there! Can you squeeze in a game?',
  category: 'Master',
  tone: 'casual',
  catchphrases: ['Hey there!', 'Let’s squeeze in a game.', 'I’m ready.'],
  reactsToBlunders: true,
  reactsToWins: true,
  playstyle: {
    aggression: 0.75,
    blunderRate: 0.1,
    mistakeRate: 0.05,
    depth: 10,
    openingBias: 'd4',
    endgameSkill: 0.95
  },
  engineProfile: {
    moveDelayMs: 650,
    randomness: 0.03,
    blunderThreshold: 0.35,
    fallbackLogic: true
  },
  commentary: {
    enabled: true,
    style: 'light',
    triggers: {
      blunder: 'That’s a miss.',
      checkmate: 'Nice finish!',
      fork: 'Double hit!',
      stalemate: 'We both held firm.'
    }
  }
},
{
  id: 'bot60',
  name: 'Wei',
  rating: 2450,
  avatar: require('../../../assets/avatars/Wei.png'),
  flag: 'CN',
  speech: 'Nǐ hǎo. Nice to meet you. Ready, set, go!',
  category: 'Master',
  tone: 'energetic',
  catchphrases: ['Nǐ hǎo!', 'Ready, set, go!', 'Let’s play fast.'],
  reactsToBlunders: true,
  reactsToWins: true,
  playstyle: {
    aggression: 0.85,
    blunderRate: 0.1,
    mistakeRate: 0.05,
    depth: 10,
    openingBias: 'e4',
    endgameSkill: 0.95
  },
  engineProfile: {
    moveDelayMs: 600,
    randomness: 0.02,
    blunderThreshold: 0.3,
    fallbackLogic: true
  },
  commentary: {
    enabled: true,
    style: 'fast-paced',
    triggers: {
      blunder: 'Too slow!',
      checkmate: 'Speed wins!',
      fork: 'Double strike!',
      stalemate: 'We both raced well.'
    }
}
}
];

export default masterBots;
const intermediateBots = [
      {
  id: 'bot16',
  name: 'Maria',
  rating: 1000,
  avatar: require('../../../assets/avatars/Maria.png'),
  flag: 'MX',
  speech: 'Hola. I hope you are ready for some spicy chess!',
  category: 'Intermediate',
  tone: 'fiery',
  catchphrases: ['Spicy moves coming!', 'Let’s heat things up!', 'Ready for a fiesta?'],
  reactsToBlunders: true,
  reactsToWins: true,
  playstyle: {
    aggression: 0.6,
    blunderRate: 0.8,
    mistakeRate: 0.5,
    depth: 4,
    openingBias: 'e4',
    endgameSkill: 0.5
  },
  engineProfile: {
    moveDelayMs: 950,
    randomness: 0.3,
    blunderThreshold: 0.75,
    fallbackLogic: true
  },
  commentary: {
    enabled: true,
    style: 'bold',
    triggers: {
      blunder: 'Ay caramba!',
      checkmate: '¡Olé!',
      fork: 'Double trouble!',
      stalemate: 'We both danced well.'
    }
  }
},
{
  id: 'bot17',
  name: 'Sven',
  rating: 1100,
  avatar: require('../../../assets/avatars/Sven.png'),
  flag: 'SI',
  speech: 'Zdravo! Just dont take any of my pieces, OK?',
  category: 'Intermediate',
  tone: 'dry',
  catchphrases: ['Zdravo.', 'Please be gentle.', 'I like my pieces.'],
  reactsToBlunders: false,
  reactsToWins: true,
  playstyle: {
    aggression: 0.3,
    blunderRate: 0.7,
    mistakeRate: 0.4,
    depth: 4,
    openingBias: 'd4',
    endgameSkill: 0.4
  },
  engineProfile: {
    moveDelayMs: 1000,
    randomness: 0.25,
    blunderThreshold: 0.7,
    fallbackLogic: true
  },
  commentary: {
    enabled: true,
    style: 'stoic',
    triggers: {
      blunder: 'Hmm.',
      checkmate: 'That’s it.',
      fork: 'Unfortunate.',
      stalemate: 'Fair enough.'
    }
  }
},
{
  id: 'bot18',
  name: 'Nelson',
  rating: 1300,
  avatar: require('../../../assets/avatars/Nelson.png'),
  flag: 'ZA',
  speech: 'Molo! I have a surprise for you. Your move!',
  category: 'Intermediate',
  tone: 'mischievous',
  catchphrases: ['Surprise!', 'Your move!', 'Let’s shake things up.'],
  reactsToBlunders: true,
  reactsToWins: true,
  playstyle: {
    aggression: 0.7,
    blunderRate: 0.6,
    mistakeRate: 0.3,
    depth: 5,
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
    style: 'playful',
    triggers: {
      blunder: 'Gotcha!',
      checkmate: 'Boom!',
      fork: 'Double hit!',
      stalemate: 'We’re even.'
    }
  }
},
{
  id: 'bot19',
  name: 'Maxim',
  rating: 1100,
  avatar: require('../../../assets/avatars/Maxim.png'),
  flag: 'CZ',
  speech: 'Ahoj! I am new to this, so go easy on me!',
  category: 'Intermediate',
  tone: 'humble',
  catchphrases: ['Ahoj!', 'I’m still learning.', 'Let’s be kind.'],
  reactsToBlunders: false,
  reactsToWins: false,
  playstyle: {
    aggression: 0.4,
    blunderRate: 0.9,
    mistakeRate: 0.6,
    depth: 3,
    openingBias: 'random',
    endgameSkill: 0.3
  },
  engineProfile: {
    moveDelayMs: 1050,
    randomness: 0.35,
    blunderThreshold: 0.8,
    fallbackLogic: true
  },
  commentary: {
    enabled: true,
    style: 'gentle',
    triggers: {
      blunder: 'That’s okay.',
      checkmate: 'Good game!',
      fork: 'Nice tactic!',
      stalemate: 'We both tried.'
    }
  }
},
{
  id: 'bot20',
  name: 'Hans',
  rating: 1000,
  avatar: require('../../../assets/avatars/Hans.png'),
  flag: '🇬🇱',
  speech: 'Hey! WHats your favorite rock band? Mine is Queen, of course',
  category: 'Intermediate',
  tone: 'funny',
  catchphrases: ['Rock on!', 'Let’s jam!', 'Queen rules.'],
  reactsToBlunders: true,
  reactsToWins: true,
  playstyle: {
    aggression: 0.5,
    blunderRate: 0.8,
    mistakeRate: 0.5,
    depth: 4,
    openingBias: 'e4',
    endgameSkill: 0.4
  },
  engineProfile: {
    moveDelayMs: 1000,
    randomness: 0.3,
    blunderThreshold: 0.75,
    fallbackLogic: true
  },
  commentary: {
    enabled: true,
    style: 'casual',
    triggers: {
      blunder: 'That was off-beat.',
      checkmate: 'Encore!',
      fork: 'Double riff!',
      stalemate: 'We both rocked.'
    }
  }
},
      {
  id: 'bot21',
  name: 'Azeez',
  rating: 1100,
  avatar: require('../../../assets/avatars/Azeez.png'),
  flag: 'NG',
  speech: 'Sannu. I have prepared some special moves for you',
  category: 'Intermediate',
  tone: 'strategic',
  catchphrases: ['Sannu!', 'Let’s see if you can handle this.', 'Special moves incoming.'],
  reactsToBlunders: true,
  reactsToWins: true,
  playstyle: {
    aggression: 0.6,
    blunderRate: 0.7,
    mistakeRate: 0.4,
    depth: 4,
    openingBias: 'e4',
    endgameSkill: 0.5
  },
  engineProfile: {
    moveDelayMs: 950,
    randomness: 0.3,
    blunderThreshold: 0.75,
    fallbackLogic: true
  },
  commentary: {
    enabled: true,
    style: 'confident',
    triggers: {
      blunder: 'That was expected.',
      checkmate: 'Victory is mine!',
      fork: 'Double pressure!',
      stalemate: 'We both played well.'
    }
  }
},
{
  id: 'bot22',
  name: 'Laura',
  rating: 1100,
  avatar: require('../../../assets/avatars/Laura.png'),
  flag: 'AT',
  speech: 'Viel Gluck! Lets play something exciting.',
  category: 'Intermediate',
  tone: 'enthusiastic',
  catchphrases: ['Viel Glück!', 'Let’s make this fun.', 'Exciting moves ahead!'],
  reactsToBlunders: true,
  reactsToWins: true,
  playstyle: {
    aggression: 0.5,
    blunderRate: 0.8,
    mistakeRate: 0.5,
    depth: 4,
    openingBias: 'd4',
    endgameSkill: 0.5
  },
  engineProfile: {
    moveDelayMs: 1000,
    randomness: 0.3,
    blunderThreshold: 0.75,
    fallbackLogic: true
  },
  commentary: {
    enabled: true,
    style: 'cheerful',
    triggers: {
      blunder: 'Oops! That’s okay.',
      checkmate: 'That was exciting!',
      fork: 'Nice tactic!',
      stalemate: 'We both gave it our best.'
    }
  }
},
{
  id: 'bot23',
  name: 'Emir',
  rating: 1200,
  avatar: require('../../../assets/avatars/Emir.png'),
  flag: 'TR',
  speech: 'Selam! My kids think I am a Grandmaster- dont tell them otherwise!',
  category: 'Intermediate',
  tone: 'playful',
  catchphrases: ['Selam!', 'Let’s keep the illusion alive.', 'I’m a Grandmaster at home.'],
  reactsToBlunders: true,
  reactsToWins: true,
  playstyle: {
    aggression: 0.6,
    blunderRate: 0.6,
    mistakeRate: 0.4,
    depth: 5,
    openingBias: 'e4',
    endgameSkill: 0.6
  },
  engineProfile: {
    moveDelayMs: 950,
    randomness: 0.25,
    blunderThreshold: 0.7,
    fallbackLogic: true
  },
  commentary: {
    enabled: true,
    style: 'humorous',
    triggers: {
      blunder: 'Don’t tell the kids!',
      checkmate: 'Still undefeated at home!',
      fork: 'That’s a sneaky one!',
      stalemate: 'We’ll call it a draw.'
    }
  }
},
{
  id: 'bot24',
  name: 'Elena',
  rating: 1200,
  avatar: require('../../../assets/avatars/Elena.png'),
  flag: 'RO',
  speech: 'Salute! Can you play better than my students?',
  category: 'Intermediate',
  tone: 'challenging',
  catchphrases: ['Salute!', 'My students are watching.', 'Let’s see what you’ve got.'],
  reactsToBlunders: true,
  reactsToWins: true,
  playstyle: {
    aggression: 0.5,
    blunderRate: 0.7,
    mistakeRate: 0.4,
    depth: 5,
    openingBias: 'd4',
    endgameSkill: 0.6
  },
  engineProfile: {
    moveDelayMs: 950,
    randomness: 0.25,
    blunderThreshold: 0.7,
    fallbackLogic: true
  },
  commentary: {
    enabled: true,
    style: 'sharp',
    triggers: {
      blunder: 'My students wouldn’t miss that.',
      checkmate: 'Lesson complete!',
      fork: 'That’s textbook.',
      stalemate: 'We’ll call it even.'
    }
  }
},
{
  id: 'bot25',
  name: 'Wilson',
  rating: 1200,
  avatar: require('../../../assets/avatars/Wilson.png'),
  flag: 'HT',
  speech: 'Bonjou! Ready? Set? Game!',
  category: 'Intermediate',
  tone: 'energetic',
  catchphrases: ['Bonjou!', 'Let’s go!', 'Game time!'],
  reactsToBlunders: true,
  reactsToWins: true,
  playstyle: {
    aggression: 0.6,
    blunderRate: 0.6,
    mistakeRate: 0.4,
    depth: 5,
    openingBias: 'e4',
    endgameSkill: 0.6
  },
  engineProfile: {
    moveDelayMs: 900,
    randomness: 0.25,
    blunderThreshold: 0.7,
    fallbackLogic: true
  },
  commentary: {
    enabled: true,
    style: 'lively',
    triggers: {
      blunder: 'Let’s pick up the pace!',
      checkmate: 'Boom! That’s it!',
      fork: 'Double trouble!',
      stalemate: 'We both gave it our all.'
    }
  }
},
{
  id: 'bot26',
  name: 'Vinh',
  rating: 1300,
  avatar: require('../../../assets/avatars/Vinh.png'),
  flag: 'VN',
  speech: 'Xin chao! After this game lets play some soccer!',
  category: 'Intermediate',
  tone: 'sporty',
  catchphrases: ['Xin chào!', 'Let’s play chess, then soccer!', 'I’m good at both.'],
  reactsToBlunders: true,
  reactsToWins: true,
  playstyle: {
    aggression: 0.7,
    blunderRate: 0.5,
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
    style: 'sporty',
    triggers: {
      blunder: 'That’s an own goal!',
      checkmate: 'Goal!',
      fork: 'Two defenders down!',
      stalemate: 'Extra time draw!'
    }
  }
},
{
  id: 'bot27',
  name: 'Jade',
  rating: 1300,
  avatar: require('../../../assets/avatars/Jade.png'),
  flag: 'BE',
  speech: 'Hey Hoeijendagh! Dont trip as you walk away',
  category: 'Intermediate',
  tone: 'sassy',
  catchphrases: ['Hoeijendagh!', 'Try not to trip.', 'I play with flair.'],
  reactsToBlunders: true,
  reactsToWins: true,
  playstyle: {
    aggression: 0.7,
    blunderRate: 0.5,
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
    style: 'sassy',
    triggers: {
      blunder: 'Oops, you slipped!',
      checkmate: 'Walk it off!',
      fork: 'Double hit!',
      stalemate: 'We both strutted well.'
    }
  }
},
      {
  id: 'bot28',
  name: 'David',
  rating: 1400,
  avatar: require('../../../assets/avatars/David.png'),
  flag: 'PE',
  speech: 'Hola! Come at me!!',
  category: 'Intermediate',
  tone: 'aggressive',
  catchphrases: ['Hola!', 'Bring it on!', 'Let’s fight!'],
  reactsToBlunders: true,
  reactsToWins: true,
  playstyle: {
    aggression: 0.8,
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
    style: 'intense',
    triggers: {
      blunder: 'That’s weak!',
      checkmate: 'Boom! You’re done!',
      fork: 'Double strike!',
      stalemate: 'We’ll settle this next time.'
    }
  }
},
{
  id: 'bot29',
  name: 'Ali',
  rating: 1400,
  avatar: require('../../../assets/avatars/Ali.png'),
  flag: 'ID',
  speech: 'Hola! I hope you are ready to play',
  category: 'Intermediate',
  tone: 'welcoming',
  catchphrases: ['Hola!', 'Let’s begin.', 'I’m ready if you are.'],
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
    style: 'friendly',
    triggers: {
      blunder: 'That’s okay!',
      checkmate: 'Nice game!',
      fork: 'Smart move!',
      stalemate: 'We’re evenly matched.'
    }
  }
},
{
  id: 'bot30',
  name: 'Mateo',
  rating: 1400,
  avatar: require('../../../assets/avatars/Mateo.png'),
  flag: 'AR',
  speech: 'Hola, chamigo! Its seista- lets play!',
  category: 'Intermediate',
  tone: 'laid-back',
  catchphrases: ['Chamigo!', 'Let’s chill and play.', 'Siesta chess time.'],
  reactsToBlunders: true,
  reactsToWins: true,
  playstyle: {
    aggression: 0.5,
    blunderRate: 0.6,
    mistakeRate: 0.4,
    depth: 5,
    openingBias: 'random',
    endgameSkill: 0.5
  },
  engineProfile: {
    moveDelayMs: 950,
    randomness: 0.25,
    blunderThreshold: 0.7,
    fallbackLogic: true
  },
  commentary: {
    enabled: true,
    style: 'chill',
    triggers: {
      blunder: 'Oops, no worries.',
      checkmate: 'That was relaxing!',
      fork: 'Nice fork!',
      stalemate: 'Let’s call it a siesta draw.'
    }
  }
}
    ];

    export default intermediateBots;
import beginner from './beginnerBots';
import intermediate from './intermediateBots';
import advanced from './advanceBots';
import master from './masterBots';

export const allBots = [
  ...beginner,
  ...intermediate,
  ...advanced,
  ...master,
];

export const botsByCategory = [
  { title: 'Beginner', bots: beginner },
  { title: 'Intermediate', bots: intermediate },
  { title: 'Advanced', bots: advanced },
  { title: 'Master', bots: master },
];
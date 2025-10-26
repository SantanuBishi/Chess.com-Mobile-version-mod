// src/utils/validateMove.js

/**
 * Validates a user's move against the expected correct move.
 * Supports both single-square taps (e.g. 'Kg1') and full algebraic moves (e.g. 'e2e4').
 *
 * @param {string} userMove - The move input by the user (e.g. 'Kg1' or 'e2e4')
 * @param {string} correctMove - The expected correct move from challenge data
 * @returns {boolean} - True if move matches, false otherwise
 */
export const validateMove = (userMove, correctMove) => {
  if (!userMove || !correctMove) return false;

  // Normalize both moves
  const cleanUserMove = userMove.trim().toLowerCase();
  const cleanCorrectMove = correctMove.trim().toLowerCase();

  return cleanUserMove === cleanCorrectMove;
};
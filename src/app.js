/* eslint-disable no-console */

import createRandomNumber from './modules/createRandomNumber.js';
import hasUniqueDigits from './modules/hasUniqueDigits.js';
import handleTerminal from './modules/handleTerminal.js';
import calculatingBullsAndCows from './modules/calculatingBullsAndCows.js';

const randomNumber = createRandomNumber();
let userNumber = '';
let isNeedRefresh = true;

const setIsNeedRefresh = (value) => {
  isNeedRefresh = value;
};

const setUserNumber = (str) => {
  userNumber = str;
  isNeedRefresh = true;
};

const start = setInterval(() => {
  if (!isNeedRefresh) {
    return;
  }
  isNeedRefresh = false;

  if (userNumber === randomNumber) {
    console.log('You are win!');

    clearInterval(start);
  } else if (userNumber === '') {
    handleTerminal(
      '---Hello!---\n---Let\'s go!---\nPlease write 4 different digits - ',
      setUserNumber,
      isNeedRefresh,
      setIsNeedRefresh);
  } else if (hasUniqueDigits(userNumber)) {
    const { bulls, cows } = calculatingBullsAndCows(userNumber, randomNumber);

    console.log(`Buls ${bulls}, cows ${cows}`);

    handleTerminal(
      'Please write new numbers - ',
      setUserNumber,
      isNeedRefresh,
      setIsNeedRefresh);
  } else {
    handleTerminal(
      'Please write correct 4 different digits - ',
      setUserNumber,
      isNeedRefresh,
      setIsNeedRefresh
    );
  }
}, 0.2 * 1000);

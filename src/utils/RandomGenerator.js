import { legends } from '../data/Legends';

function seededShuffle(baseArray, seed) {
  let array = baseArray.slice();
  let currentIndex = array.length, temporaryValue, randomIndex;

  function random() {
    const x = Math.sin(seed++) * 10000;
    return x - Math.floor(x);
  }

  while (0 !== currentIndex) {
    randomIndex = Math.floor(random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

export function getRandom(array, yesterday = false) {
  const length = array.length;
  let fullDate  = new Date();
  if (yesterday) {
    fullDate.setDate(fullDate.getDate() - 1);
  }
  const date = fullDate.getTime();
  const days = Math.floor(date / (1000 * 60 * 60 * 24));

  const seed = Math.floor(days / length)
  const index = days % length

  const shuffledArray = seededShuffle(array, seed);
  return shuffledArray[index];
}

export function getRandomLegend(yesterday = false) {
  return getRandom(legends, yesterday);
}

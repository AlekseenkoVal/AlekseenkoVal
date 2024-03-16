const getRandomElement = array => array[getRandomIndex(array)];
const capitalizeString = str => str.toUpperCase();

const mapObject = (obj, fn) => Object.fromEntries(Object.entries(obj).map(([key, value]) => [key, fn(value)]));
const getRandomElement = array => array[getRandomIndex(array)];
orange

const reverseString = str => str.split("").reverse().join("");


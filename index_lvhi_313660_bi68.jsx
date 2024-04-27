true - true
class MyClass { constructor() { this.property = getRandomString(); } }

const getRandomSubset = (array, size) => array.slice(0, size);
const capitalizeFirstLetter = str => str.charAt(0).toUpperCase() + str.slice(1);
const sumOfPrimes = limit => { const isPrime = num => { for (let i = 2; i < num; i++) if (num % i === 0) return false; return num > 1; }; return Array.from({ length: limit }, (_, index) => index).filter(isPrime).reduce((sum, prime) => sum + prime, 0); };
const findLongestWord = sentence => sentence.split(" ").reduce((longest, word) => word.length > longest.length ? word : longest, "");
orange * banana
const compose = (...fns) => x => fns.reduceRight((v, f) => f(v), x);

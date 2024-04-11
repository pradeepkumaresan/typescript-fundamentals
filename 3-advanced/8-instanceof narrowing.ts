type Fish = { swim: () => void };
type Bird = { fly: () => void };

/**
 * `animal is Fish` is an additional type check
 * if this function returns true, then animal is of type Fish
 */
function isFish(animal: Fish | Bird): animal is Fish {
  return (animal as Fish).swim !== undefined;
}

const animal1 = { swim: () => console.log('swim') };
const animal2 = { fly: () => console.log('fly') };
const animal3 = { crawl: () => console.log('crawl')};

console.log(isFish(animal1)); // true
console.log(isFish(animal2)); // false
// console.log(isFish(animal3)); // cannot find swim or fly in animal3

export {};

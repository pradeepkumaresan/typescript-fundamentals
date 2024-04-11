function printAll(input: string | string[] | null) {
  if (typeof input === 'string') {
    // In this block, TypeScript knows `input` is a string
    console.log(input);
  } else if (Array.isArray(input)) {
    // In this block, TypeScript knows `input` is an array of strings
    input.forEach(i => console.log(i));
  } else if (input === null) {
    // In this block, TypeScript knows `input` is null
    console.log('input is null');
  } else if (typeof input === 'object') {
    // In this block, TypeScript knows `input` is an object
    console.log('input is an object');
  }
  else {
    // In this block, TypeScript knows `input` is an empty array
    console.log('input is an empty array');
  }
}

console.log()
printAll("abc")
console.log()
printAll(["a", "b", "c"])
console.log()
printAll(null)

export {};

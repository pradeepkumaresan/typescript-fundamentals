function getValue(myVal: number){ 
  // typescript says this function could return either a boolean or a string
    if(myVal > 0){
        return true;
    }
    return "200OK";
}

// argument types and return type in an arrow function
const getHello = (s: string) :string => {
  return "hello " + s;
}

const heros = ['superman', 'batman', 'wonderwoman'];

// this map function will return an array of strings
const result = heros.map((hero) => { // TS infers hero is a string
  return `hero is ${hero}`;
})

console.log(result);

// function with no returns will have void as return type
function consoleError(message: string): void {
  console.error(message);
}

// A function returning 'never' cannot have a reachable end point.
// it can 'never' return from this function
// meaning, the execution has to terminate here. or throw an exception.
// it cannot complete.
function handleError(message: string): never {
  throw new Error(message);
}

export {};

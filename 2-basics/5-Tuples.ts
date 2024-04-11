const UserArray: (string | number)[]  = ["John", 1];
const UserArray1: (string | number)[]  = [1, "John"]; // both are OK


const UserTuple: [string, number] = ["John", 1];

// following is not allowed. number should come first
// const UserTuple1: [number, string] = ["John", 1]; 

// tuples, an ordered array.

let rgbTuple: [number, number, number] = [255, 0, 0];

type UserType = [number, String];

const newUserTuple: UserType = [11, "true"];
newUserTuple.push(1); // OK. but should not be. as it violates tuple's fixed length characteristic
// newUserTuple.push(true); // not allowed
// Argument of type 'boolean' is not assignable to parameter of type 'number | String'export ./2-basics/5-Tuples.ts;

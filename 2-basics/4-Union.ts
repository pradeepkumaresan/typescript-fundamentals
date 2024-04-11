let score: number|string = 33;
score = 'thirty three';
//score= true; // this is not allowed

type User = {
    name: string,
    age: number
}

type Admin = {
    username: string,
    id: number
}

let pradeep: User|Admin = {
    name: 'Pradeep',
    age: 30
}
// either only User or Admin properties can be present
let pradeepAdmin: User|Admin = {
  id: 1,
  username: 'pradeep'
}

function getId(id: number|string){
    if(typeof id === 'string'){
        id.toLowerCase();
    }
    //id.toLowerCase(); // not allowed. Property 'toLowerCase' does not exist on type 'number'.
    //id + 2; // now sllowed. Operator '+' cannot be applied to types 'string | number'
    return id;
}
getId(123);
getId('pradeep');

const numbers: number[] = [1, 2, 3, 4, 5];
const numbers1: string[] = ['1', '2', '3', '4', '5'];

// now allowed. it can be either all strings or all numbers
// const numbers2: string[] | number[] = [1, 2, 3, '4', '5'];

// this is allowed
const numbers3: string[] | number[] = [1, 2, 3, 4, 5];

// now this is allowed. not recommended. defeats TS purpose
const numbers2: (string | number | boolean)[] = [1, 2, 3, '4', '5', true];

// here 3.14 is considered a type
let pi: 3.14 = 3.14;
// pi = 3.13; // not allowed. Type '3.13' is not assignable to type '3.14'

let planeSeats: 'window' | 'aisle' | 'middle' = 'window';
// planeSeats = 'jump-seat'; // not allowed. 

export {} // this is needed to avoid TS error: Cannot redeclare block-scoped variable 'score'.ts(2451)export ./2-basics/4-Union.ts;

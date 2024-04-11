const superHeroes1 = []; // array of never type. cat's push values to it.
const superHeroes2: [] = []; // an empty never array. can't push values to it.

//superHeroes1.push('');
//superHeroes2.push(''); // this is not allowed

const superHeroes: string[] = []; // array of strings
const superHeroPower: Array<number> = []; // another way to declare array 

superHeroes.push('Iron man')

type User = {
    name: string,
    age: number
}

const allUsers: User[] = []; // array of users

const john = {
    name: 'John',
    age: 30
}

allUsers.push(john); 

console.log(allUsers);

const matrix: number[][] = [
    [1, 2],
    [3, 4],
    [5, 6], 
    //[7, '8']// this is not allowed  
]; // 2D array

export {};

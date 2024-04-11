const superHeroes1 = []; // array of never type. cat's push values to it.
const superHeroes2: [] = []; // an empty array. can't push values to it.

const superHeroes: string[] = []; // array of strings
const superHeroPower: Array<number> = []; // another way to declare array 

superHeroes.push('Iron man')

type User = {
    name: string,
    age: number
}

const allUsers: User[] = []; // array of users

//allUsers.push("John"); // this is not allowed

const user1: User = {
    name: 'John',
    age: 30
}
allUsers.push(user1);

const matrix: number[][] = [
    [1, 2],
    [3, 4],
    //[5, '6'] // this is not allowed  
]; // 2D array
export ./2-basics/3-Arrays.ts;

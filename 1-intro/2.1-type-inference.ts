// type inference - no need to specify the type. typescript will infer it.
let name = 'John';
let isMarried = false;

// any
let hero;

function getHero() {
    return 'Superman';
}

hero = getHero(); // here is inferred as any

let batman: string;

batman = getHero(); // here hero is inferred as string

// you can use `any` only whenever you don't want a value to
// cause typechecking errors

// You usually want to avoid any, though, because any isn't type-checked. 
// Use the compiler flag `noImplicitAny` in tsconfig to flag 
// any implicit any as an error.



export default {}; // Make sure this file is treated as a module. so it has its own scopeexport ./1-intro/2.1-type-inference.ts;

const User = {
  name: "John",
  age: 30,
  isAdmin: true,
  email: "john@john.net",
  address: {
    street: "123 main st",
    city: "New York",
  },
};

function createUser(user: { name1: string; email: string }) {
  console.log(user);
}

createUser({ name1: "John", email: "dsd@sds.com" });
//createUser({name1: 'John', email: 'dsd@sds.com', phone: '123-123-1234'}); // this is not allowed

let newUser = { name1: "John", email: "dsd@sds.com", phone: "123-123-1234" };
createUser(newUser); // this is allowed. but it should not be.

// this function should return an object with name and price fields
function createCourse(): { name: String; price: number } {
  return { name: "typescript", price: 200 };
}

type UserThruType = {
  firstName: string;
  email: string;
  age: number;
};

function createUserThruType(user: UserThruType): UserThruType {
  console.log(user);
  return user;
}

createUserThruType({ firstName: "John", email: "john@jh.net", age: 30 });

type UserReadOnly = {
  readonly _id: string;
  firstName: string;
  email: string;
  age: number;
  creaditCard?: string; // optional field
};

let myUser: UserReadOnly = {
  _id: "123",
  firstName: "John",
  email: "john@jh.net",
  age: 30,
};

myUser.email = "jh@jh.com";
//myUser._id = 'uuid'; // this is not allowed

type cardNumber = {
  cardNumber: string;
};

type cardDate = {
  cardDate: string;
};

// composite types
type cardDetails = cardNumber &
  cardDate & {
    cvv: string;
  };

export {};

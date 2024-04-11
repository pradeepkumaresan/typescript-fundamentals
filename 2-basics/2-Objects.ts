type User = {
  readonly _id: string;
  firstName: string;
  email: string;
  age: number;
};

function createUser(user: User): User {
  console.log(user);
  return user;
}

createUser({ firstName: "John", email: "john@jh.net", age: 30, _id: "123"});

export {User};

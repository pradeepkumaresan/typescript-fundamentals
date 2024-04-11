interface User1 {
  name: string;
  email: string;
}

interface  Admin1 {
  name: string;
  email: string;
  isAdmin: boolean;
}

function isAdmin(person: User1 | Admin1){
  if('isAdmin' in person){
    console.log(person.isAdmin);
  } else {
    console.log('false');
  }
}

const person: User1 = {
  name: 'John',
  email: 'abc@xyz.com'
}

const admin: Admin1 = {
  name: 'John',
  email: 'abc@xyz.com',
  isAdmin: true
}

isAdmin(person);
isAdmin(admin);

export {};

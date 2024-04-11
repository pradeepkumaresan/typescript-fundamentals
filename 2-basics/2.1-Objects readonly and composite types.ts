import { User } from "./2-Objects";

let myUser: User = {
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

const myCard: cardDetails = {
  cardNumber: "1234",
  cardDate: "12/23",
  cvv: "123",
};
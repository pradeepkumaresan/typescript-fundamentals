class UserClass {
  public email: string;
  name: string; // if you don't specify access modifier, it will be public by default
  private readonly city: string = "xyz"; 
  constructor(email: string, name: string) {
    this.email = email;
    this.name = name;
    //this.city; // can access here
  }
  private deleteToken() {
    console.log("delete token");
  }
}

const abc = new UserClass("abc@email.com", "abc");

// console.log(abc.city); // can't access private property
// abc.deleteToken(); // private method can be accessed only inside class


// another way to define class. same as above
class UserClass1 {
  readonly city: string = "xyz"; 
  protected country: string = "abc";
  constructor(
    public email: string, 
    public name: string
    ) {
  }
  get getEmail(): string {
    return `email is ${this.email}`;
  }
  // set setEmail(email: string): void { 
  //A 'set' accessor cannot have a return type annotation.ts(1095)
  set setEmail(email: string) {
    this.email = email;
  }
}

class subUserClass1 extends UserClass1 {
  isFamily: boolean = true;
  changeCountry() {
    this.country = "abc"; // can access protected property
  }
}

const abcd = new UserClass1("abc@email.com", "abc");
//abcd.country = "sd"; // can't access protected propertyexport ./3-pure TS/src/index.ts;

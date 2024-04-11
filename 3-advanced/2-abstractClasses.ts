abstract class CameraAbs {
  constructor(public mode: string) {}
  takePhoto(): string {
    return "abstract Photo taken";
  }
  recordVideo(): string {
    return "abstract Video recorded";
  }
  abstract applyFilter(): string;
}

//const myCamera = new Camera("auto"); // Cannot create an instance of an abstract class.

class PhoneAbsImpl extends CameraAbs {
  constructor(public mode: string, public brand: string) {
    super(mode);
  }
  applyFilter(): string {
    return "Phone Filter applied";
  }
}

const myPhone = new PhoneAbsImpl("auto", "Samsung");
console.log(myPhone.takePhoto());
console.log(myPhone.recordVideo());
console.log(myPhone.applyFilter());
console.log(myPhone.mode);
console.log(myPhone.brand);

export {};

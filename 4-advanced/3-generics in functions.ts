const scores: Array<number> = [];
const names: Array<string> = [];

function identity<T>(val: T): T {
  return val;
}

console.log(identity("John"));
console.log(identity(30));
console.log(identity(true));

interface CameraGenerics {
  shoot(): string;
}

class PhoneCamera implements CameraGenerics {
  shoot(): string {
    return "Click";
  }
}

function useCamera<T extends CameraGenerics>(camera: T): string {
  return camera.shoot();
}

const myCamera = new PhoneCamera();
console.log(useCamera(myCamera));export ./4-advanced/3-generics in functions.ts;

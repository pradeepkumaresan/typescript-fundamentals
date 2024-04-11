interface Circle {
  kind: "circle";
  radius: number;
}

interface Square {
  kind: "square";
  side: number;
}

interface Rectangle {
  kind: "rectangle";
  width: number;
  height: number;
}

type Shape = Circle | Square | Rectangle;

function getArea(shape: Shape): number {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;
    case "square":
      return shape.side ** 2;
    case "rectangle":
      return shape.width * shape.height;
    default:
      /**
       * Exhaustive check to ensure all cases are handled
       * comment rectangle case to see the error
       * this is never reached. compile time check.
       */
      const _exhaustiveCheck: never = shape;
      return _exhaustiveCheck;
  }
}

const circle: Circle = { kind: "circle", radius: 10 };
const square: Square = { kind: "square", side: 10 };
const rectangle: Rectangle = { kind: "rectangle", width: 10, height: 20 };

console.log(getArea(circle));
console.log(getArea(square));
console.log(getArea(rectangle));export ./4-advanced/9-exhaustiveness checking.ts;

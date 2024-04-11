function filterProducts<T>(arg: T[]): T[] {
    // filter products. return only first 2 products
    return arg.slice(0, 2);
}

function filterProducts2<T>(arg: Array<T>): Array<T> {
  return arg.slice(0, 2);
}

const products = ["Apple", "Banana", "Orange", "Grapes"];
console.log(filterProducts(products));
console.log(filterProducts2(products));

const filterProductsArrow = <T>(arg: T[]): T[] => arg.slice(0, 2);
console.log(filterProductsArrow(products));
export ./4-advanced/4-generics in array and arrow fns.ts;

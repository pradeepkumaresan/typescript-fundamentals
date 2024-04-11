interface Quiz {
  name: string;
  subject: string;
}

interface Course {
  name: string;
  author: string;
  price: number;
}

class Cart<T> {
  private readonly items: T[] = [];

  addItem(item: T): void {
    this.items.push(item);
  }

  getItems(): T[] {
    return this.items;
  }
}

const quizCart = new Cart<Quiz>();
quizCart.addItem({ name: "Quiz 1", subject: "Math" });
quizCart.addItem({ name: "Quiz 2", subject: "Science" });

console.log(quizCart.getItems());

const courseCart = new Cart<Course>();
courseCart.addItem({ name: "Course 1", author: "John", price: 200 });
courseCart.addItem({ name: "Course 2", author: "Jane", price: 300 });

console.log(courseCart.getItems());

export ./4-advanced/5-generic classes.ts;

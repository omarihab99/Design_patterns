class Creator {
  factoryMethod() {}
  printProductID() {
    return 'I am ' + this.factoryMethod().print();
  }
}
class ConcreteCreator1 extends Creator {
  factoryMethod() {
    return new ConcreteProduct1();
  }
}
class ConcreteCreator2 extends Creator {
  factoryMethod() {
    return new ConcreteProduct2();
  }
}

class Product {
  print() {}
}
class ConcreteProduct1 extends Product {
  print() {
    return ' concrete product 1';
  }
}
class ConcreteProduct2 extends Product {
  print() {
    return ' concrete product 2';
  }
}

function main(creator) {
  console.log('Hi There');
  console.log(creator.printProductID());
}
console.log('App: Launched with the ConcreteCreator1.');
main(new ConcreteCreator1());
console.log('');

console.log('App: Launched with the ConcreteCreator2.');
main(new ConcreteCreator2());

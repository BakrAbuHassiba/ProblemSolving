function shape(length, width) {
  if (this.constructor === shape) {
    throw new Error("This is an abstract class");
  }

  Object.defineProperties(this, {
    length: {
      value: length,
      writable: false,
      configurable: false,
      enumerable: false,
    },
    width: {
      value: width,
      writable: false,
      configurable: false,
      enumerable: false,
    },
  });
}

function rectangle(length, width) {
  shape.call(this, length, width);

  Object.defineProperty(this, "rectangleArea", {
    get: function () {
      return this.length * this.width;
    },
    configurable: false,
    enumerable: false,
  });
}

rectangle.prototype = Object.create(shape.prototype);
rectangle.prototype.constructor = rectangle;
rectangle.prototype.toString = function () {
  return (
    "The length is " +
    this.length +
    ", the width is " +
    this.width +
    ", the area is " +
    this.rectangleArea
  );
};
rectangle.prototype.valueOf = function () {
  return this.rectangleArea;
};

function square(length) {
  rectangle.call(this, length, length);

  Object.defineProperty(this, "squareArea", {
    get: function () {
      return this.length * this.length;
    },

    configurable: false,
    enumerable: false,
  });

  square.counter++;
  Object.freeze(this);
}
square.counter = 0;

square.prototype = Object.create(rectangle.prototype);
square.prototype.constructor = square;

square.prototype.toString = function () {
  return (
    "(square) : The length is " +
    this.length +
    ", the area is " +
    this.squareArea
  );
};

square.prototype.valueOf = function () {
  return this.squareArea;
};

function displayCounter() {
  return square.counter;
}

const square1 = new square(9);
const square2 = new square(3);

console.log(
  "The value of the sum squares area : " + parseInt(square1 + square2)
);
console.log(square1.toString());
console.log("The counter of instances of square : " + displayCounter());

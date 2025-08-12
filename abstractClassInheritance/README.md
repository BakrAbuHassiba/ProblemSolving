#  Shape, Rectangle, and Square Classes

## Description
This project demonstrates how to implement **abstract classes** and inheritance in JavaScript using constructor functions, `Object.defineProperty`, getters, and prototypes.  
The code models a general `shape`, a `rectangle` that extends it, and a `square` that extends the rectangle.  
It also includes a static-like counter to track how many square instances have been created.

## Features & Tasks
1. **Abstract Class (`shape`)**
   - Cannot be instantiated directly (throws an error if attempted).
   - Holds common properties: `length` and `width` (read-only and non-enumerable).

2. **Rectangle**
   - Inherits from `shape`.
   - Adds a computed property `rectangleArea` using a getter.
   - Overrides `toString()` and `valueOf()` to display dimensions and return the area.

3. **Square**
   - Inherits from `rectangle`.
   - Sets both `length` and `width` to the same value.
   - Adds a computed property `squareArea`.
   - Increments a counter (`square.counter`) for every created square.
   - Uses `Object.freeze()` to make each instance immutable.

4. **Utility Function**
   - `displayCounter()` returns the number of created squares.

5. **Demonstration**
   - Creates two square instances.
   - Shows the sum of their areas using `valueOf()`.
   - Displays details and instance counter.

## Technologies Used
- **JavaScript** – Constructor functions, prototypes, getters, object immutability.

## Learning Goals
- Understanding **inheritance** using constructor functions and prototypes.
- Implementing **abstract class behavior** in JavaScript.
- Working with **getters**, `Object.defineProperty`, and immutability.
- Using `valueOf()` for custom numeric behavior.

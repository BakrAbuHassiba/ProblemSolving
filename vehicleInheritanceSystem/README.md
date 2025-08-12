# Vehicle Inheritance System

## Description

This project demonstrates **object-oriented programming in JavaScript** using constructor functions, prototypes, and `Object.defineProperties()` to build an **inheritance hierarchy** for different types of vehicles.  
It includes general vehicle functionality and specific features for bicycles, cars, motor vehicles, and dump trucks.

## Features & Tasks

1. **Base Class (`vehicle`)**

   - Common properties: `speed` and `color` (read-only and non-enumerable).
   - Methods:
     - `turnLeft()` – returns `"turn left"`.
     - `turnRight()` – returns `"turn right"`.
     - `start()` and `stop()` – return `true`.
     - `goForward(speed, accel)` – returns forward movement message.
     - `goBackward(speed, accel)` – returns backward movement message.

2. **Motor Vehicle**

   - Extends `vehicle`.
   - Additional properties: `sizeOfEngine`, `licensePlate`.
   - Methods to retrieve size of engine and license plate.

3. **Bicycle**

   - Extends `vehicle`.
   - Adds method `ringBell()` to simulate a bell sound.

4. **Dump Truck**

   - Extends `motorVehicle`.
   - Additional properties: `loadCapacity`, `numWheels`, `weight`.
   - Methods:
     - `lowerLoad()` and `raiseLoad()` for load control.
     - Overrides `toString()` for detailed description.
     - Overrides `valueOf()` to return weight (enables arithmetic operations).

5. **Car**
   - Extends `motorVehicle`.
   - Additional properties: `numOfDoors`, `numWheels`, `weight`.
   - Methods:
     - `switchOnAirCon()` to simulate air conditioning.
     - `getNumOfDoors()` to return door count.
     - Overrides `toString()` for descriptive output.
     - Overrides `valueOf()` to return weight.

## Technologies Used

- **JavaScript** – Constructor functions, prototypes, inheritance, property descriptors.

## How to Run

1. Copy the code into a `.js` file.
2. Run it in Node.js or the browser console.
3. Try different object creations and method calls:

   ```js
   var bicycle1 = new bicycle(20, "yellow");
   console.log(bicycle1.ringBell()); // "Ring belled!!"

   var car1 = new car(100, "black", 1800, "789", 4, 4, 1500);
   console.log(car1.switchOnAirCon()); // "Air Con is running"
   console.log(car1.toString()); // "Car with 4 doors, weight 1500kg, and its is color black"

   var dumpTruck1 = new dumpTruck(60, "green", 3000, "456", 10000, 8, 5000);
   console.log(dumpTruck1.toString()); // "DumpTruck with capacity 10000kg, 8 wheels, weight 5000kg"
   console.log(car1 + dumpTruck1); // 6500 (from valueOf)
   ```

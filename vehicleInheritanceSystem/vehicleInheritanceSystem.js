function vehicle(speed, color) {
  Object.defineProperties(this, {
    speed: {
      value: speed,
      writable: false,
      configurable: false,
      enumerable: false,
    },
    color: {
      value: color,
      writable: false,
      configurable: false,
      enumerable: false,
    },
  });
}

vehicle.prototype.turnLeft = function () {
  return "turn left";
};
vehicle.prototype.turnRight = function () {
  return "turn right";
};
vehicle.prototype.start = function () {
  return true;
};
vehicle.prototype.stop = function () {
  return true;
};
vehicle.prototype.goBackward = function (speed, accel) {
  return "goBackward with speed: " + speed;
};
vehicle.prototype.goForward = function (speed, accel) {
  return "goForward with speed: " + speed;
};

function motorVehicle(speed, color, sizeOfEngine, licensePlate) {
  vehicle.call(this, speed, color); //

  Object.defineProperties(this, {
    sizeOfEngine: {
      value: sizeOfEngine,
      writable: false,
      configurable: false,
      enumerable: false,
    },
    licensePlate: {
      value: licensePlate,
      writable: false,
      configurable: false,
      enumerable: false,
    },
  });
}
motorVehicle.prototype = Object.create(vehicle.prototype);
motorVehicle.prototype.constructor = motorVehicle;

motorVehicle.prototype.getSizeOfEngine = function () {
  return this.sizeOfEngine;
};

motorVehicle.prototype.getLicensePlate = function () {
  return this.licensePlate;
};

function bicycle(speed, color) {
  vehicle.call(this, speed, color);
}
bicycle.prototype = Object.create(vehicle.prototype);
bicycle.prototype.constructor = bicycle;

bicycle.prototype.ringBell = function () {
  return "Ring belled!!";
};

function dumpTruck(
  speed,
  color,
  sizeOfEngine,
  licensePlate,
  loadCapacity,
  numWheels,
  weight
) {
  motorVehicle.call(this, speed, color, sizeOfEngine, licensePlate);

  Object.defineProperties(this, {
    loadCapacity: {
      value: loadCapacity,
      writable: false,
      configurable: false,
      enumerable: false,
    },
    numWheels: {
      value: numWheels,
      writable: false,
      configurable: false,
      enumerable: false,
    },
    weight: {
      value: weight,
      writable: false,
      configurable: false,
      enumerable: false,
    },
  });
}
dumpTruck.prototype = Object.create(motorVehicle.prototype);
dumpTruck.prototype.constructor = dumpTruck;

dumpTruck.prototype.lowerLoad = function () {
  return "Lower Loaded!!";
};
dumpTruck.prototype.raiseLoad = function () {
  return "Raise Loaded!!";
};

dumpTruck.prototype.toString = function () {
  return (
    "DumpTruck with capacity " +
    this.loadCapacity +
    "kg, " +
    this.numWheels +
    " wheels, weight " +
    this.weight +
    "kg"
  );
};

dumpTruck.prototype.valueOf = function () {
  return this.weight;
};

function car(
  speed,
  color,
  sizeOfEngine,
  licensePlate,
  numOfDoors,
  numWheels,
  weight
) {
  motorVehicle.call(this, speed, color, sizeOfEngine, licensePlate);

  Object.defineProperties(this, {
    numOfDoors: {
      value: numOfDoors,
      writable: false,
      configurable: false,
      enumerable: false,
    },
    numWheels: {
      value: numWheels,
      writable: false,
      configurable: false,
      enumerable: false,
    },
    weight: {
      value: weight,
      writable: false,
      configurable: false,
      enumerable: false,
    },
  });
}
car.prototype = Object.create(motorVehicle.prototype);
car.prototype.constructor = car;

car.prototype.switchOnAirCon = function () {
  return "Air Con is running";
};

car.prototype.getNumOfDoors = function () {
  return this.numOfDoors;
};

car.prototype.toString = function () {
  return (
    "Car with " +
    this.numOfDoors +
    " doors, weight " +
    this.weight +
    "kg, and its is color " +
    this.color
  );
};

// ✅ .valueOf()
car.prototype.valueOf = function () {
  return this.weight;
};

var vehicle1 = new vehicle(12, "red");
var motorVehicle1 = new motorVehicle(80, "blue", 1600, "234");
var bicycle1 = new bicycle(20, "yellow");
var dumpTruck1 = new dumpTruck(60, "green", 3000, "456", 10000, 8, 5000);
var car1 = new car(100, "black", 1800, "789", 4, 4, 1500);

// console.log(vehicle1.goForward(60)); // → "goForward with speed: 60"
// console.log(bicycle1.ringBell()); // → "Ring belled!!"
// console.log(car1.switchOnAirCon()); // → "Air Con is running"
// console.log(car1.toString()); // → "Car with 4 doors, weight 1500kg, color black"
// console.log(dumpTruck1.toString()); // → "DumpTruck with capacity 10000kg, 8 wheels, weight 5000kg"
// console.log(car1 + dumpTruck1); // → 6500 (uses .valueOf())

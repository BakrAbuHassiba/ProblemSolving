function sequence(start, end, step) {
  var arr = [];
  var start = start;
  var end = end;
  var step = step;

  function generateSequence() {
    for (var i = start; i <= end; i += step) {
      arr.push(i);
    }
  }
  generateSequence();

  function hasDuplicate(value) {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === value) {
        return true;
      }
    }
    return false;
  }

  this.push = function (value) {
    var last = arr[arr.length - 1];
    if (hasDuplicate(value)) {
      throw new Error("Duplicated value");
    }
    if (value !== last + step) {
      throw new Error("Value " + value + " is not in correct sequence");
    }
    arr.push(value);
    console.log(arr);
  };

  this.enQueue = function (value) {
    var first = arr[0];
    if (hasDuplicate(value)) {
      throw new Error("Duplicated value ");
    }
    if (value !== first - step) {
      throw new Error("Value " + value + " is not in correct sequence");
    }
    arr.unshift(value);
    console.log(arr);
  };

  this.dequeue = function () {
    arr.shift();
    console.log(arr);
  };

  this.pop = function () {
    arr.pop();
    console.log(arr);
  };
}

var seq1 = new sequence(0, 10, 2);
// seq1.push(12);
// seq1.enQueue(-2)
// seq1.dequeue();
// seq1.pop()

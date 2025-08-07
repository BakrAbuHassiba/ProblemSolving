var LnkdLstObj = {
  data: [{ val: 1 }, { val: 3 }, { val: 4 }, { val: 5 }],

  enQueueObj: function (obj) {
    if (obj.val < this.data[0].val) {
      this.data.unshift(obj);
      console.log(this.data);
    } else if (obj.val == this.data[0].val) {
      console.log("value is already exists in the list");
    } else {
      console.log("value is not less than the first value");
    }
  },

  pushObj: function (obj) {
    if (this.data.length == 0) {
      this.data.push(obj);
      return;
    }

    if (obj.val == this.data[this.data.length - 1].val) {
      console.log("value is already exists in the list");
    } else if (obj.val > this.data[this.data.length - 1].val) {
      this.data.push(obj);
    } else {
      console.log("value is less than the last value");
    }
  },

  insertObj: function (index, obj) {
    var val = obj.val;
    var exists = this.data.some(function (item) {
      return item.val === val;
    });
    if (exists) {
      console.log("value is already exists in the list");
      return;
    }

    // Insert at the beginning
    if (index === 0) {
      if (val < this.data[0].val) {
        this.data.splice(0, 0, obj);
      } else {
        console.log("can't insert this value in the first");
      }
      return;
    }

    // Insert at the end
    if (index === this.data.length) {
      if (val > this.data[this.data.length - 1].val) {
        this.data.push(obj);
      } else {
        console.log("can't insert this value in the end");
      }
      return;
    }

    // Insert in the middle
    if (
      index > 0 &&
      index < this.data.length &&
      val > this.data[index - 1].val &&
      val < this.data[index].val
    ) {
      this.data.splice(index, 0, obj);
    } else {
      console.log("Can't insert at this index");
    }
  },

  popObj: function () {
    if (this.data.length > 0) {
      this.data.pop();
    } else {
      console.log("The array is empty");
    }
  },

  removeObj: function (val) {
    var index = this.data.findIndex(function (item) {
      return item.val === val;
    });
    if (index !== -1) {
      this.data.splice(index, 1);
    } else {
      console.log("data not found");
    }
  },
  deQueueObj: function () {
    if (this.data.length > 0) {
      this.data.shift();
    } else {
      console.log("The array is empty");
    }
  },

  displayObjs: function () {
    this.data.forEach(function (obj, index) {
      console.log(`Index ${index}: val = ${obj.val}`);
    });
  },
};
// LnkdLstObj.pushObj({ val: -1 });
// LnkdLstObj.enQueueObj({ val: 6 })
// LnkdLstObj.insertObj(1, { val: 2 });
// LnkdLstObj.popObj()
// LnkdLstObj.removeObj(2)
// LnkdLstObj.deQueueObj()
LnkdLstObj.displayObjs();
// console.log(LnkdLstObj.data);

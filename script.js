// Create test objects
const myObj = {
  name: "yash",
  getKeys: function () {
    return Object.keys(this);
  },
};

console.log(myObj.getKeys());
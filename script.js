const student = {
  name: "yash"
};

// Adding getKeys() to Object prototype
Object.prototype.getKeys = function () {
    return Object.keys(this);
};

// Calling the method
console.log(student.getKeys());
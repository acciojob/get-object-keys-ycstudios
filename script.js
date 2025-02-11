const student = {
  name: "yash"
};

Object.prototype.getKeys=function () {
    return Object.keys(this);
console.log(student.getKeys());
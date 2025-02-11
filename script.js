const student = {
  name: "yash",
  getKeys: function () {
    return Object.keys(this);
  },
};

console.log(student.getKeys());
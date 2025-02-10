// Create the student object with a method
const student = {
  name: "John",
  getKeys: function () {
    return Object.keys(this);  // Gets keys of the student object
  }
};

// Do not change the code below this line
window.student = student;

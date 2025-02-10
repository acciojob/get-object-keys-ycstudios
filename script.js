//your JS code here. If required.
// Create the student object
const student = {
  name: "John"
};

// Function to get all keys from the object
function getKeys(obj) {
  return Object.keys(obj);
}

// Testing the function
console.log(getKeys(student)); // Output: ["name"]

// Additional Tests
const student2 = { name: "John", age: 20, city: "New York" };
console.log(getKeys(student2)); // Output: ["name", "age", "city"]

const student3 = { id: 101, course: "Math", grade: "A" };
console.log(getKeys(student3)); // Output: ["id", "course", "grade"]

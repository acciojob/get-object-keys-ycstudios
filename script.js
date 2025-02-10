// Create a student object with a name property
// Create the student object
const student = {
  name: "John"
};

// Function to get all keys from the object
function getKeys(obj) {
  return Object.keys(obj);
}


// Example usage
console.log(getKeys(student));  // ["name"]
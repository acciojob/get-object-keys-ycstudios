// Create a student object with a name property
const student = {
    name: "John"
};

function getKeys(obj) {
    return Object.keys(obj);
}

// Example usage
console.log(getKeys(student));  // ["name"]
// An object is a structure where data added has no order.
// There are only key and value pairs stored.

var obj = {};

// The time complexities for different operations done on objects are:

// 1) Insert - O(1)
// Inserting refers to adding a property and its value to the object.
// It is always done in constant time where constant time refers to being independent of
// the number of object properties.
// eg.
obj.name = 'John'; // A property name is added in object with the value John
obj.age = 26;

console.log(obj); // Now, obj has 2 properties inside it

// 2) Retrieve - O(1)
// Retrieval refers to getting the property value from an object
// It is always done in constant time
// eg.
console.log(obj.name); // The name property value is retrieved from object and then logged in console

// 3) Search - O(n)
// Searching refers to searching within all property values and not searching a property.
// For searching a value, we need to iterate over all the properties in the object
// which means a comparison for each property value, hence the complexity of O(n)
// eg: Searching which property has value '26'
var keys = Object.keys(obj)
for(var i = 0; i< keys.length; i++) {
  if (obj[keys[i]] === 28) {
    console.log(keys[i]);
  }
}
// Output of above code would be 'age' which we get after comparison with all the values

// 4) Delete - O(1)
// Delete means deleting a property from an object.
// It is always done in constant time.
// eg.
obj.delete('age'); // Delete property 'age' from obj
console.log(obj); // Now obj has only one property inside it - 'name'
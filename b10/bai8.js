var listStudent = [
    { id: 1, name: "Nguyen Van A", age: 15 },
    { id: 2, name: "Nguyen Van B", age: 13 },
    { id: 3, name: "Nguyen Van C", age: 18 },
    { id: 4, name: "Nguyen Van D", age: 14 },

];



function sortArray(array) {
    array.sort(function(a, b) {
      if (a.age < b.age) {
        return -1;
      } else if (a.age > b.age) {
        return 1;
      } else {
        return a.id - b.id;
      }
    });
  
    return array;
  }
  

console.log(sortArray(listStudent)) 
//output [
    // { id: 2, name: "Nguyen Van B", age: 13 },
    // { id: 4, name: "Nguyen Van D", age: 14 },
    // { id: 1, name: "Nguyen Van A", age: 15 },
    // { id: 3, name: "Nguyen Van C", age: 18 },
// ]
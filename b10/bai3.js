function joinWithCharacter(array, charactor) {
    for(let i=0; i<array.length;i++){
        return array.join(charactor);
    }
}


// Ví dụ khi sử dụng
var cars = ['Honda', 'Mazda', 'Mercedes'];

var result = joinWithCharacter(cars, ' - ');

console.log(result); // Expected: "Honda - Mazda - Mercedes"
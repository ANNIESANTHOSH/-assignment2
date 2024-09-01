let arrays = [12, 4, 6, 7, 8, 9, 10];

function square(arra) {
    var sum = 0;
    for (var i = 0; i < arra.length; i++) {
        sum += arra[i] * arra[i]; 
    }
    return sum;
}

console.log(square(arrays));  

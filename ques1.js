function arrays() {
    return [21, 11, 44, 2, 6, 8];
}

var arrayis = arrays();
console.log("First element:", arrayis[0]);

const firstElement = arrayis[0];

if (firstElement <= 1) {
    console.log('It is not prime');
} else if (firstElement === 2) {
    console.log("It is prime");
} else if (firstElement % 2 === 0) {
    console.log("The number is not prime");
} else {
    let isPrime = true;
    for (let i = 3; i * i <= firstElement; i += 2) {
        if (firstElement % i === 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        console.log("The number is prime");
    } else {
        console.log("The number is not prime");
    }
}

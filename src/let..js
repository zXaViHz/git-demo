function example() {
    let x = 10;

    if (true) {
        let y = 20;
        console.log(x); // Output: 10
        console.log(y); // Output: 20
    }

    console.log(x); // Output: 10
    console.log(y); // Error: y is not defined
}

example();

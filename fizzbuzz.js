function fizzbuzz() {
    for (let i = 0; i <= 100; i++) {
        let print = '';
        if (i % 3 == 0) {
            print += 'Fizz';
        }
        if (i % 5 == 0) {
            print += 'Buzz';
        }
        if (print.length > 0) {
            console.log(print);
        } else {
            console.log(i);
        }
    }
}
fizzbuzz();
function factorial(num) {
    if (!num) return 0;
    let fac = 1;
    for (let i = 2; i <= num; i++) {
        fac *= i;
    }
    return fac;
}
console.log(factorial(0));
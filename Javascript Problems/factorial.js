function factorial(n){
    let number = 1;
    for(let i = 0; i < n; i++){
        number = n * factorial(n-1);
    }
    return number;
}
console.log(factorial(3));

function fizzbuzz(n){
    if (typeof n !== 'number') return n;
    if (n % 3 === 0 && n % 5 === 0) return 'fizzbuzz'
    if (n % 3 === 0) return 'fizz';
    if (n % 5 === 0) return 'buzz'
    return n;
}

console.log('a', fizzbuzz('a'))
for (let i = 0; i <= 100; i++){
console.log(i, fizzbuzz(i))
}
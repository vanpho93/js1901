// if (true) console.log(1);
// for (let i = 0; i < 10; i++) (console.log(i), console.log(i * 2));

function add(a, b) {
    return a + b;
}

console.log(add(4, 5));
console.log(add(4, 5, 6));
console.log(add(4));

function tinhTong(n) {
    let total = 0;
    for(let i = 1; i <= n; i++) total += i;
    return total;
}

function getRandom(n) {
    return Math.round(Math.random() * n);
}

console.log(getRandom(2));

// console.log(Math.random());
// console.log(Math.round(1.5));
// console.log(Math.ceil(1.6));
// console.log(Math.floor(1.6));

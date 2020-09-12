/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
console.log("Hello World, I know how to count");

let a = ['a', 'b', 'c', 'd']
a.forEach(n => console.log(n));

let b = a.map(n => n.toUpperCase());
let c = a.filter(n => n === 'b');
console.log(c);

let html = a.map(n => '<li>' + n + '</li>');
console.log('<ul>');
for (i = 0; i < a.length; i++) {
    console.log('<li>' + a[i] + '</li>');
}
console.log('</ul>');

console.log('<ul>' + html.join(" ") + '</ul>');

console.log(b);
//b.forEach(n=> console.log(n));

[1, 2, 3, 4].forEach(n => console.log(n));
[1, 2, 3, 4].forEach(udskriv);
[1, 2, 3, 4].forEach(udskrivdeluxe);
udskriv(215)

function udskriv(n) {
    console.log(n)
}

function udskrivdeluxe(n) {
    console.log('tal: ' + n)
}

function add(a, b) {
    return a + b;
}
console.log(add('jeg vil have en ', 'hest.'));
console.log(add(2, 3));
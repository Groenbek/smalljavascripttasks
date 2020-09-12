// A create two arrays

var boys = ["Peter", "lars", "Ole"];
var girls = ["Janne", "hanne", "Sanne"];

const merge = boys.concat(girls);
console.log(merge);
// concat does merge two existing arrays

// B this task also asks to merge
const all = boys.concat(girls);
console.log(all);

// C work with the join method
//Seperated by commas
console.log(all.join(', '));
// Seperated by hyphen
console.log(all.join('-'));

// D Add names Lone and Gitte to the end of the array
all.push('Lone', 'Gitte');
console.log(all);

// E Add names Hans and Kurt to the start
all.unshift('Hans', 'Kurt');
console.log(all);

// F Remove the first name (Hans)
//all.splice(0,1);
const firstName = all.shift(); 
console.log(all);

// G Remove Gitte
//all.splice(8,1);
const lastName = all.pop();
console.log(all);

// H Remove Ole and Janne from the middle
all.splice(3,1);
all.splice(3,1);
console.log(all);

// I Reverse the elements of the array
const reversen = all.reverse();
console.log(all);

// J Sort the array
all.sort();
console.log(all);

// K sort it case insesitive
console.log(all.sort(function (a, b) {
    if (a.toLowerCase() < b.toLowerCase()) {
        return -1;
    } else if ( a.toLowerCase() < b.toLowerCase() ) {
        return 1;
    } else {
        return 0;
    }
    } ));

// I Convert all names to upper case
const uppercase = all.map(all => all.toUpperCase());
console.log(uppercase);

// M Create new array containing name that start with I og L
var filt = all.filter(x => x.charAt(0).toLowerCase() === 'l');
console.log(filt);
var myString = 'Ceci est une chaîne de caractères';
console.log("String length==>"+myString.length);
console.log("our string in uppercase==>"+myString.toUpperCase());
console.log("our string to low==>"+myString.toLowerCase());
console.log("myString type is    ", typeof myString);

console.log('Manipulation of Boolean object')
var myBoolean = new Boolean(false);
    myBoolean = true;
console.log("my boolean type is    ", typeof myBoolean);

//arrays
var myArray = ['Sébastien', 'Laurence', 'Ludovic', 'Pauline', 'Guillaume'];
console.log(myArray);
var myArray = new Array('Sébastien', 'Laurence', 'Ludovic', 'Pauline', 'Guillaume');
console.log(myArray);
myArray.push('david');
console.log('push added david at the end of the array   ==>'+myArray);

var cousinsString = 'Pauline Guillaume Clarisse',
    cousinsArray = cousinsString.split(' ');
console.log(cousinsArray);
console.log('Browse array by for ==>');
for (let i = 0; i < cousinsArray.length; i++) {
    console.log(cousinsArray[i]);
}
console.log('Browse array by while ==>');
var iwhile=0;
while (iwhile < cousinsArray.length) {
    console.log(cousinsArray[iwhile]);
    iwhile++;
}
console.log('Browse array by do while ==>');

iwhile = 0;
do  {
    console.log(cousinsArray[iwhile]);
    iwhile++;
} while (iwhile < cousinsArray.length);

console.log('Browse array by for IN')
for (const key in cousinsArray) {
   console.log(cousinsArray[key]);
}

//define object family
var family = {
    self: 'Sébastien',
    sister: 'Laurence',
    brother: 'Ludovic',
    cousin_1: 'Pauline',
    cousin_2: 'Guillaume'
};
for (const key in family) 
        console.log(family[key]);
console.log('new family object with uncle');
family.uncle='david';
for (const key in family) 
        console.log(family[key]);


function getCords() {
    return {
        x : 10,
        y : 15
    };
}
console.log('The point cords are:  ==>', getCords());
console.log('The point X cords is:  ==>', getCords().x);
console.log('The point y cords is:  ==>', getCords().y);
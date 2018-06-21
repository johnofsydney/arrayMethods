const a = [1,2,3,4,5,6,7,8,9,10];


// filter with an anonymous function
const b = a.filter( function(element) {
  return (element % 2 === 0);
});
console.log(b);    // see console - main.js:8

const isEven = function (element) {
  if (element % 2 === 0) {
    return true;
  } else {
    return false;
  }
};

// fillter using a named function
const c = a.filter(isEven);
console.log(c);    // see console - main.js:20

// map using anonymous function
const d = a.map( function(element) {
  return (element * 2);
});
console.log(d);    // see console - main.js:26

// map using a named function
const timesBy2 = function(element) {
  return element * 2;
};

const e = a.map(timesBy2);
console.log(e);    // see console - main.js:34

// for reduce we have two arguments.
// The first is basically the running sum (aka the accumulator), the second is the element.
//
// reduce using anonymous function
const f = a.reduce( function(accumulator, element) {
  return (accumulator + 2 * element );
});
console.log(f);    // see console - main.js:43

//reduce using named function
const sumStuff = function (accumulator, element) {
  return (accumulator + 2 * element);
};

const g = a.reduce(sumStuff);
console.log(g);    // see console - main.js:51



// forEach with Anonymous function
a.forEach( function (element) {
  console.log("hello: " + (element * 2));    // see console - main.js:57
});

// forEach with named function
const logStuff = function(element) {
  console.log("hello: " + (timesBy2(element) ));    // see console - main.js:62
};
a.forEach( logStuff );

// the for / of method is very similar to forEach
for (let element of a) {
  console.log(element);    // see console - main.js:68
}

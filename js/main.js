a = [1,2,3,4,5,6,7,8,9,10]


// filter with an anonymous function
b = a.filter( function(element) {
  return (element % 2 === 0)
})
console.log(b);

const isEven = function (element) {
  if (element % 2 === 0) {
    return true
  } else {
    return false
  }
}

// fillter using a named function
c = a.filter(isEven)
console.log(c);

// map using anonymous function
d = a.map( function(element) {
  return (element * 2)
})
console.log(d);

const timesBy2 = function(element) {
  return element * 2
}

// map using a named function
e = a.map(timesBy2)
console.log(e);

// for reduce we have two arguments.
// The first is basically the running sum, the second is the element.
// reduce using anonymous fucxtion
f = a.reduce( function(accumulator, element) {
  return (accumulator + 2 * element )
})
console.log(f);

const sumStuff = function (accumulator, element) {
  return (accumulator + 2 * element)
};

//reduce using named function
g = a.reduce(sumStuff)
console.log(g);



// forEach with Anonymous function
h = a.forEach( function (element) {
  console.log("hello: " + (element * 2));
})

// forEach with named function
const logStuff = function(element) {
  console.log("hello: " + (element * 2));
}
k = a.forEach( logStuff )

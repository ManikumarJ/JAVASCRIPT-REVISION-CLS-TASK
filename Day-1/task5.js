// Task 5
// Build a simple counter using closure where each counter works independently:
// function makeCounter() {
//   // your code
// }
// const c1 = makeCounter();
// const c2 = makeCounter();

// c1(); // 1
// c1(); // 2
// c2(); // 1

function Counter(start) {
  let count = start;

  return function () {
    count++;
    return count;
  };
}

const c1 = Counter(0);    
const c2 = Counter(0);   

console.log(c1());
console.log(c1()); 
console.log(c2()); 
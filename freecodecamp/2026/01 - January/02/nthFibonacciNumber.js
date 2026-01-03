function nthFibonacci(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;

  let prev = 0;
  let curr = 1;

  for (let start = 2; start < n; start++) {
    const next = prev + curr;
    prev = curr;
    curr = next;
  }

  return curr;
}

console.log(nthFibonacci(0));

console.log(nthFibonacci(4));

console.log(nthFibonacci(10));

console.log(nthFibonacci(15));

// logic

// 1st
// prev = 0
// new = 1 (fib)
// fib = prev (0) + new (1)
// fib -> 1
// set prev = new: prev (1)

// 2nd
// prev = 1
// new = fib (1)
// fib = prev (1) + new(1)
// fib -> 2
// set prev = new: prev (1)

//3rd
// prev = 1
// new = fib (2)
// fib = prev (1) + new (2)
// fib -> 3
// set prev = new: prev (2)

// 4th
// prev = 2
// new = fib (3)
// fib = prev (2) + new (3)
// fib -> 5
// set prev = new: prev (3)

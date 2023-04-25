function* limitedFib(n) {
  let prev = 0;
  let curr = 1;
  let count = 0;

  while (count < n) {
    yield prev;
    [prev, curr] = [curr, prev + curr];
    count++;
  }
}

function* maxFib(n) {
  let prev = 0;
  let curr = 1;

  while (prev <= n) {
    yield prev;
    [prev, curr] = [curr, prev + curr];
  }
}

// to test limitedFib
let Fibonacci = limitedFib(10);

for (let num of Fibonacci) {
  console.log(num);
}

let Fibonacci2 = maxFib(35);

for (let num of Fibonacci2) {
  console.log(num);
}

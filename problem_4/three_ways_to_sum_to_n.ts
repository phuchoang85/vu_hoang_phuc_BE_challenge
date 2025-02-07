function sum_to_n_a(n) {
  let sum = 0;
  for (let i = 0; i <= n; i++) {
    sum += i;
  }
  return sum;
}

function sum_to_n_b(n) {
  if (n == 0) {
    return n;
  }
  return n + sum_to_n_b(n - 1);
}

function sum_to_n_c(n) {
	// from the formula => (n/2) * (n + 1) (even number) 
	// => (n/2) * (n + 1) + (n+1)/2 (odd number)
  let halfN = Math.floor(n / 2);
  let result = halfN * (n + 1);
  if (n % 2 !== 0) result += (n + 1) / 2; 
  return result;
}

console.log(sum_to_n_a(100));
console.log(sum_to_n_b(100));
console.log(sum_to_n_c(100));

function solution(n) {
  // let thous = Math.floor(n / 600);
  // let hund = Math.floor(n / 60) % 10;
  // let tens = Math.floor((n % 60) / 10);
  // let ones = n % 10;
  return (
    Math.floor(n / 600) +
    (Math.floor(n / 60) % 10) +
    Math.floor((n % 60) / 10) +
    (n % 10)
  );
}

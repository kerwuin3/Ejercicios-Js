// Reverse Number
function reverseNumber(n) {
  n = n + "";
  return (
    n.split("").reverse().join("")
  );
}

console.log(reverseNumber(32243))
console.log(reverseNumber(12345))
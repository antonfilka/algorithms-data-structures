//ts-worksheet

function isPalindrome(x: number) {
  // function getNumberOfDigits(number) {
  //   let result = 0;
  //   if (number === 0) return 1;
  //   while (number != 0) {
  //     number = Math.floor(number / 10);
  //     result++;
  //   }
  //   return result;
  // }

  const numberArray: number[] = [];
  if (x === 0) return true;
  if (x < 0) return false;

  while (x !== 0) {
    numberArray.push(x % 10);
    x = Math.floor(x / 10);
  }

  let start = 0;
  let end = numberArray.length - 1;

  for (let i = 0; i < Math.floor(numberArray.length / 2); i++) {
    if (start === end) return true;
    if (numberArray[start] === numberArray[end]) {
      start++;
      end--;
      continue;
    } else {
      return false;
    }
  }

  return true;
}

console.log(isPalindrome(101));

export {};

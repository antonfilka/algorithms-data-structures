//ts-worksheet

function sum(arr: number[]): number {
  if (arr.length === 1) return arr[0];
  return arr[0] + sum(arr.slice(1, arr.length));
}

sum([1, 2, 3, 4, 5]); //

//ts-worksheet

// O(n*log n)

function QuickSort(arr: number[]): number[] {
  if (arr.length <= 1) return arr;

  const pivot = arr[0];
  const left: number[] = [];
  const right: number[] = [];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return [...QuickSort(left), pivot, ...QuickSort(right)];
}

const sorted = QuickSort([1, 6, 2, 8, 3, 9, 12, 33, 1, 3, 6, 556]);
console.log(sorted);

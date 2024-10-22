// ts-worksheet

const arr = [97, 80, 35, 2, 62, 22, 79, 68, 59, 22];

const selectionSort = (arr: number[]) => {
  for (let i = 0; i < arr.length; i++) {
    let min = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[min] > arr[j]) {
        min = j;
      }
    }

    if (i !== min) {
      let temp = arr[i];
      arr[i] = arr[min];
      arr[min] = temp;
    }
  }

  return arr;
};

console.log(selectionSort(arr));

export {};

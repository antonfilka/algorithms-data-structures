function generateParentheses(n: number) {
  const result: string[] = [];

  function backtrack(sequence: string, open: number, close: number) {
    // Если длина последовательности достигла 2 * n, добавляем ее в результат
    if (sequence.length === 2 * n) {
      result.push(sequence);
      return;
    }

    // Если количество открывающих скобок меньше n, можем добавить еще одну
    if (open < n) {
      backtrack(sequence + "(", open + 1, close);
    }

    // Если количество закрывающих скобок меньше открывающих, можем добавить закрывающую
    if (close < open) {
      backtrack(sequence + ")", open, close + 1);
    }
  }

  // Запускаем рекурсию с пустой последовательностью и счетчиками открытых и закрытых скобок равными 0
  backtrack("", 0, 0);
  return result;
}

// Чтение входного значения n
const sequences = generateParentheses(2);

// Выводим результат
console.log(sequences.join("\n"));

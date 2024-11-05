const readline = require("readline");

function readInput(): Promise<string[]> {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  const lines: string[] = [];

  return new Promise((resolve) => {
    rl.on("line", (line: string) => {
      lines.push(line);
    });

    rl.on("close", () => {
      resolve(lines);
    });
  });
}

async function main() {
  const input = await readInput();
  const numberOfElements = Number(input[0]);

  let maxSequence = 0;
  let currentSequence = 0;

  for (let i = 1; i <= numberOfElements; i++) {
    if (Number(input[i]) === 1) {
      currentSequence++;
    } else {
      maxSequence = Math.max(maxSequence, currentSequence);
      currentSequence = 0;
    }
  }

  maxSequence = Math.max(maxSequence, currentSequence);

  console.log(maxSequence);
}

main();

export {};

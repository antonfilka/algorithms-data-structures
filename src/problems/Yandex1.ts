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

  const J = input[0];
  const S = input[1];

  const jewelsSet = new Set(J);

  let jewelCount = 0;
  for (const char of S) {
    if (jewelsSet.has(char)) {
      jewelCount++;
    }
  }

  console.log(jewelCount);
}

main();

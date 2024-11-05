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

  const used = new Map();

  for (let i = 1; i <= numberOfElements; i++) {
    if (!used.has(Number(input[i]))) {
      used.set(Number(input[i]), "");
      console.log(input[i]);
    }
  }
}

main();

export {};

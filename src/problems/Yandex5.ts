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

  const word1 = input[0];
  const word2 = input[1];

  const sorted1 = word1.split("").sort().join("");
  const sorted2 = word2.split("").sort().join("");

  console.log(sorted1 === sorted2 ? 1 : 0);
}

main();

export {};

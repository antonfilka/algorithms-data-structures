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

  const numberOfCities = Number(input[0]);
  const power = input[numberOfCities + 1];
  const [from, to] = input[numberOfCities + 2].split(" ").map((i) => Number(i));

  const cities = new Map();
  const distances = new Map();

  for (let i = 1; i <= numberOfCities; i++) {
    cities.set(
      i,
      input[i].split(" ").map((i) => Number(i)),
    );
  }

  const getDistance = (x1: number, x2: number, y1: number, y2: number) => {
    return Math.abs(x2 - x1) + Math.abs(y2 - y1);
  };

  const checked = [from];
  const queue = [from];

  while (queue.length) {
    const city = queue.shift() as number;
    const neighbors = Array.from(cities.keys()).filter(
      (i) => i !== city && !queue.includes(i),
    );

    const coordinates = cities.get(city);
    distances.set(city, new Map());
  }

  console.log(cities, from, to);
}

main();

export {};

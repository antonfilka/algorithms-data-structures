//ts-worksheet
//ts-ignore

const graph: any = {
  a: ["b", "c"],
  b: ["d"],
  c: ["e"],
  d: ["f"],
  e: ["d", "f"],
  f: ["g"],
  g: [],
};

const GraphWidthSearch = (start: string, target: string) => {
  if (start === target) return 0;

  const queue: string[] = [start];
  const checkedPoints: string[] = [];

  while (queue.length) {
    console.log(queue);
    const point = queue.shift() as string;

    if (checkedPoints.includes(point)) continue;

    const pointNeighbors = graph[point];

    if (point === target) {
      return true;
    } else {
      queue.push(...pointNeighbors);
    }

    checkedPoints.push(point);
  }
};

GraphWidthSearch("a", "g");

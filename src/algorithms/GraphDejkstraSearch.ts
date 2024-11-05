//ts-worksheet

function GraphDejkstraSearch(graph: any, startPoint: string, endPoint: string) {
  // Пока есть непроверенные узлы
  // Проверять всех соседей точки ближайшей к началу
  // Рассчитать стоимость маршрута для каждой точки
  // Если были обновлены стоимости то оьновить родителей
  // пометить точку как проверенную
  // выполнить для всех точек
  // пройтись в обратном порядке по родителям и вывести путь

  const getNeighbors = (point: string): string[] => Object.keys(graph[point]);

  const routePrice: any = {};
  const parents: any = {};
  const checked: string[] = [];

  routePrice[startPoint] = 0;
  parents[startPoint] = null;

  const queue: string[] = [startPoint];

  while (queue.length) {
    const currentPoint = queue.shift() as string;
    const neighbors = getNeighbors(currentPoint);

    const priceToCurrentPoint = routePrice[currentPoint];

    for (let i = 0; i < neighbors.length; i++) {
      const point = neighbors[i];
      if (checked.includes(point)) continue;

      const priceFromCurrentToPoint = graph[currentPoint][point];
      const newPrice = priceToCurrentPoint + priceFromCurrentToPoint;

      if (routePrice[point] === undefined || routePrice[point] > newPrice) {
        routePrice[point] = newPrice;
        parents[point] = currentPoint;
      }

      if (!queue.includes(point)) {
        queue.push(point);
      }
    }

    checked.push(currentPoint);
  }

  let path = `-${endPoint}`;
  let currentLastPoint = endPoint;
  while (currentLastPoint !== startPoint) {
    const price = routePrice[currentLastPoint];
    const parent = parents[currentLastPoint];
    path = `-${parent}` + path;
    currentLastPoint = parent;
  }

  return { path, totalPrice: routePrice[endPoint] };
}

const graph1: any = {
  a: {
    b: 5,
    c: 2,
  },
  b: {
    d: 4,
    e: 2,
  },
  c: {
    b: 8,
    e: 7,
  },
  d: {
    e: 6,
    f: 3,
  },
  e: {
    f: 1,
  },
  f: {},
};

const graph2: any = {
  a: { b: 10 },
  b: { c: 20 },
  c: { d: 1, e: 30 },
  d: { b: 1 },
  e: {},
};

console.log(GraphDejkstraSearch(graph1, "a", "f"));
console.log(GraphDejkstraSearch(graph2, "a", "e"));

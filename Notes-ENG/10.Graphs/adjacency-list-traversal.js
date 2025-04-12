/*
Adjacency List - Traversing 
*/

const graph = {
  a: ["b", "c"],
  b: ["d"],
  c: ["e"],
  d: ["f"],
  e: [],
  f: [],
};

// DFS - Iterative
const dfsIteration = (graph, source) => {
  const stack = [source];

  while (stack.length > 0) {
    const cur = stack.pop();
    console.log(cur);

    for (let neighbor of graph[cur]) {
      stack.push(neighbor);
    }
  }
};

// DFS - Recursive
const dfsRecursion = (graph, source) => {
  console.log(source);
  for (let neighbor of graph[source]) {
    dfs(graph, neighbor);
  }
};

// BFS
const bfs = (graph, source) => {
  const queue = [source];
  while (queue.length > 0) {
    const cur = queue.shift();
    console.log(cur);
    for (let neighbor of graph[cur]) {
      queue.push(neighbor);
    }
  }
};

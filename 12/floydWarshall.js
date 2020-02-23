import {Dijkstra} from './Dijkstra.js';

//Floyd-Warshall算法???
export function floydWarshall(graph){
  let dist = [];
  for(let i = 0; i < graph.length; i++){
    dist.push(Dijkstra(graph,i));
  }
  return dist;
}
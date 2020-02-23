const INF = Number.MAX_SAFE_INTEGER;


//贪心算法, 每一步都求出局部最优解, 最后得到全局最优解, 但不一定是完美解
//适用于有向或无向加权图
//输入图和起点, 计算所有其他点距离起点的最短路径
export function Dijkstra(graph, src){   //src < graph.length
  let dist = [];    //src到i的最短距离
  for(let i = 0; i < graph.length; i++){
    if(src === i){
      dist[i] = 0;    //src -> src距离为0
    }else{
      dist[i] = INF;
    }
  }
  function iter(i){
    for(let j = 0; j < graph.length; j++){
      if(graph[i][j] !== 0 &&
         dist[i]+graph[i][j] < dist[j])
      {//  如果src到i的最短距离加i到j的最短距离 小于 src到j的最短距离, 就更新dist[j]
        dist[j] = dist[i]+graph[i][j];
      }
    }
  }
  let temp = src - 1;
  while(temp >= 0){
    iter(temp--);
  }
  while(src < graph.length){
    iter(src++);
  }
  
  return dist;
}
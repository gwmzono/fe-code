// 0-1背包, 每种物品只有一个, 且具有重量和价值, 限重背包要求价值最大
let W = [];
let V = [];
let cache = [];

export function maxValueBag(capacity, weight, value){
  for(let i = 0; i <= weight.length; i++){
    cache[i] = [];
  }
  
  for(let i = 0; i <= weight.length; i++){
    for(let w = 0; w <= capacity; w++){
      if(i === 0 || w === 0){
        cache[i][w] = 0;
      }
      else if(weight[i-1] > w){
        cache[i][w] = cache[i-1][w];
      }else{
        if(value[i-1]+cache[i-1][w-weight[i-1]]  >  cache[i-1][w]){
          cache[i][w] = value[i-1]+cache[i-1][w-weight[i-1]];
        }else{
          cache[i][w] = cache[i-1][w];
        }
      }
    }
  }
  return cache;
}
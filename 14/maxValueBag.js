const cache = {};  //值是索引数组
const weight = [];
const value = [];
let minWeight = Number.MAX_SAFE_INTEGER;
// let maxWeight = 0;

//动态规划问题, 背包问题需要假定没有[同重不同值]的物品
export function maxValueBag(capacity, items){//items: [[weight, value],...]
  for(let item of items){
    cache[item[0]] = [items.indexOf(item)];
    weight.push(item[0]);
    value.push(item[1]);
    minWeight = item[0] < minWeight ? item[0] : minWeight;
    // maxWeight = item[0] > maxWeight ? item[0] : maxWeight;
  }
  return recursion(capacity);
}

function recursion(cap){  //返回最大价值索引数组
  if(cap < minWeight){
    return [];
  }
  if(cache[cap]){
    return cache[cap];
  }
  let val = 0;
  let list = [];    //物品索引
  for(let w of weight){
    //这一步相当重要, 如果不判断, 哪怕cap-w是负的, arr1这一步也照跑
    if(cap - w < minWeight)   continue;
    let arr1 = recursion(w);
    let arr2 = recursion(cap - w);
    let temp = 0;
    for(let i of arr1){
      temp += value[i];
    }
    for(let i of arr2){
      temp += value[i];
    }
    if(temp > val){
      val = temp;
      list = arr1.concat(arr2);
    }
  }
  cache[cap] = list;
  return list;
}
//完全背包, 每种物品不限个数, 动态规划问题
//用了分治的办法, 好理解, 但是不能达到完美解
// const cache = {};  //值是索引数组
// const weight = [];
// const value = [];
// let minWeight = Number.MAX_SAFE_INTEGER;

// export function maxValueBag(capacity, items){//items: [[weight, value],...]
//   for(let item of items){
//     cache[item[0]] = [items.indexOf(item)];
//     weight.push(item[0]);
//     value.push(item[1]);
//     minWeight = item[0] < minWeight ? item[0] : minWeight;
//   }
//   return recursion(capacity);
// }

// function recursion(cap){  //返回最大价值索引数组
//   if(cap < minWeight){
//     return [];
//   }
//   if(cache[cap]){
//     return cache[cap];
//   }
//   let val = 0;
//   let list = [];    //物品索引
//   for(let w of weight){
//     //这一步相当重要, 如果不判断, 哪怕cap-w是负的, arr1这一步也照跑
//     if(cap - w < 0)   continue;
//     let arr1 = recursion(w);
//     let arr2 = recursion(cap - w);
//     let temp = 0;
//     for(let i of arr1){
//       temp += value[i];
//     }
//     for(let i of arr2){
//       temp += value[i];
//     }
//     if(temp > val){
//       val = temp;
//       list = arr1.concat(arr2);
//     }
//   }
//   cache[cap] = list;
//   return list;
// }


//动态规划法, 可以得到完美解
export function maxValueBag(c,w,v){// 容量,质量,价值
  const dp = [];
  const value = v;
  const weight = w;
  const cap = c;
  const len = value.length;
  
  for(let i = 0; i <= len; i++){
    for(let w = 0; w <= cap; w++){
      //如果是边界
      if(i === 0 || w === 0) {
        if(!dp[i]){
          dp[i] = [];
        }
        dp[i][w] = 0;
        continue;
      }
      
      //容量不够
      if(w < weight[i-1]){
        dp[i][w] = dp[i-1][w];
        continue;
      }
      
      //容量够
      let nowValue = dp[i-1][w];
      for(let k = 0; k*weight[i-1] <= w; k++){
        nowValue = Math.max(nowValue, k*value[i-1]+dp[i-1][w-k*weight[i-1]]);
      }
      dp[i][w] = nowValue;
    }
  }
  return dp;
}
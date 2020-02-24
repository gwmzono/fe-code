// 最小硬币找零问题, 用动态规划做
// 假设有面值[1,2,5,10,20,100]的现金, 需要找零n, 要做到找零的数量最少
// 假设DP(i)表示找零最少的情况, 那么DP(n)可以分解成DP(m)和DP(n-m)之和最小
// 只要迭代1-n/2, 就能找出DP(n)最小的情况

const cache = {}; //缓存DP(i), 存的是数组

export function minCoin(arr, amount){//arr: 金钱种类, amount: 总找零数
  for(let i of arr){  //将所有面值保存
    cache[i] = [i];
  }
  return recursion(amount);
}

function recursion(amount){
  if(cache[amount]){
    return cache[amount];
  }
  let len = Number.MAX_SAFE_INTEGER;  //存放零钱数量
  let min = [];                       //用于存放迭代中找到的最小情况
  for(let i = 1; i <= Math.floor(amount/2); i++){
    let arr1 = recursion(i);
    let arr2 = recursion(amount - i);
    if(arr1.length + arr2.length < len){ //一旦找到的情况更好就更新
      len = arr1.length + arr2.length;
      min = arr1.concat(arr2);
    }
  }
  cache[amount] = min;    //缓存
  return min;
}
/*
**  best-time-to-buy-and-sell-stock
**  求数值数组内的最大差值(峰值需在谷值右边), 单次买进卖出, 买和卖不能同一天
**  @params  {Array}  arr
**  @return  {Number} 
*/


export function test(arr){
  let min = arr[0];
  let profit = 0;
  for(let i = 1; i < arr.length; i++){
    //找到了更大的峰值, 重新计算profit
    if(arr[i] > arr[i-1]){
      profit = arr[i] - min;
    }
    //找到了更小的
    if(arr[i] < min){
      min = arr[i];
    }
  }
  return profit;
}
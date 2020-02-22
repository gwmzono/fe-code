/*
**  best-time-to-buy-and-sell-stock-ii
**  求数值数组内的最大差值(峰值需在谷值右边), 多次买进卖出, 买和卖不能同一天
**  @params  {Array}  arr
**  @return  {Number} 
*/

//虽说不能同一天买入和卖出, 但是不需要输出买入和卖出分别是哪一天, 故实现时可以忽略
export function test(arr){
  let profit = 0;
  for(let i = 1; i < arr.length; i++){
    if(arr[i] > arr[i-1]){
      profit += arr[i]-arr[i-1];
    }
  }
  return profit;
}
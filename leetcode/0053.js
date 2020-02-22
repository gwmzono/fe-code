/*
**  maximum-sum-subarray
**  返回输入数组的最大子序列和
**  @param  {Array}  arr
**  @return {Number}
*/

//暴力解, O(n^2)
//很好理解, left和right遍历数组, 会穷举所有子序列
// export function test(arr){
//   let max = Number.MIN_VALUE;
//   for(let left = 0; left < arr.length; left++){
//     let sum = 0;
//     for(let right = left; right < arr.length; right++){
//       sum += arr[right];
//       if(sum > max){
//         max = sum;
//       }
//     }
//   }
//   return max;
// }

//O(n), 不好理解
//任何一个子序列和(m, n), 都可以用(0, n)减去(0, m)得到
//min代表前面出现过的最小序列和, sum是指0到当前位置的和, sum-min就是所有可能的最大和
export function test(arr){
  const len = arr.length;
  let min = 0;
  let max = arr[0];
  let sum = 0;
  for(let i = 0; i < len; i++){
    sum += arr[i];
    if(sum < min){
      min = sum;
    }
    if(sum - min > max){
      max = sum - min;
    }
  }
  return max;
}
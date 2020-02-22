/*
**  contains-duplicate
**  给定一个数值数组arr和一个整数k, 如果arr内存在两个相等的数,
**  且这两个数的索引之差不大于k, 返回true, 否则返回false
*/

//hash表法
export function test(arr, k){
  let hashMap = {};
  for(let i = 0; i < arr.length; i++){
    if(hashMap[arr[i]] === undefined){
      hashMap[arr[i]] = i;
    }else if(Math.abs(hashMap[arr[i]] - i) <= k){
      return true;
    }
  }
  return false;
}
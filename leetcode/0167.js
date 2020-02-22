/*
**  two-sum
**  数值数组内找到两个数相加结果是target, 返回这两个索引
**  @param  {Array}   arr
**  @param  {Number}  target
**  @return {Array}   [index1,index2]
*/

//因为是有序的, 所以能够用左右指针法
// export function test(arr, target){
//   let left = 0;
//   let right = arr.length - 1;
//   while(left < right){
//     let temp = arr[left] + arr[right];
//     if(temp === target){
//       return [left, right];
//     }else if(temp < target){
//       left++;
//     }else{
//       right--;
//     }
//   }
//   return false;
// }

//这个方法不要求数组有序
//hashMap, 将值通过一个hash函数转化成索引(这里直接使用值做索引)
//查hashMap复杂度O(1), 总时间复杂度O(n)
export function test(arr, target){
  let hashMap = {};
  for(let i = 0; i < arr.length; i++){
    if(hashMap[target - arr[i]] !== undefined){
      return [hashMap[target - arr[i]], i];
    }else{
      hashMap[arr[i]] = i;
    }
  }
  return false;
}
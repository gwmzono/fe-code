/*
**  majority-element
**  找出数组中超过半数的元素(假定数组不为空且存在超过半数的元素)
**  @param  {Array}   arr
**  @return {Number}
*/

//计数法, 时间复杂度O(n), 由于增加了计数数组, 太耗费空间
// export function test(arr){
//   let limit = Math.floor(arr.length/2);
//   let temp = [];
//   for(let i = 0; i < arr.length; i++){
//     if(temp[arr[i]] === undefined){
//       temp[arr[i]] = 0;
//     }
//     temp[arr[i]]++;
//     if(temp[arr[i]] > limit){
//       return arr[i];
//     }
//   }
//   console.log(temp)
//   return false;
// }

//消除法, 由于没用到计数数组, 空间复杂度也很小, 但是要求更苛刻, 因为必须存在这个元素
export function test(arr){
  let count = 1;
  let current = arr[0];
  for(let i = 1; i < arr.length; i++){
    if(arr[i] === current){
      count++;
    }else if(count > 0){
      count--;
    }else{
      current = arr[i];
      count++;
    }
  }
  return current;
}
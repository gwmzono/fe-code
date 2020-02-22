


//直觉的办法
// export function test(arr){
//   let sum1 = 0;
//   let sum2 = 0;
//   for(let i = 0; i < arr.length; i++){
//     if(i%2 === 0){
//       sum2 += arr[i];
//     }else{
//       sum1 += arr[i]
//     }
//   }
//   return Math.max(sum1, sum2);
// }

//动态规划
export function test(arr){
  let a = 0;//DP[-2]
  let b = 0;//DP[-1]
  for(let i = 0; i < arr.length; i++){
    const temp = b;//暂存DP[-1]
    b = Math.max(a + arr[i],b);//新的DP[-1]
    a = temp;//暂存的DP[-1]变成DP[-2]
  }
  return b;
}
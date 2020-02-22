/*
**  single-number
**  有一个数值数组, 里面元素只有一个单独存在的, 其他都是成双成对的, 找到他!
**  要求不额外使用空间, 时间复杂度O(n)
**  @param  {Array}   arr
**  @return {Number}  rest
*/


//位运算竟然有如此微妙之处
export function test(arr){
  let rest = 0;
  for(let i=0; i<arr.length; i++){
    rest ^= arr[i];
  }
  return rest;
}
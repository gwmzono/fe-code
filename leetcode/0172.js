/*
**  factorial-trailing-zeroes
**  返回阶乘的后缀0
**  @param    {Number}    n
**  @return   {Number}
*/

//千万不可以算阶乘
//只有2*5才会产生0
//阶乘数列中, 有几个5就有几个后缀0, 所以将输入数字反复除以5可得总共有多少5
export function test(n){
  if(n<5){
    return 0;
  }
  let count = Math.floor(n/5);
  return count+test(count);
}
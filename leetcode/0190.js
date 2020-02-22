/*
**  reverse-bits
**  将一个数的二进制按位翻转
**  @param    {Number}    num
**  @return   {Number}
*/


//js的Number类型都是有符号的, 能表示数值的只有31位
export function test(num){
  let rest = 0;
  for(let i = 0; i < 32; i++){
    rest = (rest<<1) + (num&1);  //位运算的优先级比四则运算低
    num = num>>>1;
  }
  return rest>>>0;
}
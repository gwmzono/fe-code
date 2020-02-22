/*
**  number-of-1-bits
**  输入一个数, 返回这个数bit为1的数量
**  @param    {Number}    num
**  @return   {Number}
*/


//很巧妙的办法, 比移位的方法省时间得多
export function test(num){
  let count = 0;
  while(num>0){
    num = num & num-1;//消除末尾0
    count++;
  }
  return count;
}
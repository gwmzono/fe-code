import {Stack} from './stack-weakMap.js';

let stack = new Stack();
//十进制转二进制, 返回字符串
export function dec2bin(num){
  while(num/2 !== 0){
    let rem = num % 2;
    stack.push(rem);
    num = Math.floor(num/2);
  }
  // console.log(stack.toString());
  let str = '';
  while(!stack.isEmpty()){
    str += stack.pop();
  }
  return str;
}
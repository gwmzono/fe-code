import {Stack} from './stack-weakMap.js';

let stack = new Stack();
//任意进制转换
export function converter(num, base){
  const temp = [2,8,16];
  if(temp.indexOf(base) === -1){
    return '进制必须是2 8 16';
  }
  let str = '';  //存放转换值
  while(num/base !== 0){
    let rem = num % base;
    switch(rem){
      case 10: rem = 'A';break;
      case 11: rem = 'B';break;
      case 12: rem = 'C';break;
      case 13: rem = 'D';break;
      case 14: rem = 'E';break;
      case 15: rem = 'F';break;
      default: break;
    }
    stack.push(rem);
    num = Math.floor(num/base);
  }
  while(!stack.isEmpty()){
    str += stack.pop();
  }
  return str;
}
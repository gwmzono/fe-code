/*
** Valid Parentheses 验证输入的括号是否匹配
** @param {string} s
** @return {boolean}
*/

export function test(s){
  let temp = s.split('');
  let arr = [];
  for(let item of temp){
    switch(item){
      case '{':  arr.push('}');  break;
      case '[':  arr.push(']');  break;
      case '(':  arr.push(')');  break;
      case '}':
      case ']':
      case ')':
        if(arr.pop() !== item){
          return false;
        }
        break;
      default: break;
    }
  }
  if(arr.length !== 0){
    return false;
  }
  return true;
}
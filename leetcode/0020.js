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
      //是左边符号, 就进栈匹配的右边符号
      case '{':  arr.push('}');  break;
      case '[':  arr.push(']');  break;
      case '(':  arr.push(')');  break;
      //是右边符号, 就出栈判断
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
  //如果数组不为0, 说明有未被匹配的元素
  if(arr.length !== 0){
    return false;
  }
  return true;
}
/*
**  valid-palindrome
**  判断输入的字符串是否是回文的, 忽略非字母字符
**  @param    {String}  str
**  @return   {Boolean}
*/

export function test(str){
  str = str.toLowerCase();
  let left = 0;
  let right = str.length-1;
  while(left < right){
    while(str.charAt(left) < 'a' || str.charAt(left) > 'z'){
      left++;
    }
    while(str.charAt(right) < 'a' || str.charAt(right) > 'z'){
      right--;
    }
    if(str.charAt(left++) !== str.charAt(right--)){
      return false;
    }
  }
  return true;
}
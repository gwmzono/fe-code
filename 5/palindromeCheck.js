import {DEqueue} from './DEqueue';

//返回bool
export function palindromeCheck(str = ''){
  str = str.toString();
  if(str.length === 0){
    console.error('参数错误');
    return false;
  }
  const deq = new DEqueue();
  for(let item of str){
    deq.addFront(item);
  }
  let isEqual = true;
  while(isEqual && deq.size > 1){  //队头与队尾比较
    let f = deq.removeFront();
    let b = deq.removeBack();
    isEqual = b===f;
  }
  return isEqual;
}
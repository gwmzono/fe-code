//私有方法
//因为前面类属性用了Symbol类型, 导致方法不方便抽取出来
//因为每个Symbol都不同, 如果引入, 不同类里的同名Symbol会互相覆盖
//所以虽然Symbol能够创建私有属性, 但也导致程序更加复杂
function elIsValid(el){   //检测元素合法性
  if(el === undefined || el === null){
    return false;
  }
  return true;
}
function indexIsValid(index){  //检测数字合法性
  if(typeof index !== 'number' || index < 0 || Math.floor(index) !== index){
    return false;
  }
  return true;
}
//深拷贝
function deepCopy(obj){
  //由于空数组和空对象转换成bool都是true, getSize获取他们的长度
  function getSize(a){
    if(a instanceof Array){
      return a.length;
    }
    let len = 0;
    for(let i in a){
      len++;
    }
    return len;
  }
  //不是数组或对象, 直接返回
  if(typeof obj !== 'object'){
    return obj;
  }
  //空数组或对象直接返回
  if(getSize(obj) === 0){
    return JSON.parse(JSON.stringify(obj));
  }
  //下面递归处理
  let temp = Array.isArray(obj) ? [] : {};
  for(let i in obj){
    if(obj.hasOwnProperty(i)){
      //排除原型属性和方法的复制
      temp[i] = deepCopy(obj[i]);
    }
  }
  return temp;
}

export {elIsValid, indexIsValid, deepCopy};
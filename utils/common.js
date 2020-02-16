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

//深拷贝, 不拷贝原型方法和属性
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

//djb2散列算法,产生数字键
function djb2HashCode(key){
  if(typeof key !== 'number' && typeof key !== 'string'){
    return false;
  }
  const tableKey = key.toString();
  let hash = 5381;
  for (let i = 0; i < tableKey.length; i++) {
    hash = (hash * 33) + tableKey.charCodeAt(i);
  }
  return hash % 1013;
}

export {elIsValid, indexIsValid, deepCopy, djb2HashCode};
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
export {elIsValid, indexIsValid};
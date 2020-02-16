import {deepCopy} from '../utils/common.js';

//对象的键只支持字符串和符号, 其他类型也会转换成字符串, 所以构造函数里直接判定一下
//ES6 Map 类支持任意类型的键和值.
export class ObjMap{
  constructor(objLikeArr=[]){
    let temp = {};
    try{
      //如果是ObjMap实例, 直接赋值返回
      if(objLikeArr instanceof ObjMap){
        this.table = deepCopy(objLikeArr.table);
        return false;
      }
      if(!(objLikeArr instanceof Array)){
        throw 'param should be Array';
      }
      for (let item of objLikeArr){
        //判定数组内容合法性
        if(!(item instanceof Array) || item.length < 2){
          throw 'param should be [[key,val],...]';
        }
        let type = typeof item[0];
        //判定键名合法性
        if(type !== 'string' && type !== 'symbol'){
          throw 'TypeError: key should be string or symbol';
        }
        temp[item[0]] = item[1];
      }
      this.table = temp;
    }catch(err){
      console.log(err);
    }
  }
}
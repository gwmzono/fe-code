import {deepCopy} from '../utils/common.js';

function isValidKey(key){
  if(typeof key !== 'string' && typeof key !== 'symbol'){
    return false;
  }
  return true;
}

//new ObjMap() 返回{table: {key:value, ...}}类型
//ES6 Map 类支持任意类型的键和值, 更加好用
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
          throw 'param should be [[key,value],...]';
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
  
  get size(){
    let len = 0;
    for(let i in this.table){
      if(this.table.hasOwnProperty(i)){
        len++;
      }
    }
    return len;
  }
  
  //查看键名是否存在, 返回bool
  has(key){
    if(this.table.hasOwnProperty(key)){
      return true;
    }
    return false;
  }
  
  //查询键名对应的值, 没有返回undefined
  get(key){
    if (this.table.hasOwnProperty(key)) {
      return this.table[key];
    }
    return undefined;
  }
  
  //设置新的键值对, 存在就覆盖
  set(key, value){
    if(!isValidKey(key)){
      return false;
    }
    this.table[key] = value;
    return true;
  }
  
  //根据键名删除
  delete(key){
    if(this.table.hasOwnProperty(key)){
      delete this.table[key];
      return true;
    }
    return false;
  }
  
  //清空
  clear(){
    this.table = new ObjMap();
    return true;
  }
  
  //返回键数组
  keys(){
    let temp = [];
    for(let i in this.table){
      temp.push(i);
    }
    return temp;
  }
  
  //返回值数组
  values(){
    let temp = [];
    for(let i in this.table){
      temp.push(this.table[i]);
    }
    return temp;
  }
  
  //回调, method参数为(key, value)
  forEach(method){
    for(let i in this.table){
      method.call(this, i, this.table[i]);
    }
  }
  
  //返回[{key:..., value:...}, ...]格式的二维数组
  toArray(){
    let temp = [];
    const content = this.table;
    for(let i in content){
      let obj = {};
      obj.key = i;
      obj.value = content[i];
      temp.push(obj);
    }
    return temp;
  }
}
//书上用对象来实现集合, 让对象的键和值都等于传入的元素, 这样做有一个严重的负面影响
//因为对象的键只支持字符串(和ES6的符号类型), 当把其他类型赋给键名时, 会转换成字符串
//而对象总是转换成"[object Object]", 这将导致对象只能存一个, 即使内容不同也不行
//而ES6实现的Set类, 即使内容相同的对象和数组, 也可以存放多个(引用类型地址不同)
//正确的方法是用数组来实现(性能差), 或者继承Set来实现(浏览器版本要求)
//集合类, 使用数组实现, 不使用对象和Symbol
export class ArrSet{
  constructor(iter){
    try{
      let temp = [];
      for(let i of iter){
        if(temp.indexOf(i) === -1){
          temp.push(i);
        }
      }
      this.items = temp;
    }
    catch(err){
      console.log(err);
    }
  }
  get size(){
    return this.items.length;
  }
  has(el){
    let index = this.items.indexOf(el);
    return index===-1 ? false : true;
  }
  add(el){
    if(!this.has(el)){
      this.items.push(el);
      return this;
    }
    return false;
  }
  delete(el){
    if(!this.has(el)){
      return false;
    }
    let index = Array.prototype.indexOf.call(this.items,el);
    let temp = [];
    for(let i=0; i<this.size; i++){
      if(i === index)  continue;
      temp.push(this.items[i]);
    }
    this.items = temp;
    return true;
  }
  clear(){
    this.items = [];
    return true;
  }
  
  //并集
  union(otherSet){
    if(!(otherSet instanceof ArrSet)){
      return false;
    }
    let temp = this.items;
    for(let i of otherSet.items){
      if(!this.has(i)){
        temp.push(i);
      }
    }
    const newSet = new ArrSet(temp);
    return newSet;
  }
  //交集
  intersect(otherSet){
    if(!(otherSet instanceof ArrSet)){
      return false;
    }
    let temp = [];
    for(let i of otherSet.items){
      if(this.has(i)){
        temp.push(i);
      }
    }
    const newSet = new ArrSet(temp);
    return newSet;
  }
  //差集(a-b) a中有b中没有
  difference(otherSet){
    if(!(otherSet instanceof ArrSet)){
      return false;
    }
    let temp = [];
    for(let i of this.items){
      if(!otherSet.has(i)){
        temp.push(i);
      }
    }
    const newSet = new ArrSet(temp);
    return newSet;
  }
  //子集
  isSubsetOf(otherSet){
    if(!(otherSet instanceof ArrSet)){
      return false;
    }
    for(let i of this.items){
      if(!otherSet.has(i)){
        return false;
      }
    }
    return true;
  }
}
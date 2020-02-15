//对象的属性是Symbol, 所以不可访问与迭代
const _items = Symbol('_items');
const _count = Symbol('_count');
export class Stack{
  constructor(){
    this[_count] = 0;
    this[_items] = {};
  }
  //方法
  push(el){
    this[_items][this[_count]] = el;
    this[_count]++;
  }
  pop(){
    if(this[_count] === 0) return false;
    let temp = this[_items][this[_count] - 1];
    delete this[_items][this[_count] - 1];
    this[_count]--;
    return temp;
  }
  size(){
    return this[_count];
  }
  isEmpty(){
    return this[_count] === 0;
  }
  peek(){
    if(this.isEmpty()){
      return undefined;
    }
    return this[_items][this[_count]-1];
  }
  clear(){
    this[_items] = {};
    this[_count] = 0;
  }
  //以逗号隔开的字符串
  toString(){
    if(this.isEmpty()) return "";
    let str = `${this[_items][0]}`;
    for(let i=1; i<this[_count]; i++){
      if(this[_items][i] instanceof Array){
        str = `${str}, [${this[_items][i]}]`;
        continue;
      }
      str = `${str}, ${this[_items][i]}`;  //赋值比拼接快
    }
    return str;
  }
}
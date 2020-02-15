const _size = Symbol('_size');
const _items = Symbol('_items');

export class DEqueue{
  constructor(){
    this[_items] = [];
    this[_size] = 0;
  }
  //外部只读size属性
  get size(){
    return this[_size];
  }
  set size(val){
    throw 'size is readonly';
  }
  //队列操作函数支持链式
  addFront(el){
    this[_items].unshift(el);
    this[_size] ++;
    return this;
  }
  addBack(el){
    this[_items].push(el);
    this[_size] ++;
    return this;
  }
  removeFront(){
    if(this.isEmpty()){
      return undefined;
    }
    this[_size] --;
    return this[_items].shift();
  }
  removeBack(){
    if(this.isEmpty()){
      return undefined;
    }
    this[_size] --;
    return this[_items].pop();
  }
  peekFront(){
    if(this.isEmpty()){
      return undefined;
    }
    return this[_items][0];
  }
  peekBack(){
    if(this.isEmpty()){
      return undefined;
    }
    return this[_items][this[_size]-1];
  }
  isEmpty(){
    this[_size] === 0;
  }
  clear(){
    this[_size] = 0;
    this[_items] = [];
    return this;
  }
  toString(){
    return this[_items].toString();
  }
}
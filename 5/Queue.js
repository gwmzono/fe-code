const _size = Symbol('_size');
const _items = Symbol('_items');

export class Queue{
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
  enqueue(el){
    this[_items].push(el);
    this[_size] ++;
  }
  dequeue(){
    if(this.isEmpty()){
      return undefined;
    }
    this[_size] --;
    return this[_items].shift();
  }
  peek(){
    if(this.isEmpty()){
      return undefined;
    }
    return this[_items][0];
  }
  isEmpty(){
    this[_size] === 0;
  }
  clear(){
    this[_size] = 0;
    this[_items] = [];
  }
  toString(){
    return this[_items].toString();
  }
}
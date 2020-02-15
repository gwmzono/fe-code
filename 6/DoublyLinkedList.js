import {DoublyNode} from '../modules/DoublyNode.js';
import {elIsValid, indexIsValid} from '../utils/common.js';
// 继承并不好写, 另外双向链表可以从后向前, 继承单向链表还得重写
// import {LinkedList} from './LinkedList.js';
// import {head} from './LinkedList.js';
// import {size} from './LinkedList.js';

export const tail = Symbol('tail');
export const head = Symbol('head');
export const size = Symbol('size');

//在开头添加
function addHead(node){
  if(node instanceof DoublyNode && this.size > 0){
    node.next = this[head];
    this[head].prev = node;
    this[head] = node;
    this[size]++;
    return true;
  }
  return false;
}

//在末尾添加
function addTail(node){
  if(node instanceof DoublyNode && this.size > 0){
    this[tail].next = node;
    node.prev = this[tail];
    this[tail] = node;
    this[size]++;
    return true;
  }
  return false;
}

//根据索引定位并返回元素
function navigateToIndex(index){
  let temp = (index < this.size - 1 - index)?'head':'tail';
  let current;
  switch(temp){  //定位到索引
    case 'head':
      current = this[head];
      while(index-- > 0){
        current = current.next;
      }
      break;
    case 'tail':
      current = this[tail];
      while(index++ < this.size - 1){
        current = current.prev;
      }
      break;
  }
  return current;
}

//双向链表类
export class DoublyLinkedList{
  constructor(){
    this[head] = undefined;
    this[tail] = undefined;
    this[size] = 0;
  }
  get size(){
    return this[size];
  }
  push(el){
    //参数合法性
    if(!elIsValid(el)){
      return false;
    }
    const node = new DoublyNode(el);
    //如果是空链表
    if(this.size === 0){
      this[head] = node;
      this[tail] = node;
      this[size]++;
      return true;
    }
    //不是空链表
    return addTail.call(this, node);
  }
  insert(el,index){
    //参数合法性
    if(!elIsValid(el)){
      return false;
    }
    if(!indexIsValid(index) || index > this.size){
      return false;
    }
    const node = new DoublyNode(el);
    //旧元素往后排, 新元素占据索引位置
    //开头插入
    if(index === 0){
      addHead.call(this, node);
      return this.toString();
    }
    //末尾插入
    if(index === this.size){
      addTail.call(this, node);
      return this.toString();
    }
    //中间插入
    let current = navigateToIndex.call(this, index);
    let temp = current.prev;
    temp.next = node;
    node.prev = temp;
    current.prev = node;
    node.next = current;
    this[size]++;
    return this.toString();
  }
  removeByIndex(index){
    if(!indexIsValid(index) || index > this.size - 1){
      return false;
    }
    //开头删
    if(index === 0){
      this[head] = this[head].next;
      this[head].prev = undefined;
      this[size]--;
      return this.toString();
    }
    //末尾删
    if(index === this.size - 1){
      this[tail] = this[tail].prev;
      this[tail].next = undefined;
      this[size]--;
      return this.toString();
    }
    //中间删
    let current = navigateToIndex.call(this, index);
    let before = current.prev;
    let after = current.next;
    current.prev = undefined;
    current.next = undefined;
    before.next = after;
    after.prev = before;
    this[size]--;
    return this.toString();
  }
  indexOf(el){
    if(!elIsValid(el)){
      return -1;
    }
    if(this.size === 0){
      return -1;
    }
    let current = this[head];
    let index = 0;
    while(current !== undefined){
      if(current.value === el){
        return index;
      }
      current = current.next;
      index++;
    }
    return -1;
  }
  getHead(){
    return this[head];
  }
  getTail(){
    return this[tail];
  }
  clear(){
    this[head] = undefined;
    this[tail] = undefined;
    this[size] = 0;
    return true;
  }
  toString(){
    if(this.size === 0){
      return '';
    }
    let str = this[head].value.toString();
    let current = this[head].next;
    while(current !== undefined){
      str += ` -> ${current.value}`;
      current = current.next;
    }
    return str;
  }
  toReverseString(){
    if(this.size === 0){
      return '';
    }
    let str = this[tail].value.toString();
    let current = this[tail].prev;
    while(current !== undefined){
      str += ` -> ${current.value}`;
      current = current.prev;
    }
    return str;
  }
}
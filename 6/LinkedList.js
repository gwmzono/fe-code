//链表类, 能够新增 插入 删除元素 清空 转字符串
//插入和删除操作需要before和current, 需要排除开头再迭代
import {Node} from '../modules/Node.js';

export const head = Symbol('head');
export const size = Symbol('size');
//单向链表
export class LinkedList{
  constructor(){
    this[head] = undefined;
    this[size] = 0;
  }
  get size(){
    return this[size];
  }
  getHead(){
    return this[head];
  }
  getTail(){
    if(this.size === 0){
      return undefined;
    }
    let current = this[head];
    while(current.next !== undefined){
      current = current.next;
    }
    return current;
  }
  push(el){
    //检查参数
    if(el === undefined || el === null){
      return false;
    }
    const node = new Node(el);
    //空链表
    if(this.size === 0){
      this[head] = node;
      this[size]++;
      return true;
    }
    //current定位到末尾
    let current = this[head];
    while(current.next !== undefined){
      current = current.next;
    }
    current.next = node;
    this[size]++;
    return true;
  }
  insert(el,index){
    //参数检测
    if(el === undefined || el === null){
      return false;
    }
    if(index > this.size-1 || index < 0){
      return false;
    }
    //定位到指定位置
    let before;
    let current = this[head];
    const node = new Node(el);
    //开头插入
    if(index === 0){
      this[head] = node;
      this[size]++;
      node.next = current;
      return true;
    }
    //不是开头
    while(index-- > 0){
      before = current;
      current = current.next;
    }
    before.next = node;
    node.next = current;
    this[size]++;
    return true;
  }
  getByIndex(index){
    //超出索引范围
    if(index > this.size-1 || index < 0){
      return false;
    }
    let current = this[head];
    while(index-- > 0){
      current = current.next;
    }
    return current.value;
  }
  indexOf(el){
    if(el === undefined || el === null){
      return false;
    }
    //空链表
    if(this.size === 0){
      return -1;
    }
    let current = this[head];
    let index = 0;
    while(current !== undefined){
      if(current.value === el){
        return index;
      }
      index++;
      current = current.next;
    }
    //循环未找到
    return -1;
  }
  delete(el){
    if(el === undefined || el === null){
      return false;
    }
    let before;
    let current = this[head];
    let flag = false;
    //如果是空链表
    if(this.size === 0){
      return false;
    }
    //如果是开头
    if(current.value === el){
      this[head] = current.next;
      this[size]--;
      return true;
    }
    //不是开头
    while(current !== undefined){
      if(current.value === el){
        before.next = current.next;
        this[size]--;
        return true;
      }
      before = current;
      current = current.next;
    }
    //循环中未找到
    return false;
  }
  deleteByIndex(index){
    if(index > this.size-1 || index < 0){
      return false;
    }
    let before;
    let current = this[head];
    //删开头
    if(index === 0){
      this[head] = current.next;
      this[size]--;
      return true;
    }
    //不是开头
    while(index-- > 0){
      before = current;
      current = current.next;
    }
    before.next = current.next;
    this[size]--;
    return true;
  }
  isEmpty(){
    return this[size] === 0;
  }
  clear(){
    delete this[head];
    this[size] = 0;
    return true;
  }
  toString(){
    if(this.size === 0){
      return '';
    }
    let str = this[head].value.toString();
    let current = this[head].next;  //0位置不参与迭代, 最后拼接
    while(current !== undefined && current !== this[head]){
      str += ` -> ${current.value}`;
      current = current.next;
    }
    return str;
  }
}
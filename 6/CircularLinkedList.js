//用继承比重写还麻烦, 因为循环链表末尾不是undefined, 用父类方法老是卡死
import {LinkedList,head,size} from './LinkedList.js';
import {elIsValid, indexIsValid} from '../utils/common.js';
import {Node} from '../modules/Node.js';

//获取尾部元素并返回
function getTail(){
  if(this.size === 0){
    return false;
  }
  let current = this[head];
  while(current.next !== undefined && current.next !== this[head]){
    current = current.next;
  }
  return current;
}

//循环单向链表
export class CircularLinkedList extends LinkedList{
  constructor(){
    super();  //this[head];this[size]
  }
  //get size(){}
  push(el){
    if(!elIsValid(el)){
      return false;
    }
    const node = new Node(el);
    if(this.size === 0){
      this[head] = node;
      node.next = this[head];
      this[size]++;
      return true;
    }
    let tail = getTail.call(this);
    tail.next = node;
    node.next = this[head];
    this[size]++;
    return true;
  }
  insert(el,index){
    if(!indexIsValid(index) || !elIsValid(el) || index > this.size){
      return false;
    }
    //开头插入
    if(index === 0){
      const node = new Node(el);
      let tail = getTail.call(this);
      node.next = this[head];
      this[head] = node;
      tail.next = node;
      this[size]++;
      return true;
    }
    //末尾插入
    if(index === this.size){
      const node = new Node(el);
      let tail = getTail.call(this);
      tail.next = node;
      node.next = this[head];
      this[size]++;
      return true;
    }
    //中间插入
    return super.insert(el,index);
  }
  getByIndex(index){
    if(!indexIsValid(index) || index > this.size-1){
      return false;
    }
    let current = this[head];
    while(index-- > 0){
      current = current.next;
    }
    return current.value;
  }
  //完全重写的, 轻松多了
  indexOf(el){
    if(!elIsValid(el)){
      return -1;
    }
    if(this.size === 0){
      return -1;
    }
    if(this[head].value === el){
      return 0;
    }
    let current = this[head].next;
    let index = 1;
    while(current !== this[head]){
      if(current.value === el){
        return index;
      }
      index++;
      current = current.next;
    }
    return -1;
  }
  delete(el){
    let index = this.indexOf(el);
    if(index === -1){
      return false;
    }
    return this.deleteByIndex(index);
  }
  deleteByIndex(index){
    if(!indexIsValid(index) || index > this.size - 1){
      return false;
    }
    //如果删除的是头部, 需要额外特别处理, 因为循环末尾指向头部
    if(index === 0){
      if(this.size === 1){
        this[head] = undefined;
        this[size] = 0;
        return true;
      }
      const tail = getTail.call(this);
      this[head] = this[head].next;
      tail.next = this[head];
      this[size]--;
      return true;
    }
    return super.deleteByIndex(index);
  }
  // clear(){}
  // toString(){}
}
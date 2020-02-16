import {LinkedList} from '../6/LinkedList.js';
import {djb2HashCode} from '../utils/common.js';

//根据键查找, 返回Node节点(可配置成索引), 没找到返回undefined
function getByKey(key, returnIndex=false){
  let hash = djb2HashCode(key);
  let list = this.table[hash];
  let current = list.getHead();
  let index = 0;
  while(current !== undefined){
    if(current.key === key){
      return returnIndex ? index : current;
    }
    current = current.next;
    index++;
  }
  return undefined;
}

//地址 = hash(值), 查询时能够根据值直接算出地址
export class HashMap{
  constructor(){
    this.table = {};
  }
  has(key){
    let hash = djb2HashCode(key);
    if(hash === false){
      return false;
    }
    if(this.table[hash] === undefined){
      return false;
    }
    let node = getByKey.call(this, key);
    return node===undefined ? false : true;
  }
  
  //找到返回值, 没找到返回undefined
  get(key){
    let hash = djb2HashCode(key);
    if(this.table[hash] === undefined){
      return undefined;
    }
    let temp = getByKey.call(this, key);
    return temp===undefined ? undefined : temp.value;
  }
  
  //为防止键名冲突, 用链表储存
  set(key, value=undefined){
    let hash = djb2HashCode(key);
    if(hash === false){
      return false;
    }
    if(value===undefined){
      return false;
    }
    //未定义
    if(this.table[hash] === undefined){
      let temp = new LinkedList();
      temp.push(value);
      temp.getTail().key = key;
      this.table[hash] = temp;
      return true;
    }
    //已有定义
    let node = getByKey.call(this, key);
    if(node){
      node.value = value;
      return true;
    }
    //新冲突
    let list = this.table[hash];
    list.push(value);
    list.getTail().key = key;
    return true;
  }
  delete(key){
    let hash = djb2HashCode(key);
    if(this.table[hash] === undefined){
      return false;
    }
    let index = getByKey.call(this, key, true);
    if(index === undefined){
      return false;
    }
    this.table[hash].deleteByIndex(index);
    return true;
  }
}
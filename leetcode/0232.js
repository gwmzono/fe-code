//implement-queue-using-stacks

function popRecursion(){
  if(this.size > 1){
    let temp = this.list.pop();
    popRecursion.call(this);
    this.list.push(temp);
  }else{
    this.top = this.list.pop();
  }
}

import {Stack} from '../4/stack-array.js';
export class test{
  constructor(){
    this.list = new Stack();
  }
  get size(){
    return this.list.size;
  }
  
  push(el){
    this.list.push(el);
  }
  
  //pop采用递归的方式获取头元素, 再将元素重新压入
  pop(){
    if(this.size === 0){
      return undefined;
    }
    if(this.size === 1){
      return this.list.pop();
    }
    popRecursion.call(this);
    return this.top;
  }
}
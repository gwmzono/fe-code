import {Node} from './Node.js';

//属性有: prev value next
export class DoublyNode extends Node{
  constructor(el){
    super(el);
    this.prev = undefined;  //增加一个prev代表前一个节点
  }
}
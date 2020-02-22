import {defaultCompare} from '../modules/defaultCompare.js';

//二叉堆首先是完全二叉树, 即只允许最后两层有叶节点, 且叶节点要尽量在左边
//最大堆, 最大值在最上面, 子节点值都必须比父节点值小
export class MaxHeap{
  constructor(fn = defaultCompare){
    this.fn = fn;
    //用数组也能存储树结构, 如果父节点位置是i, 那么左侧子节点在2i+1, 右侧子节点在2i+2
    this.heap = [];
  }
  get size(){
    return this.heap.length;
  }
  getLeftIndex(i){
    return 2*i+1;
  }
  getRightIndex(i){
    return 2*i+2;
  }
  getParentIndex(i) {
    if (i < 1) {
      return undefined;
    }
    return Math.floor((i - 1) / 2);
  }
  
  //插入新值, 返回boolean
  insert(value){
    if(value === undefined || value === null){
      return false;
    }
    this.heap.push(value);
    this.bubbleUp(this.heap.length - 1);
    return true;
  }
  
  //移除并返回最大值(最大堆)
  extract(){
    if (this.size === 0) {
      return undefined;
    }
    if (this.size === 1) {
      return this.heap.shift();
    }
    let temp = this.heap.shift();
    this.bubbleDown(0);
    return temp;
  }
  
  //返回最大值
  findMax(){
    return this.size === 0 ? undefined : this.heap[0];
  }
  
  //将新加入的元素向上走, 一直到小于父节点
  bubbleUp(i){
    let parentIndex = this.getParentIndex(i);
    if(parentIndex === undefined){
      return;
    }
    if(this.fn(this.heap[parentIndex], this.heap[i]) === -1){
      let temp = this.heap[parentIndex];
      this.heap[parentIndex] = this.heap[i];
      this.heap[i] = temp;
      this.bubbleUp(parentIndex);
    }
  }
  
  //重新堆化
  bubbleDown(index){
    //递归终止条件
    if(index >= this.size){
      return;
    }
    let minIndex = index;
    let left = this.getLeftIndex(index);
    let right = this.getRightIndex(index);
    //寻找最大元素对应的索引
    if(left < this.size){
      if(this.fn(this.heap[minIndex], this.heap[left]) === -1){
        minIndex = left;
      }
    }
    if(right < this.size){
      if(this.fn(this.heap[minIndex], this.heap[right]) === -1){
        minIndex = right;
      }
    }
    //如果不是父节点, 交换
    if(index !== minIndex){
      let temp = this.heap[index];
      this.heap[index] = this.heap[minIndex];
      this.heap[minIndex] = temp;
    }
    this.bubbleDown(left);
    this.bubbleDown(right);
  }
}
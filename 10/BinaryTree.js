import {TreeNode} from '../modules/TreeNode.js';//el left right
import {defaultCompare} from '../modules/defaultCompare.js';

//小于向左, 大于等于向右
function insertNode(node, el, fn){
  if(fn(el, node.el) === -1){
    if(node.left === undefined){
      node.left = new TreeNode(el);
    }else{
      insertNode(node.left, el, fn);
    }
  }else{
    if(node.right === undefined){
      node.right = new TreeNode(el);
    }else{
      insertNode(node.right, el, fn);
    }
  }
}
//中序遍历, 因为回调在中间, 所以从小到大执行
function inOrderTraverseNode(node, callback){
  if(node !== undefined){
    inOrderTraverseNode(node.left, callback);
    callback(node.el);
    inOrderTraverseNode(node.right, callback);
  }
}
//先序遍历, 有左边就打印左边, 没有才打印右边
function preOrderTraverseNode(node, callback){
  if(node !== undefined){
    callback(node.el);
    inOrderTraverseNode(node.left, callback);
    inOrderTraverseNode(node.right, callback);
  }
}
//后序遍历
function postOrderTraverseNode(node, callback){
  if(node !== undefined){
    inOrderTraverseNode(node.left, callback);
    inOrderTraverseNode(node.right, callback);
    callback(node.el);
  }
}

function minNode(node){
  if(node !== undefined){
    if(node.left === undefined){
      return node.el;
    }else{
      return minNode(node.left);
    }
  }
}
//最大值
function maxNode(node){
  if(node !== undefined){
    if(node.right === undefined){
      return node.el;
    }else{
      return maxNode(node.right);
    }
  }
}
//搜索node 递归有返回值时比较麻烦
function searchNode(node, el){
  if(node !== undefined){
    if(this.compareFn(el, node.el) === 0){
      return true;
    }
    else if(this.compareFn(el, node.el) === -1){
      return searchNode.call(this, node.left, el);
    }
    else{
      return searchNode.call(this, node.right, el);
    }
  }
  return false;
}

//还是书上的设计最巧妙
function deleteNode(node, el, fn){
  if(node===undefined){
    return undefined;
  }
  if(fn(el, node.el) === -1){
    node.left = deleteNode(node.left, el, fn);
    return node;
  }
  else if(fn(el, node.el) === 1){
    node.right = deleteNode(node.right, el, fn);
    return node;
  }
  else{//找到了
    if(node.left === undefined && node.right === undefined){
      return undefined;
    }
    else if(node.left === undefined){
      return node.right;
    }
    else if(node.right === undefined){
      return node.left;
    }
    else{
      let temp = minNode(node.right);
      node.el = temp;
      node.right = deleteNode(node.right, temp, fn);
      return node;
    }
  }
}

//二叉搜索数(BST)
export class BinaryTree{
  constructor(compareFn = defaultCompare){
    this.root = undefined;
    this.compareFn = compareFn;//-1 0 1 如果比较的不是数字需要自定义函数
  }
  insert(el){
    if(this.root === undefined){
      this.root = new TreeNode(el);
    }else{
      insertNode(this.root, el, this.compareFn);
    }
  }
  search(el){
    return searchNode.call(this, this.root, el);
  }
  //中序遍历
  inOrderTraverse(callback){
    if(typeof callback !== 'function'){
      console.log('callback is required');
      return false;
    }
    inOrderTraverseNode(this.root, callback);
  }
  //先序遍历
  preOrderTraverse(callback){
    if(typeof callback !== 'function'){
      console.log('callback is required');
      return false;
    }
    preOrderTraverseNode(this.root, callback);
  }
  //后序遍历
  postOrderTraverse(callback){
    if(typeof callback !== 'function'){
      console.log('callback is required');
      return false;
    }
    postOrderTraverseNode(this.root, callback);
  }
  //返回最小值, 没有返回undefined
  min(){
    if(this.root === undefined){
      return undefined;
    }
    let current = this.root;
    while(current.left !== undefined){
      current = current.left;
    }
    return current.el;
  }
  //返回最大值, 没有返回undefined
  max(){
    return maxNode(this.root);
  }
  //移除一个节点, 比较复杂
  delete(el){
    this.root = deleteNode(this.root, el, this.compareFn);
  }
}
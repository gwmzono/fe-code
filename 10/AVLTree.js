import {BinaryTree} from './BinaryTree.js';
import {defaultCompare} from '../modules/defaultCompare.js'


export class AVLTree extends BinaryTree{
  constructor(fn = defaultCompare){
    super(fn);  //root  compareFn
  }
  insert(el){}
  delete(el){}
}
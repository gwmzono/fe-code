/*
**  maximum-depth-of-binary-tree
**  返回二叉树的最大深度, 用10章的BinaryTree类可以做例子
**  @param  {TreeNode}  node
**  @return {Number}
*/



export function test(node){
  if(node === undefined){
    return 0;
  }
  if(node.left === undefined && node.right === undefined){
    return 1;
  }
  return Math.max(test(node.left), test(node.right))+1;
}
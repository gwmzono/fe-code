/*
**  invert-binary-tree
**  将树左右颠倒(就像是以中间为对称轴翻转180度)
*/


//递归法
export function test(head){
  if(head.left === undefined && head.right === undefined){
    return head;
  }
  else if(head.left === undefined){
    head.left = head.right;
    head.right = undefined;
    test(head.left);
  }
  else if(head.right === undefined){
    head.right = head.left;
    head.left = undefined;
    test(head.right);
  }else{
    let temp = head.left;
    head.left = head.right;
    head.right = temp;
    test(head.left);
    test(head.right);
  }
}
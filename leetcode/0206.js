//reverse-linked-list
//将输入的链表翻转并返回

//迭代法
export function test(head){
  if(!head || !head.next){
    return head;
  }
  let current = head;
  let pre = undefined;
  while(node){
    let next = current.next;
    current.next = pre;
    pre = current;
    current = next;
  }
  return pre;
}
// import {LinkedList} from './6/LinkedList.js';
// window.aa = new LinkedList();

// import {DoublyLinkedList} from './6/DoublyLinkedList.js';
// window.aa = new DoublyLinkedList();

// import {CircularLinkedList} from './6/CircularLinkedList.js';
// window.aa = new CircularLinkedList();

// aa.push(0);
// aa.push(1);
// aa.push(2);
// aa.push(3);
// aa.push(4);

// import {ArrSet} from './7/ArrSet.js';
// import {MySet} from './7/MySet.js';

// window.aa = new ArrSet('123456321');
// window.aa = new MySet('12345');
// window.bb = new MySet('34567');
// window.cc = new MySet('1234567');

// import {ObjMap} from './8/ObjMap.js';
// import {HashMap} from './8/HashMap.js'

// window.aa = new ObjMap([['a',1,2,3],['b',2]]);
// window.aa = new HashMap();

import {BinaryTree} from './10/BinaryTree.js';

window.aa = new BinaryTree()
for(let i = 0; i < 10; i++){
  const num = Math.round(Math.random()*30);
  aa.insert(num);
}

//第6章, 链表
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

//第7章, 集合
// import {ArrSet} from './7/ArrSet.js';
// import {MySet} from './7/MySet.js';
// window.aa = new ArrSet('123456321');
// window.aa = new MySet('12345');
// window.bb = new MySet('34567');
// window.cc = new MySet('1234567');

//第8章, 字典
// import {ObjMap} from './8/ObjMap.js';
// import {HashMap} from './8/HashMap.js'
// window.aa = new ObjMap([['a',1,2,3],['b',2]]);
// window.aa = new HashMap();

// 第10章, 二叉树
// import {BinaryTree} from './10/BinaryTree.js';
// window.aa = new BinaryTree()
// for(let i = 0; i < 6; i++){
//   const num = Math.round(Math.random()*30);
//   aa.insert(num);
// }

// 第11章, 二叉堆
// import {MinHeap} from './11/MinHeap.js';
// import {MaxHeap} from './11/MaxHeap.js';
// window.aa = new MaxHeap();

// 第12章, 图, 博大精深
// import {Graph} from './12/Graph.js';
// window.aa = new Graph();
// aa.addEdge('a', 'b');
// aa.addEdge('a', 'e');
// aa.addEdge('a', 'c');
// aa.addEdge('b', 'g');
// aa.addEdge('e', 'i');
// aa.addEdge('c', 'g');
// aa.addEdge('c', 'i');
// aa.addEdge('g', 'k');
// aa.addEdge('i', 'k');
// aa.addEdge('m', 'k');
// import {Dijkstra} from './12/Dijkstra.js';
// import {floydWarshall} from './12/floydWarshall.js';
// const graph = [ [0, 2, 4, 0, 0, 0],
//                 [0, 0, 1, 4, 2, 0],
//                 [0, 0, 0, 0, 3, 0],
//                 [0, 0, 0, 0, 0, 2],
//                 [0, 0, 0, 3, 0, 2],
//                 [0, 0, 0, 0, 0, 0] ];
// console.log(floydWarshall(graph));

//第13章, 排序算法
// import {bubbleSort} from './13/bubbleSort.js';
// import {selectionSort} from './13/selectionSort.js'
// import {insertionSort} from './13/insertionSort.js';
// import {mergeSort} from './13/mergeSort.js';
// import {quickSort} from './13/quickSort.js';
// import {countingSort} from './13/countingSort.js';
// import {binarySearch} from './13/binarySearch.js';
// import {shuffle} from './13/shuffle.js';
// let arr = [2,10,30,7,6,14,28,29,13,11,5,23,26,1,9];
// let arr = [];
// for(let i = 0; i < 2000000; i++){
//   arr.push(Math.round(Math.random()*100));
// }
// console.log(quickSort(arr));
// console.log(arr);
// console.log(shuffle(arr));
// console.log(arr.sort(function(a,b){return a<b?1:-1;}));

//第14章
// import {binarySearch} from './14/binarySearch.js';
// import {minCoin} from './14/minCoin.js';
import {maxValueBag} from './14/maxValueBag.js';
window.aa = maxValueBag;

//LeetCode
// import {test} from './leetcode/';
// import {test} from './leetcode/0020.js';
// import {test} from './leetcode/0026.js';
// import {test} from './leetcode/0226.js';

// window.test = test;
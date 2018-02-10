/*
* For our second data structure, we're going to implement a LinkedList. LinkedList is made of a bunch of nodes that point to the next one in the list. Every node in a LinkedLists has two properties, the value of whatever is being store and a pointer to the next node in the list.

LinkedLists have their ups and downs. On one hand, adding and removing is a breeze: you just have the change the next pointer on the previous node and that's it. Getting is a pain though: if .get is called you have to loop through the nodes until you get to the right node. And that's the tradeoff between LinkedList and ArrayList: LinkedList's adds and deletes are O(1) but the gets are O(n); ArrayList's adds and deletes are O(n) but the gets are O(1). So which one is better? It depends! If you're doing a bunch of adds and deletes but not many gets, stick to LinkedLists. Doing a bunch of gets? ArrayLists. Both? You decide!

Let's dissect a delete.


value: [a]   [b]   [c]   [d]
next:  [ ]-> [ ]-> [ ]-> [ ]-> null

-> delete is called on index 2 (value 'c')
-> grab the head (value 'a')
-> loop through the nexts until you get the index
   before the one to be deleted (value 'b')
-> change the the next of index 1 to be the next of index 2
-> decrement length
-> return the value of the deleted node

*/

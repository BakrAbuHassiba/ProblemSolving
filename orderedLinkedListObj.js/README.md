# 📌 Task: OrderedLinkedListObject

## 🧠 Description

This JavaScript object simulates a custom **ordered linked list behavior** using an internal array of objects (each with a `val` property). It enforces order constraints when inserting or removing elements, ensuring the values stay sorted in ascending order.

## 🚀 Main Features

- `enQueueObj(obj)`  
  ➤ Adds `obj` to the beginning only if it's less than the first element.

- `pushObj(obj)`  
  ➤ Adds `obj` to the end only if it's greater than the last element.

- `insertObj(index, obj)`  
  ➤ Inserts `obj` at a specified index only if it fits in order.

- `popObj()`  
  ➤ Removes the last object in the list.

- `deQueueObj()`  
  ➤ Removes the first object in the list.

- `removeObj(val)`  
  ➤ Removes an object with the specified value.

- `displayObjs()`  
  ➤ Logs all current values in the list with their indexes.

## ⚙️ Initial Data

```js
data: [{ val: 1 }, { val: 3 }, { val: 4 }, { val: 5 }]

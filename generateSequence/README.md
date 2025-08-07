# 🔢 Custom Sequence Structure in JavaScript

This project implements a **custom sequence object** using constructor functions, enabling you to generate a numeric sequence and manipulate it like a queue or stack while enforcing strict sequence rules.

---

## 📌 Features

- Generate an initial sequence from `start` to `end` with a custom `step`
- Prevent duplicates
- Enforce proper sequence order for pushing and enqueuing values
- Provide utility methods similar to stack and queue:
  - `push(value)`
  - `enQueue(value)`
  - `pop()`
  - `dequeue()`

---

## 🚀 Usage Example

```js
var seq1 = new sequence(0, 10, 2);
// Initializes: [0, 2, 4, 6, 8, 10]

seq1.push(12); // ✅ Adds to end → [0, 2, 4, 6, 8, 10, 12]
seq1.enQueue(-2); // ✅ Adds to start → [-2, 0, 2, 4, 6, 8, 10, 12]
seq1.dequeue(); // ✅ Removes from start → [0, 2, 4, 6, 8, 10, 12]
seq1.pop(); // ✅ Removes from end → [0, 2, 4, 6, 8, 10]
```

# 📌 Task: TaskManagerApp

## 🧠 Description

This JavaScript project implements a **simple task management system**. It allows users to add, complete, and delete tasks using a visually styled list built entirely with vanilla JS and the DOM API.

## 🚀 Main Features

- `Add Task`  
  ➤ Adds a new task to the list if the input is not empty.

- `✔ Done Button`  
  ➤ Marks the task as `"done"` and updates the background and text color accordingly.

- `✖ Delete Button`  
  ➤ Removes the selected task from the list.

- `displayTasks()`  
  ➤ Dynamically updates the DOM to reflect the current state of all tasks in the array.

## 📂 Data Structure

The task list is stored in an array called `tasks`, where each task is an object:

```js
{ name: "Task name", status: "pending" | "done" }

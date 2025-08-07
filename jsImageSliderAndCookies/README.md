# 🖼️ Image Slider + 🍪 Cookie Utilities

This project showcases two mini JavaScript exercises:

1. **Image Slider** powered by images fetched from an external API.
2. **Cookie Utilities** for setting, getting, and checking cookies in the browser.

---

## 🖼️ Part 1: Image Slider with API Data

### 📌 Description

An image slider that pulls product images from [FakeStoreAPI](https://fakestoreapi.com/products) and allows user control through:

- `Next` and `Previous` buttons
- `Play` and `Stop` slider functionality
- Speed control: 1x, 2x, 3x

### 🚀 Features

- Images fetched via `XMLHttpRequest`
- Dynamic DOM manipulation
- Auto-play with configurable intervals
- Buttons to navigate or control speed manually

### 🛠️ How It Works

- Images are fetched and stored in an array
- A timer updates the `src` of an `<img>` element
- Buttons reset the interval for different behavior (e.g., speed change)

---

## 🍪 Part 2: Cookie Utilities

### 📌 Description

Basic utility functions for managing cookies manually using JavaScript.

### ✅ Functions

- `setCookies(name, value, domain)`
- `getCookie(key)`
- `checkCookies(key)`

### 🧪 Example

```js
setCookies("user", "admin", "127.0.0.1");
checkCookies("user"); // → Found: ["admin"]
```

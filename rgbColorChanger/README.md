# Lab: RGB Text Color Controller

## 📌 Description

This lab demonstrates dynamic color manipulation of a text element using RGB values. It uses three input fields representing Red, Green, and Blue color components. As the user adjusts the inputs, the text color updates in real time.

## ✅ Features

- Real-time RGB color changes on text
- Uses input sliders or number inputs to control each RGB component
- Changes the `style.color` of a target `div` using `rgb(r, g, b)` format
- Event-driven UI using `input` event

## 🧠 Concepts Covered

- DOM manipulation
- Event handling with `addEventListener`
- Accessing and using input values dynamically
- RGB color model

## ⚙️ How It Works

1. Listens for input events on three RGB inputs.
2. Reads the values of red, green, and blue.
3. Combines them into a valid CSS RGB string.
4. Applies the color to the target element (`div1`).

## 📁 Files

- `index.html`: Contains the structure with input fields and the colored text.
- `script.js`: Contains the JavaScript logic for color control.

## 🧪 Example

If the user enters:

- Red: 255
- Green: 0
- Blue: 0

➡️ The text becomes pure red.

## 🚀 Run

Open `index.html` in a browser and start adjusting the RGB sliders or input fields to see the color change live.

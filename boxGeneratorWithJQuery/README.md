# Box Generator with jQuery

## Description
This project demonstrates how to use **jQuery events** (`hover` and `click`) to create an interactive color-changing box generator.  
When you hover over the box, it temporarily changes its color, and when you click it, it creates a clone of itself with the next color in sequence.

## Features
- **Hover effect**: Temporarily changes the box’s background color to the next color in the list.
- **Click to clone**: Generates a new box with the next color.
- **Color cycling**: Cycles through an array of colors (`red → blue → green → orange → red`).
- Fully reusable and dynamic thanks to **jQuery event binding**.

## Technologies Used
- **HTML** – Structure of the page.
- **CSS** – Styling for box colors.
- **JavaScript** – Interaction logic.
- **jQuery** – DOM manipulation and event handling.

## How It Works
1. The box starts with a **red** background.
2. On **hover**:
   - The box changes to the next color in the sequence.
   - On mouse leave, it reverts to its original color.
3. On **click**:
   - The box is cloned.
   - The new box is assigned the next color in the sequence.
4. This process can be repeated to generate multiple colored boxes.

## How to Run
1. Save the code in an `.html` file.
2. Download and include **jQuery** (or use a CDN).
3. Open the file in your browser and interact with the box.

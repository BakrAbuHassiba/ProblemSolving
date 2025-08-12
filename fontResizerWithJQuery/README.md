# Font Resizer with jQuery

## Description
A simple interactive font size controller built with **HTML**, **CSS**, **JavaScript**, and **jQuery**.  
Users can increase or decrease the text size using two buttons, with a set **minimum** and **maximum** limit.

## Features
- **Increase Font Size**: Adds 10px to the current font size (up to 50px max).
- **Decrease Font Size**: Subtracts 5px from the current font size (down to 15px min).
- Font size limits are enforced to prevent text from becoming too small or too large.
- Minimal and clean user interface.

## Technologies Used
- **HTML** – Page structure and elements.
- **CSS** – Styling and layout.
- **JavaScript** – Font resizing logic.
- **jQuery** – Simplified DOM manipulation and event handling.

## How It Works
1. The page displays a message: `"Hello, Open Sourcians"`.
2. Clicking the **`+`** button increases the font size by **10px** until it reaches a maximum of **50px**.
3. Clicking the **`-`** button decreases the font size by **5px** until it reaches a minimum of **15px**.
4. When the limit is reached, a console message (`"Max Font"` or `"Min Font"`) is displayed.

## Example Interaction
- **Start Size**: Default browser font size (e.g., 16px).
- **Increase**: `16px → 26px → 36px → 46px → 50px` (max limit).
- **Decrease**: Works in reverse until **15px** (min limit).

## Learning Goals
- Using jQuery’s `.click()` event handler.
- Reading and changing CSS values dynamically.
- Parsing numeric CSS values with `parseInt()`.
- Enforcing UI constraints with `if` conditions.

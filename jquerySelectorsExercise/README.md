# jQuery Selectors & DOM Manipulation

## Description

This project demonstrates the use of **jQuery selectors** and **DOM manipulation** techniques through a series of practical examples.  
It is designed as a learning exercise to practice selecting HTML elements in different ways and applying changes to their style, content, and attributes.

## Features & Tasks

1. **Styling Div and Paragraph Elements**

   - Loops through all `<div>` elements, setting background colors based on their class names.
   - Loops through all `<p>` elements inside `.container1` and applies text colors based on their class names.

2. **Anchor Link Manipulation**

   - Selects links based on URL patterns:
     - Contains `"google"` → Changes text to `"Google"`.
     - Ends with `.org` → Changes text to `"IEEE"`.
     - Starts with `https` → Changes text to `"Facebook"`.
     - All `http` links → Appends `" Official Website"`.

3. **Figure & Image Update**

   - Modifies the 3rd figure in `.container3`:
     - Updates figcaption text to `"fig.3 - Orange Juice"`.
     - Changes the image source to `img/orange.png`.

4. **Table Styling**

   - Colors the name `"Ahmed"` in blue.
   - Applies pink background to odd-indexed table cells.
   - Makes the second cell of the last row bold.

5. **List Item Styling**
   - Italicizes the 2nd top-level `<li>` in `.container5`.
   - Changes the text color of the item following the 2nd sub-list item to red.

## Technologies Used

- **HTML5** – Page structure
- **CSS3** – Basic styling
- **JavaScript (jQuery)** – DOM manipulation

## Learning Goals

- Practice using **jQuery selectors** (`element`, `.class`, `#id`, attribute selectors, pseudo-selectors).
- Modify CSS dynamically with `.css()`.
- Update text and attributes with `.text()` and `.attr()`.
- Traverse and target elements using `.each()`, `.next()`, and child selectors.

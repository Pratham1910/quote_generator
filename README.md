# Random Quote Generator

## 📌 Overview
This is a simple **Random Quote Generator** built using **HTML**, **CSS**, and **JavaScript**. It displays a random quote each time the user clicks the "New Quote" button, and allows the user to copy the quote to their clipboard.

## 🚀 Features
- Display a random quote from a predefined list
- Show quote along with its author
- Copy quote text to clipboard with a click
- Alert user when quote is successfully copied

## 🛠️ Technologies Used
- HTML
- CSS
- JavaScript

## 📂 How to Use
1. Click the **New Quote** button to display a new quote.
2. Click the **Copy** button to copy the current quote to your clipboard.

## 🧠 JavaScript Logic Summary
- Select DOM elements using `document.querySelector()`
- Store quotes in an array of objects
- Use `Math.random()` to select a random quote
- Use `navigator.clipboard.writeText()` to copy quote text

## 📁 File Structure
```
index.html
style.css
script.js
```

## 🔒 Notes
- Uses `alert()` to notify user when copying is successful or fails
- Uses `innerText` to dynamically update quote and author



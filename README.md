# AWS Student Community Day — Enhanced Website 🚀

Forked from [vidhiisaxena/AWS_Student_Community_Day](https://github.com/vidhiisaxena/AWS_Student_Community_Day)

## ✅ Task Implemented: Task C — Smart Search (Real-time Filtering)

### What it does:
A search bar above the Speakers section filters 
speaker cards instantly as the user types.

### Logic:
- Used `addEventListener('input')` to detect keystrokes
- Used `querySelectorAll('.speaker-card')` to get all cards
- Used `forEach` to loop through each card
- Matched query against speaker **name**, **topic**, and **role**
- Cards that don't match are hidden with `display:none`

## 🐛 Bugs Found & Fixed
- `perLoader.css` filename mismatch — fixed spelling
- `spearker_card.js` missing file reference — removed broken link
- `preloader.js` case sensitivity issue — fixed to `preLoader.js`

## 🌐 Live Demo
[Live Site](https://adissv.github.io/AWS_Student_Community_Day)

## 🔗 Repository
[GitHub Repo](https://github.com/Adissv/AWS_Student_Community_Day)

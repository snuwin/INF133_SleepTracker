# 💤 SleepTracker

## Overview
**SleepTracker** is a cross-platform mobile app developed using Angular and Ionic. It allows users to log and visualize their overnight sleep patterns and daytime sleepiness using the Stanford Sleepiness Scale. Designed with usability, mobile responsiveness, and data persistence in mind, this app supports both iOS and Android platforms.

🔗 [Demo Video (YouTube)](https://youtube.com/shorts/7ApZ5T_mPeg?feature=share)

---

## Tech Stack
Angular, Ionic Framework, Capacitor, Ionic Storage, TypeScript, HTML/CSS

---

## Features
- ⏰ **Overnight Sleep Logging**  
  Log start and end times with optional notes via time pickers.
- 😴 **Daytime Sleepiness Tracking**  
  Select sleepiness level using the Stanford Sleepiness Scale dropdown.
- 📊 **Data Viewing**  
  view logs in an organized, card-style layout from the "View Data" tab.
- 💾 **Persistent Local Storage**  
  All sleep data is saved on-device using Ionic Storage, allowing data retension after app refresh.
- 🎨 **Good Mobile Design Principles**
  Dark mode support, consistent minimalist UI, responsive layout, and accessibility features (ex: Uh-Oh Buttons)

---

## 🧠 Design Decisions & UX
- **User Persona:** Focused on students and professionals who want a quick way to monitor sleep without bloat.
- **Platform Support:** Designed and tested for both iOS and Android.
- **Interaction Flow:** Logging actions take ≤ 3 clicks; no typing required unless adding notes.
- **Feedback Loops:** Logging updates immediately reflect in the view tab with persistent cards.

---

## How to Run
### Browser Preview
bash
npm install
ionic serve

### Mobile Preview:
ionic build
npx cap add ios/android
npx cap open ios/android

---

### Development Time: 
10-15 hours of design, coding, debugging, and testing.

---

### Resources Consulted: 
Ionic Framework Docs, Angular Documentation, Ionic Storage, Stack Overflow (various syntax/debugging)

---

### Collaboration:
Developed independently. Participated in peer discussions and reviewed class threads for debugging techniques, especially on data storage and state persistence.

---
### Reflections
This project gave me hands-on experience with hybrid app development, component-based design, and local data storage. I practiced balancing functionality with UX simplicity and ensured cross-device responsiveness — a solid foundation for future mobile health tracking apps.


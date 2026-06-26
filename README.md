# Pomodoro Timer

A Pomodoro timer app built with React and TypeScript. Features a custom retro font, animated GIFs, and encouraging messages to keep you focused during work and break sessions.

---

## Features

- **Work & Break Modes** — Toggle between a 25-minute focus session and a 5-minute break with dedicated buttons
- **Countdown Timer** — Live countdown display with a styled retro font
- **Rotating Encouragement Messages** — Motivational messages cycle every 4 seconds while the timer runs
- **Animated Backgrounds** — Background changes from blue (idle) to green (active) to signal your current state
- **Custom Assets** — Includes custom GIFs, button images, and a hand-picked font for a personal, polished feel

---

## Tech Stack

- [React](https://reactjs.org/) with [TypeScript](https://www.typescriptlang.org/)
- CSS with custom `@font-face` (Retrograde font)
- `useState` / `useEffect` hooks for timer and message logic
- Create React App (CRA) scaffold

---

## Project Structure

```
src/
├── App.tsx              # Main app component — timer logic, mode switching, UI
├── App.css              # Styles — layout, animations, custom font
├── index.tsx            # React entry point
├── index.css            # Global base styles
├── assets/
│   ├── Retrograde.ttf
│   ├── background-blue.png
│   ├── background-green.png
│   ├── idle.gif / work.gif / break.gif
│   ├── play.png / reset.png
│   ├── work.png / work-clicked.png
│   ├── break.png / break-clicked.png
│   └── close.png
```

---

## Getting Started

### Prerequisites

- Node.js (v14+)
- npm or yarn

## How It Works

1. **Select a mode** — Click **Work** (25 min) or **Break** (5 min)
2. **Start the timer** — Hit the start button to begin the countdown
3. **Stay motivated** — Encouraging messages rotate every 4 seconds
4. **Reset anytime** — Clicking start while the timer is running resets it back to 25 minutes

---

## Customization

- **Timer durations** — Edit `setTimeLeft(25 * 60)` and `setTimeLeft(5 * 60)` in `App.tsx`
- **Messages** — Update the `cheerMessages` and `breakMessages` arrays
- **Message interval** — Change the `4000` ms value in the `setInterval` call
- **Styling** — Swap out assets in the `assets/` folder or update `App.css`

---

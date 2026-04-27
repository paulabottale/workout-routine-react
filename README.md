# Smart Workout Planner 💪

An AI-powered full stack web application that generates personalised workout routines using Claude AI (Anthropic API).

🔗 **Live Demo:** [workout-routine-react.vercel.app](https://workout-routine-react.vercel.app/)

---

## How It Works

1. The user fills out a form with their name, age, fitness level, and available time
2. The React frontend sends the data to a Node.js/Express backend
3. The backend securely calls the Claude AI API (Anthropic) — API keys are never exposed to the frontend
4. Claude generates a personalised workout routine in real time
5. The result is displayed in the app and saved to the workout history

---

## Features

- 🤖 **AI-generated routines** — powered by Claude AI (Anthropic API)
- 📋 **Workout history** — persisted in localStorage with date and time stamps
- 🗑️ **History management** — delete individual entries or clear all history
- ✅ **Modal confirmations** — custom modal dialogs for destructive actions
- 📱 **Responsive design** — built with Tailwind CSS
- 🔒 **Secure backend** — API key middleware + rate limiting (5 requests / 15 min per IP)

---

## Tech Stack

### Frontend
- React (Vite)
- React Router DOM
- Tailwind CSS
- useState · useEffect · localStorage
- react-markdown
- Deployed on **Vercel**

### Backend
- Node.js · Express.js
- Claude AI (Anthropic API)
- express-rate-limit
- dotenv · CORS
- Deployed on **Render**

---

## Project Structure

This project uses two separate repositories:

| Repo | Description |
|------|-------------|
| [workout-routine-react](https://github.com/paulabottale/workout-routine-react) | React frontend |
| [workout-routine-backend](https://github.com/paulabottale/workout-routine-backend) | Node.js/Express backend |

---

## Environment Variables

### Frontend (.env)
```
VITE_API_URL=https://your-backend-url.onrender.com
VITE_CLIENT_API_KEY=your-client-api-key
```

### Backend (.env)
```
ANTHROPIC_API_KEY=your-anthropic-api-key
CLIENT_API_KEY=your-client-api-key
PORT=3001
```

---

## Getting Started

### Frontend
```bash
git clone https://github.com/paulabottale/workout-routine-react
cd workout-routine-react
npm install
npm run dev
```

### Backend
```bash
git clone https://github.com/paulabottale/workout-routine-backend
cd workout-routine-backend
npm install
npm run dev
```

---

## Author

**Paula Bottale** — [LinkedIn](https://linkedin.com/in/paula-bottale) · [GitHub](https://github.com/paulabottale)

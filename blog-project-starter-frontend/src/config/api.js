// Base URL for the backend API.
// Locally it falls back to your local backend on port 5000.
// In production (Vercel), set REACT_APP_API_URL to your Render backend URL,
// e.g. https://your-backend.onrender.com
export const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000";

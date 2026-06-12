# NoteApp

A full-stack notes application built with the MERN stack. Create, view, edit, and delete notes through a responsive React UI backed by a REST API. Originally inspired by [freeCodeCamp](https://www.freecodecamp.org/), with custom styling, rate limiting, and split deployment (Vercel + Render).

## Live Demo

- **Frontend:** [your-app.vercel.app](https://your-app.vercel.app)
- **Backend API:** [noteapp-bnl7.onrender.com](https://noteapp-bnl7.onrender.com)

## Features

- Create, read, update, and delete notes
- Responsive UI with Tailwind CSS and DaisyUI
- Client-side routing with React Router
- RESTful API with Express
- MongoDB persistence via Mongoose
- Rate limiting with Upstash Redis (100 requests per 60 seconds)
- Toast notifications for user feedback
- Deployed frontend on Vercel and backend on Render

## Tech Stack

| Layer      | Technology                          |
|------------|-------------------------------------|
| Frontend   | React, Vite, Tailwind CSS, DaisyUI  |
| Backend    | Node.js, Express                    |
| Database   | MongoDB (Atlas)                     |
| Rate limit | Upstash Redis                       |
| Hosting    | Vercel (frontend), Render (backend) |

## Project Structure

```
NoteApp/
├── frontend/                 # React + Vite app
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── libs/             # Axios API client & utilities
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── index.html
│   ├── package.json
│   ├── vite.config.js
│   └── vercel.json           # SPA routing for Vercel
│
└── backend/                  # Express API
    ├── src/
    │   ├── config/           # DB & Upstash setup
    │   ├── controllers/
    │   ├── middleware/
    │   ├── models/
    │   ├── routes/
    │   └── server.js
    └── package.json
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm
- MongoDB Atlas cluster (or local MongoDB)
- Upstash Redis account (for rate limiting)

### 1. Clone the repository

```bash
git clone https://github.com/DarthCoder-afk/NoteApp.git
cd NoteApp
```

### 2. Backend setup

```bash
cd backend
npm install
```

Create a `backend/.env` file:

```env
MONGO_URI=your_mongodb_connection_string
UPSTASH_REDIS_REST_URL=your_upstash_redis_url
UPSTASH_REDIS_REST_TOKEN=your_upstash_redis_token
PORT=5001
```

Start the backend:

```bash
npm run dev
```

The API runs at `http://localhost:5001`.

### 3. Frontend setup

In a new terminal:

```bash
cd frontend
npm install
npm run dev
```

The app runs at `http://localhost:5173` and talks to the local API automatically.

## API Reference

Base URL (local): `http://localhost:5001/api`

| Method | Endpoint       | Description       |
|--------|----------------|-------------------|
| GET    | `/notes`       | Get all notes     |
| GET    | `/notes/:id`   | Get a single note |
| POST   | `/notes`       | Create a note     |
| PUT    | `/notes/:id`   | Update a note     |
| DELETE | `/notes/:id`   | Delete a note     |

**Create / update body:**

```json
{
  "title": "My note",
  "content": "Note content here"
}
```

## Deployment

### Backend (Render)

1. Create a new **Web Service** on [Render](https://render.com).
2. Set **Root Directory** to `backend`.
3. **Build Command:** `npm install`
4. **Start Command:** `npm start`
5. Add environment variables:

| Variable                   | Description                     |
|----------------------------|---------------------------------|
| `NODE_ENV`                 | `production`                    |
| `MONGO_URI`                | MongoDB Atlas connection string |
| `UPSTASH_REDIS_REST_URL`   | Upstash Redis REST URL          |
| `UPSTASH_REDIS_REST_TOKEN` | Upstash Redis REST token        |
| `FRONTEND_URL`             | Your Vercel URL (for CORS)      |

### Frontend (Vercel)

1. Import the repo on [Vercel](https://vercel.com).
2. Set **Root Directory** to `frontend`.
3. **Framework Preset:** Vite
4. Add environment variable:

| Variable       | Example                                 |
|----------------|-----------------------------------------|
| `VITE_API_URL` | `https://noteapp-bnl7.onrender.com/api` |

5. Deploy. The `vercel.json` file handles SPA routing for React Router.

> **Note:** Set `FRONTEND_URL` on Render to match your exact Vercel URL (no trailing slash). If you use Vercel preview deployments, either update `FRONTEND_URL` per preview or extend CORS to allow `*.vercel.app` origins.

## Scripts

### Backend

| Command       | Description             |
|---------------|-------------------------|
| `npm run dev` | Start with nodemon      |
| `npm start`   | Start production server |

### Frontend

| Command           | Description      |
|-------------------|------------------|
| `npm run dev`     | Start dev server |
| `npm run build`   | Production build |
| `npm run preview` | Preview build    |

## Acknowledgments

Built while learning the MERN stack from [freeCodeCamp.org](https://www.freecodecamp.org/), with additional customizations for UI, rate limiting, and cloud deployment.

## License

ISC

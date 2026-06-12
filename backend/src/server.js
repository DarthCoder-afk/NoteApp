import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';  
import notesRoutes from './routes/notesRoutes.js';
import { connectDB } from './config/db.js';
import rateLimiter from './middleware/rateLimiter.js';
import path from 'path';


dotenv.config();

const app = express();
const __dirname = path.resolve();
const PORT = process.env.PORT || 5001;


// CORS middleware

const allowedOrigins =
  process.env.NODE_ENV === "production"
    ? [process.env.FRONTEND_URL]
    : ["http://localhost:5173"];

app.use(
  cors({
    origin: allowedOrigins,
    credentials: true,
  })
);
// middleware
app.use(express.json());

// rate limiter middleware
app.use(rateLimiter)



// app.use((req, res, next) => {
//     console.log(`The request method is: ${req.method} and the request URL is: ${req.url}`);
//     next()
// })

app.use("/api/notes", notesRoutes);

// Once db is connected, start the server
connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server started on port ${PORT}`);
    });
});





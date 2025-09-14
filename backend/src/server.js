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

if(process.env.NODE_ENV !== "production"){
    app.use(cors({
     origin: "http://localhost:5173"
    }));
}

// middleware
app.use(express.json());

// rate limiter middleware
app.use(rateLimiter)



// app.use((req, res, next) => {
//     console.log(`The request method is: ${req.method} and the request URL is: ${req.url}`);
//     next()
// })

app.use("/api/notes", notesRoutes);


if(process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname,"../frontend/dist")))

    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../frontend','dist', 'index.html'))
    });
}

// Once db is connected, start the server
connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server started on port ${PORT}`);
    });
});





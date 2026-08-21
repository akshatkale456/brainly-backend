import express from "express";
import router from "./routes/authRoutes.js";
import path from "path";
import { fileURLToPath } from "url";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors({
  origin: ['https://brainly-8la7wdl9y-brainly1.vercel.app', 'http://localhost:5173'],
  credentials: true
}));

const filename = fileURLToPath(import.meta.url);
console.log(import.meta.url);
const dirname = path.dirname(filename);

app.use('/api', router);

// Route for cron job / health check
app.get('/ping', (req, res) => {
    res.status(200).json({ message: "OK" });
});

export default app;
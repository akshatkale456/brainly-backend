import express from "express";
import router from "./routes/authRoutes.js";
import cors from "cors";
import path from "path";
const app = express();
app.use(express.json());
app.use(cors());
app.use('/avatar', express.static(path.join(process.cwd(), 'uploads')));

// Make uploads folder publicly available so frontend can display imgs

app.use('/api', router);

export default app;
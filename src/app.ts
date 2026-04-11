import express from "express";
import router from "./routes/authRoutes.js";
import cors from "cors";
const app = express();
app.use(express.json());
app.use(cors());

// Make uploads folder publicly available so frontend can display imgs
app.use('/uploads', express.static('uploads'));

app.use('/api', router);

export default app;
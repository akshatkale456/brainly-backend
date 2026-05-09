import express from "express";
import router from "./routes/authRoutes.js";
import path from "path"
import { fileURLToPath } from "url"


import cors from "cors";
const app = express();
app.use(express.json());
app.use(cors());
const filename = fileURLToPath(import.meta.url)
console.log( import.meta.url)
const dirname = path.dirname(filename)
app.use('/uploads',express.static(path.join( dirname + 'uploads')))




app.use('/api', router);

export default app;
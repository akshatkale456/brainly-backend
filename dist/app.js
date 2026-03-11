import express from "express";
import auth from "./routes/authRoutes.js";
const app = express();
app.use(express.json());
app.use('/api', auth);
export default app;
//# sourceMappingURL=app.js.map
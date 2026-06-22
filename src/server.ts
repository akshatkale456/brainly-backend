import app from './app.js';
import http from "http"
import cors from 'cors';
const server = http.createServer(app)


app.use(cors({
  origin: 'http://localhost:5173', 
  methods: ['GET', 'POST','DELETE','UPDATE'],
  credentials: true
}));

const PORT = 3000;

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
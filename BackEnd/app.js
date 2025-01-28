import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import http from 'http';
import ConnectToMongoDB from './db/db.js';
import router from './routes/user.route.js';

dotenv.config();
const app = express();

ConnectToMongoDB();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const server = http.createServer(app);

app.use('/auth', router);

const PORT = 3003;
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
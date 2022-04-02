const express = require('express');
const { chats } = require('./data/data');
const app = express();
const dotenv = require('dotenv');
dotenv.config();

const {notFound, errorHandler} = require('./middleware/errorMiddleware.js');

const userRoutes = require('./routes/userRoutes');


const connectDB = require('./config/db');
connectDB();


const PORT = process.env.PORT || 8000;

app.use(express.json());
app.use('/api/user/', userRoutes);
app.use('/api/chat', chatRoutes);

app.use(notFound);
app.use(errorHandler);

// app.get('/api/chat/:id', (req, res) => {
    // res.send(chats)
//     const singleChat = chats.find(chat => chat._id===req.params.id);
//     res.send(singleChat)
// })

app.listen(PORT, () => {
    console.log(`port is running on ${PORT}`)
});
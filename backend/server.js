const express = require('express');
const { chats } = require('./data/data');
const app = express();

const dotenv = require('dotenv');
dotenv.config();
const PORT = process.env.PORT || 8000;

app.get('/api/chat/', (req, res) => {
    res.send(chats)
    // const singleChat = chats.find(chat => chat._id===req.params.id);
    // res.send(singleChat)
})

app.get('/api/chat/:id', (req, res) => {
    // res.send(chats)
    const singleChat = chats.find(chat => chat._id===req.params.id);
    res.send(singleChat)
})

app.listen(PORT, () => {
    console.log(`port is running on ${PORT}`)
});
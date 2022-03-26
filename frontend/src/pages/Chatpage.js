import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Chatpage = () => {
    const [chats, setChats] = useState([])

    const fetchChat = async() => {
        const {data} = await axios.get('http://localhost:8000/api/chat');
        setChats(data)
    }

    useEffect(() => {
        fetchChat();
    }, [])
  return (
    <div>{chats.map(chat=><div key={chat._id}>{chat.chatName}</div>)}</div>
  )
}

export default Chatpage
import React, { useContext } from 'react'
import { UserContext } from '../context/User'
import Message from './Message';

function Chats() {
    const {messages} = useContext(UserContext);
    return (
        <div className=' scrollbar-thumb-gray-900 scrollbar-track-gray-400 scrollbar-thin lg:w-[70%] md:w-[80%] sm:w-[90%]  h-[75vh] m-auto flex flex-col px-4'>
            {messages?.map((message) => (
                <Message {...message} key={message.id} />
            ))}
        </div>
    )
}

export default Chats

import React, { useContext } from 'react'
import { UserContext } from '../context/User'
import RecieverMessage from './RecieverMessage';
import SenderMessage from './SenderMessage';

function Chats() {
    const {messages, user} = useContext(UserContext);
    return (
        <div className='lg:w-[70%] md:w-[80%] sm:w-[90%]  h-[75vh] m-auto flex flex-col px-4'>
            {messages?.map((message) => (
                message.user_uid === user.uid ? <SenderMessage key={message.id} {...message}/> : <RecieverMessage key={message.id} {...message}/>
            ))}
        </div>
    )
}

export default Chats

import React, { useContext, useState } from "react";
import { UserContext } from "../context/User";

function ChatInput() {
  const { user, messages, setMessages } = useContext(UserContext);
  const [message, setMessage] = useState('');

  const sendMessage = (e) => {
    e.preventDefault();

    if (message.trim().length === 0) return 
    const newMessage = {
        message: message,
        user_uid: user.id,
        timestamp: new Date(),
        id: Math.floor(Math.random() * 1000),
        name: user.user_metadata.full_name,
        photoURL: user.user_metadata.avatar_url
    }
      setMessages([...messages, newMessage]);
      console.log(messages)
      setMessage('');
  }
  return (
    <div className="w-full h-[10vh] flex items-center justify-between md:p-8 lg:p-11 sm:p-4">
      <div>
        <img
          src={user.photoURL}
          className="w-12 h-12 rounded-full cursor-pointer hover:opacity-80"
        />
      </div>
      <div>
        <form onSubmit={e => sendMessage(e)}>
    <input type="text" id="default-input" className="border text-lg block w-[75vw] p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500 focus:outline-none rounded-full"
     placeholder="Message..."
     value={message}
     onChange={e => setMessage(e.target.value)}
     />

        </form>
      </div>
      <div></div>
    </div>
  );
}

export default ChatInput;

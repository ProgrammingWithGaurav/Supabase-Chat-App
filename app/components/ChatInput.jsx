import React, { useContext } from 'react'
import {UserContext} from '../context/User';

function ChatInput() {
    const {user} = useContext(UserContext)
    return (
        <div className='w-full h-[10vh] flex items-center justify-between md:p-8 lg:p-11 sm:p-4'>
            <div>
                <img src={user.photoURL} className='w-10 h-10 rounded-full cursor-pointer hover:opacity-80'/>
            </div>
            <div>
            <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[75vw] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required />
        </div>
            <div></div>
        </div>
    )
}

export default ChatInput

import { createContext, useState } from "react";

export const UserContext = createContext();


export const UserProvider =  ({ children }) => {
    const [user, setUser] = useState({
        name: "Tom",
        email: "myemail@email.com",
        uid: 'user1',
        photoURL: 'https://avatars.githubusercontent.com/u/88154142?v=4',
        created_at: 'Fri Dec 16 2022 15:04:02 GMT+0530'

    })

    const [messages, setMessages] = useState([
      {
        
        message: 'hi',
        user_uid: 'user2',
        timestamp: new Date(),
        id: Math.floor(Math.random() * 1000),
        name: user.name,
        photoURL: user.photoURL
    }
    ]);
    return (
        <UserContext.Provider
          value={{user, messages, setMessages}}
        >
          {children}
        </UserContext.Provider>
    )
}
import { createContext, useState } from "react";

export const UserContext = createContext();


export const UserProvider =  ({ children }) => {
    const [user, setUser] = useState({
        name: "Tommy",
        email: "myemail@email.com",
        uid: 'user1',
        photoURL: 'https://images.unsplash.com/photo-1671314888213-7e724de48113?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
        timestamp: 'Fri Dec 16 2022 15:04:02 GMT+0530'

    })

    const [showUserProfile, setShowUserProfile] = useState(false);
    const [selectedUser, setSelectedUser] = useState({name: "", timestamp: "",photoURL: '', isOnline: true, uid: ''})

    const [messages, setMessages] = useState([
      {
        
        message: 'hi',
        user_uid: 'user2',
        timestamp: new Date(),
        id: Math.floor(Math.random() * 1000),
        name: "Gaurav",
        photoURL: "https://avatars.githubusercontent.com/u/88154142?v=4"
    }
    ]);
    return (
        <UserContext.Provider
          value={{user, messages, setMessages, showUserProfile, setShowUserProfile, selectedUser, setSelectedUser}}
        >
          {children}
        </UserContext.Provider>
    )
}
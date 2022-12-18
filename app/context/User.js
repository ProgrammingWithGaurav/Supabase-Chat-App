import { createContext, useEffect, useState } from "react";
import { supabase } from "../supabaseClient";

export const UserContext = createContext();


export const UserProvider =  ({ children }) => {
    const [user, setUser] = useState({})

    useEffect(() => {
      const getData = async () => {
        const {data} = await supabase.auth.getSession();
        setUser(data.session?.user)
      }
      getData()
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
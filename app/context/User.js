import { createContext, useEffect, useState } from "react";
import { supabase } from "../supabaseClient";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({});

  useEffect(() => {
    const getData = async () => {
      const { data } = await supabase.auth.getSession();
      setUser(data.session?.user);
    };
    getData();
  }, []);
  useEffect(() => {
    const getData = async () => {
      const { data } = await supabase.from("chats").select();
      setMessages(data);
    };
    getData();
  }, []);

  const [showUserProfile, setShowUserProfile] = useState(false);
  const [selectedUser, setSelectedUser] = useState({
    full_name: "",
    user_name: "",
    timestamp: "",
    photoURL: "",
    isOnline: true,
    uid: "",
  });

  const [messages, setMessages] = useState([]);
  return (
    <UserContext.Provider
      value={{
        user,
        messages,
        setMessages,
        showUserProfile,
        setShowUserProfile,
        selectedUser,
        setSelectedUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

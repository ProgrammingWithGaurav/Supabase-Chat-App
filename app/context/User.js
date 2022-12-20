import { createContext, useEffect, useState } from "react";
import { supabase } from "../supabaseClient";
import useSWR from "swr";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [messages, setMessages] = useState([]);
  const [user, setUser] = useState({});
  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { data, error } = useSWR("/api/getMessages", fetcher, {
    refreshInterval: 200,
  });
  useEffect(() => {
    if (!data) return;
    setMessages(data.data);
    console.log(data)
  }, [data]);

  useEffect(() => {
    const getData = async () => {
      const { data } = await supabase.auth.getSession();
      setUser(data.session?.user);
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

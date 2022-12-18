import Head from 'next/head';
import { useContext, useEffect } from 'react';
import ChatInput from '../components/ChatInput';
import Chats from '../components/Chats';
import Header from '../components/Header';
import UserDetailsModal from '../components/UserDetailsModal';

export default function Home() {

  return (
    <div>
      <Head>
        <title>Chat App 2.0</title>
        <meta name="description" content="Chat app with Nextjs and Supabase" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Header />
        <Chats />
        <ChatInput /> 
        <UserDetailsModal />
      </div>
    </div>
  )
}

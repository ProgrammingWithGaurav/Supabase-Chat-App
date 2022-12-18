import { useContext, useEffect } from "react";
import Header from "../components/Header";
import { UserContext } from "../context/User";
import ReactTimeAgo from 'react-time-ago';
import Head from 'next/head';
import { WifiIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/router";
import {supabase} from '../supabaseClient';

function profile() {
  const { user } = useContext(UserContext);
  const isSecondName = user.user_metadata.user_name.split(' ').length >= 2;

  const router = useRouter();
  useEffect(() => {
    const getData = async () => {
      const {data} = await supabase.auth.getSession();
      if(!data.session?.user) {
        router.push('/login');
      }

    }
    getData()
  }, )
  
  return (
    <div>
      <Head>
        <title>Chat App 2.0 | Profile</title>
        <meta name="description" content="Chat app with Nextjs and Supabase" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div>
        <section
          className="flex font-medium items-center justify-center h-[75vh]"
        >
          <section className="w-64 mx-auto rounded-2xl px-8 py-6 shadow shadow-gray-900">
            <div className="flex items-center justify-between">
              <span className="text-gray-400 text-sm">
                Joined : <ReactTimeAgo date={user.created_at} locale="en-US" />
              </span>
            </div>
            <div className="mt-6 w-fit mx-auto">
              <img
                src={user.user_metadata.avatar_url}
                className="rounded-full w-28 "
                alt="profile picture"
              />
            </div>

            <div className="mt-8 ">
              <h2 className="text-white font-bold text-2xl tracking-wide">
                {isSecondName ? (<>{multiple_name[0]} <br /> {multiple_name[1]}</>) : name}
              </h2>
            </div>
            <p className="text-emerald-400 font-semibold mt-2.5 flex items-center justify-between">Active 
            <WifiIcon className="h-4 w-4 animate-pulse"/></p>
          </section>
        </section>
      </div>
    </div>
  );
}

export default profile;

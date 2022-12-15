import React from "react";
import GithubIcon from "../components/Icons/GithubIcon";
import Head from "next/head";

function login() {
  const loginWithGithub = () => {};
  return (
    <>
      <Head>
        <title>Chat App 2.0 | Login</title>
        <meta name="description" content="Chat app with Nextjs and Supabase" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex items-center justify-center w-full h-screen">
        <button
          onClick={loginWithGithub}
          type="button"
          class="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-lg px-5 py-2.5 text-center inline-flex items-center mr-2 mb-2 transition"
        >
          <GithubIcon />
          Sign in with Github
        </button>
      </div>
    </>
  );
}

export default login;

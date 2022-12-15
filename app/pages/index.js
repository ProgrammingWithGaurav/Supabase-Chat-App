import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Chat App 2.0</title>
        <meta name="description" content="Chat app with Nextjs and Supabase" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className='text-blue-600 text-2xl'>Let build this chat app 🔋</h1>
    </div>
  )
}

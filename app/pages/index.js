import Head from 'next/head';
import Header from '../components/Header';

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
      </div>
    </div>
  )
}

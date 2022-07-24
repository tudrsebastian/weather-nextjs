import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

import Main from './Main/main'
import { useRouter } from 'next/router'
import { useAuth } from '../components/AuthProvider/AuthContext'
import { useEffect } from 'react'

const Home: NextPage = () => {
  const { logout, user } = useAuth();
  const router = useRouter();
  if (typeof window !== 'undefined') {
    const logged = localStorage.getItem('user');
    const loggedUser = JSON.parse(logged);
    console.log(loggedUser)
    if (loggedUser.authed !== true) router.push('/login/signin')
  }








  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <button className="bg-blue-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full" onClick={logout}>Logout</button>
      <p>

      </p>
      <Main />
      Logged In : {user.user}
    </div>
  )
}

export default Home

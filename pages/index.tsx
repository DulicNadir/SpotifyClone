import type { NextPage } from 'next'
import { getSession } from 'next-auth/react'
import Head from 'next/head'
import Image from 'next/image'
import { Center } from '../components/Center'
import Sidebar from '../components/Sidebar'

const Home: NextPage = () => {
  return (
    <div className="h-screen overflow-hidden bg-black">
      <main className="flex">
        <Sidebar />
        <Center />
      </main>
      <div></div>
    </div>
  )
}
export async function getServerSideProps(context: any) {
  const session = await getSession(context)
  return {
    props: {
      session,
    },
  }
}
export default Home

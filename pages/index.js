
import Head from 'next/head'

import Banner from "../components/Banner";



export default function Home () {
  return (
    <div className="">
      <Head>
        <title>Content Actors</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Banner/>

    </div>
  )
}




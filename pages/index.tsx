import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Head>
        <title>Recipes</title>
        <meta name="description" content="Search Recipes" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>
        Welcome!
      </h1>
      <div>
        This is a website to view recipes in a simple and easy to read manner.
        <br/>
        <br/>
        TODO: You should be able to search recipes by ingredients available in your pantry!
      </div>
    </>
  )
}

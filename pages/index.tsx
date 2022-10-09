import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'
import Hero from '../components/Hero'


const Home: NextPage = () => {
  return (
    <div >
      <Head>
     <title className='text-green-500 text-3xl'>hello world</title>
      </Head>

      {/*Header */}
      <Header />
      
      {/*Hero */}
      <section id="hero">
         <Hero/>
        </section>
      {/*About */ }
      {/*Experience */ }
      {/*Skills */ }
      {/*Projects */ }
      {/*Contact Me */ }
    </div>
  )
}

export default Home

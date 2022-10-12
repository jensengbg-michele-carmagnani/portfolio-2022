import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'
import Hero from '../components/Hero'


const Home: NextPage = () => {
  return (
    <div className='h-screen bg-[rgb(36,36,36)] text-white  snap-y snap-mandatory overflow-scroll z-0'>
      <Head>
     <title className='text-green-500 text-3xl'>portfolio </title>
      </Head>

      {/*Header */}
      <Header />
      
      {/*Hero */}
      <section id="hero" className='snap-center'>
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

import type { NextPage } from 'next';
import Head from 'next/head';
import About from '../components/About';
import ContactMe from '../components/ContactMe';
import Experience from '../components/Experience';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Skills from '../components/Skills';

const Home: NextPage = () => {
  return (
    <div className="h-screen bg-[rgb(36,36,36)] text-white  snap-y snap-mandatory overflow-scroll z-0 scroll-smooth overflow-x-hidden scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A] scrollbar-thin">
      <Head>
        <title className="text-green-500 text-3xl">portfolio </title>
      </Head>

      {/*Header */}
      <Header />

      {/*Hero */}

      <section id="hero" className="snap-start">
        <Hero />
      </section>
      <section id="about" className="snap-center">
        <About />
      </section>
      {/*Experience */}
      <section id="experience" className="snap-center">
        <Experience />
      </section>
      {/*Skills */}
      <section id="skills" className="snap-center">
        <Skills />
      </section>
      {/*Projects */}
      <section id="projects" className="snap-center">
        <Projects />
      </section>
      {/*Contact Me */}
      <section id="contactme " className="snap-center">
        <ContactMe />
      </section>
    </div>
  );
};

export default Home;

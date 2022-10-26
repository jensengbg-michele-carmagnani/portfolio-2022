import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import About from "../components/About";
import ContactMe from "../components/ContactMe";
import WorkExperience from "../components/Experience";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import { fetchPageInfo } from "../helpers/fetchPageInfo";
import { fetchProjects } from "../helpers/fetchProjects";
import { fetchSkills } from "../helpers/fetchSkills";
import { fetchSocials } from "../helpers/fetchSocials";
import { fetchExperiences } from "../helpers/getExperience";
import { Experience, Skill, PageInfo, Project, Social } from "../typing";

type Props = {
  pageInfo: PageInfo;
  experiences: Experience[];
  skills: Skill[];
  socials: Social[];
  projects: Project[];
};

const Home: NextPage<Props> = ({
  pageInfo,
  experiences,
  skills,
  socials,
  projects,
}) => {
  return (
    <div className="h-screen bg-[rgb(36,36,36)] text-white  snap-y snap-mandatory overflow-scroll z-0 scroll-smooth overflow-x-hidden scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A] scrollbar-thin">
      <Head>
        <title className="text-green-500 text-3xl">
          {pageInfo?.name} - Portfolio{" "}
        </title>
      </Head>

      {/*Header */}
      <Header socials={socials} />

      {/*Hero */}

      <section id="hero" className="snap-start">
        <Hero pageInfo={pageInfo} />
      </section>
      <section id="about" className="snap-center">
        <About pageInfo={pageInfo} />
      </section>
      {/*Experience */}
      <section id="experience" className="snap-center">
        <WorkExperience experiences={experiences} />
      </section>
      {/*Skills */}
      <section id="skills" className="snap-center">
        <Skills skills={skills} />
      </section>
      {/*Projects */}
      <section id="projects" className="snap-center">
        <Projects projects={projects} />
      </section>
      {/*Contact Me */}
      <section id="contact" className="snap-center">
        <ContactMe />
      </section>
      <section>
        <Link href="#hero">
          <Footer />
        </Link>
      </section>
    </div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageInfo: PageInfo = await fetchPageInfo();
  const experiences: Experience[] = await fetchExperiences();
  const skills: Skill[] = await fetchSkills();
  const projects: Project[] = await fetchProjects();
  const socials: Social[] = await fetchSocials();

  return {
    props: {
      pageInfo,
      experiences,
      skills,
      projects,
      socials,
    },
    revalidate: 20,
  };
};

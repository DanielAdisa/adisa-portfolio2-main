import Image from "next/image";
// import { Head } from "next/document";
import Header from "@/components/Header";

import Hero from "@/components/Hero";
import About from "@/components/About";
import WorkExperience from "@/components/WorkExperience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import { BsFillArrowUpCircleFill } from "react-icons/bs";
import ContactMe from "@/components/ContactMe";
import { GetStaticProps } from "next";
import { Experience, PageInfo, Project, Skill, Social } from "@/typings";
import { fetchPageInfo } from "@/utils/fetchPageInfo";
import { fetchExperiences } from "@/utils/fetchExperience";
import { fetchSkills } from "@/utils/fetchSkills";
import { fetchProjects } from "@/utils/fetchProjects";
import { fetchSocials } from "@/utils/fetchSocials";
import Link from "next/link";
import { LinkIcon } from "@heroicons/react/20/solid";

type Props = {
  pageInfo: PageInfo;
  experiences: Experience[];
  skills: Skill[];
  projects: Project[];
  socials: Social[];
}

const handleScrollToTop = () =>
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  })


export default function Home({ pageInfo,experiences,skills,projects,socials}: Props) {
  
  return (
    <div className=" bg-[#363636] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#25D366]/80"> 



        <Header socials={socials}/>

      <section id="hero" className=" snap-start">
        <Hero pageInfo = {pageInfo}/>
      </section>

      <section id="about" className=" snap-center"> 
        <About pageInfo = {pageInfo}/>
      </section>

      <section id="experience" className="snap-center">
        <WorkExperience experiences= {experiences} />
      </section>

      {/* Skills */}
      <section id="skills" className="snap-start">
        <Skills skills = {skills}/>
      </section>

      {/* Projects */}
      <section id="projects" className=" snap-start">
        <Projects projects = {projects}/>
      </section>

      {/* Contact Me */}
      <section id="contactme" className="snap-start">
        <ContactMe/>
      </section>
      <Link href="#hero">
        <footer className="sticky bottom-16 md:bottom-2 w-full cursor-pointer ">
          <div className="flex items-center justify-center">
          <BsFillArrowUpCircleFill
            className=" text-darkGreen/100 bg-[#3f3f3f]animate-bounce md:w-14 md:h-14 h-10 w-10 bottom-2 cursor-pointer animate-bounce
            "
            onClick={handleScrollToTop}
          />
          </div>
        </footer>
      </Link>
    </div>

    
  );
}

export const getStaticProps: GetStaticProps<Props> = async (context) => {
  const pageInfo = await fetchPageInfo();
  const experiences = await fetchExperiences();
  const skills = await fetchSkills();
  const projects = await fetchProjects();
  const socials = await fetchSocials();
  

  return {
    props: {
      pageInfo,
      experiences,
      skills,
      projects,
      socials,
    },
    revalidate: 10,
  };
};


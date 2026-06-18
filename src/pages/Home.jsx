
import HeroHome from "../components/Home/HeroHome";
import SkillsHome from "../components/Home/SkillsHome";
import ProjectsHome from "../components/Home/ProjectsHome";
import ExperiencesHome from "../components/Home/ExperiencesHome";

function Home() {
  return (
    <div className="w-full lg:max-w-[1265px] sm:max-w-[700px] max-w-[400px] mx-auto px-6 sm:px-10 lg:px-24"> {/*  */}
        <HeroHome />
        <SkillsHome />
        <ProjectsHome />
        {/* <ExperiencesHome /> */}
    </div>
  );
}

export default Home;

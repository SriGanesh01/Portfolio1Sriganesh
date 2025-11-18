
import HeroHome from "../components/Home/HeroHome";
import SkillsHome from "../components/Home/SkillsHome";
import ProjectsHome from "../components/Home/ProjectsHome";
import ExperiencesHome from "../components/Home/ExperiencesHome";

function Home() {
  return (
    <div>
        <HeroHome />
        <SkillsHome />
        <ProjectsHome />
        {/* <ExperiencesHome /> */}
    </div>
  );
}

export default Home;

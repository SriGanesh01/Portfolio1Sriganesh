

import EachProjectCard from "./EachProjectCard";

function ProjectsHome() {
    return (
        <>
            <div className="mx-53">
                <div className="flex h-full w-full justify-between items-center">
                    <div className="leading-none font-primary text-[160px]">PROJECTS</div>
                    <div className="pr-4 leading-none mb-[-2px]">
                        <svg className='heart1' width="129.6" height="124" viewBox="0 0 162 155" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M162 154.932V53.4981C162 24.0706 138.144 0.214844 108.717 0.214844C79.2893 0.214844 53.5875 20.5852 53.5875 50.0127C24.16 50.0127 0.304321 72.2208 0.304321 101.648C0.304321 131.076 24.16 154.932 53.5875 154.932H162Z" fill="" />
                        </svg>
                    </div>
                </div>
                <div className="flex flex-wrap gap-4 mx-2">
                    <EachProjectCard listofthing={["Git", "Github", "Figma", "Python", "Cs"]} />
                    <EachProjectCard listofthing={["Unity", "React", "Cpp", "Css"]} />
                    <EachProjectCard listofthing={["C", "Tailwind"]} />
                    <EachProjectCard listofthing={["Js", "Ts"]} />
                    <EachProjectCard listofthing={["HTML", "Github"]} />
                    <EachProjectCard />
                </div>


            </div>


            <hr />
        </>
    );
}
export default ProjectsHome
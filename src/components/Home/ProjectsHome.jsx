

import EachProjectCard from "./EachProjectCard";

import Terminal1 from '../../assets/Home/CardCaroselImages/Terminal1.png'
import Terminal2 from '../../assets/Home/CardCaroselImages/Terminal2.png'
import Terminal3 from '../../assets/Home/CardCaroselImages/Terminal3.png'
import Terminal4 from '../../assets/Home/CardCaroselImages/Terminal4.png'
import Terminal5 from '../../assets/Home/CardCaroselImages/Terminal5.png'

function ProjectsHome() {
    return (
        <>
            <div className="w-screen flex flex-col items-center justify-center mt-14">
                <div className="flex h-full w-screen justify-center items-center">
                    <div className="leading-none font-primary min-[72rem]:text-[185px] md:text-[150px] sm:text-[100px] text-[60px] pb-[-12px] pt-9 sm:pt-0">PROJECTS</div>
                    <div className="pr-4 leading-none mb-[-2px] lg:block sm:hidden hidden">
                        <svg className='heart1 lg:w-32 min-[72rem]:w-38 md:w-32' height="152" viewBox="0 0 162 155" fill="none">
                            <path d="M162 154.932V53.4981C162 24.0706 138.144 0.214844 108.717 0.214844C79.2893 0.214844 53.5875 20.5852 53.5875 50.0127C24.16 50.0127 0.304321 72.2208 0.304321 101.648C0.304321 131.076 24.16 154.932 53.5875 154.932H162Z" fill="" />
                        </svg>
                    </div>
                </div>
                <div className="h-full max-w-[1120px] flex gap-x-4 gap-y-5 flex-wrap justify-center items-center justify-items-center mx-8 pt-6">
                    <EachProjectCard title="Terminal Emulator" description="This is a Unity Asset to emulate a linux-like terminal with working commands for learning purposes" source="https://github.com/" redirect="https://innovixity.com" listofthing={["Git", "Github", "Figma", "Python", "Cs"]} listofCarosell={[Terminal1, Terminal2, Terminal3, Terminal4, Terminal5]} />
                    <EachProjectCard listofthing={["Unity", "React", "Cpp", "Css"]} />
                    <EachProjectCard listofthing={["C", "Tailwind"]} />
                    <EachProjectCard listofthing={["Js", "Ts"]} />
                    <EachProjectCard listofthing={["HTML", "Github"]} />
                    <EachProjectCard />

                    <div className="flex w-full justify-end items-end justify-items-end mb-12">
                        View More ---
                    </div>
                </div>


            </div>


            <hr />
        </>
    );
}
export default ProjectsHome
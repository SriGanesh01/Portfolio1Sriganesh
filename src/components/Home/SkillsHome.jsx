import EachSkill from "./EachSkill";

import Github from '../../assets/Home/Skills/Github.svg'
import GithubMono from '../../assets/Home/Skills/Github-1.svg'
import Git from '../../assets/Home/Skills/Git.svg'
import GitMono from '../../assets/Home/Skills/Git-1.svg'
import Figma from '../../assets/Home/Skills/Figma.svg'
import FigmaMono from '../../assets/Home/Skills/Figma-1.svg'
import Python from '../../assets/Home/Skills/Python.svg'
import PythonMono from '../../assets/Home/Skills/Python-1.svg'
import Cs from '../../assets/Home/Skills/Cs.svg'
import CsMono from '../../assets/Home/Skills/Cs-1.svg'
import Unity from '../../assets/Home/Skills/Unity.svg'
import UnityMono from '../../assets/Home/Skills/Unity-1.svg'
import React from '../../assets/Home/Skills/React.svg'
import ReactMono from '../../assets/Home/Skills/React-1.svg'
import Cpp from '../../assets/Home/Skills/Cpp.svg'
import CppMono from '../../assets/Home/Skills/Cpp-1.svg'
import Css from '../../assets/Home/Skills/Css.svg'
import CssMono from '../../assets/Home/Skills/Css-1.svg'
import C from '../../assets/Home/Skills/C.svg'
import CMono from '../../assets/Home/Skills/C-1.svg'
import Tailwind from '../../assets/Home/Skills/Tailwind.svg'
import TailwindMono from '../../assets/Home/Skills/Tailwind-1.svg'
import Js from '../../assets/Home/Skills/JS.svg'
import JsMono from '../../assets/Home/Skills/JS-1.svg'
import Ts from '../../assets/Home/Skills/Ts.svg'
import TsMono from '../../assets/Home/Skills/Ts-1.svg'
import HTML from '../../assets/Home/Skills/HTML.svg'
import HTMLMono from '../../assets/Home/Skills/HTML-1.svg'
import { useState } from "react";

function SkillsHome() {

    const [Selected, SetSelected] = useState("HOVER ->")

    return (
        <>
            <div className="flex justify-center items-center h-full lg:h-screen my-14 sm:h-full">
                <div className="grid grid-rows-5 grid-cols-2 lg:grid-cols-6 sm:grid-cols-3 lg:gap-4 gap-2 sm:gap-4 sm:w-[580px] lg:w-auto">
                    <div className="flex justify-center mt-[-44px] sm:mt-[-17px] lg:mt-[-15px] lg:block lg:pl-2 md:pl-0 min-w-36 sm:min-w-41.5 min-h-[120px] sm:min-h-[124.5px] lg:min-h-[120px] lg:min-w-38 min-[72rem]:h-[124.5px] min-[72rem]:min-w-41.5 lg:row-span-2 lg:col-span-4 sm:col-span-3 col-span-2">
                        <div className="leading-none font-primary min-[72rem]:text-[160px] sm:text-[160px] text-[85px] pb-[-12px] pt-9 sm:pt-0">SKILLS</div>
                        <div className="leading-none font-primary min-[72rem]:text-8xl lg:text-[88px] hidden lg:block">{Selected}</div>
                    </div>
                    <div onMouseEnter={() => SetSelected("GITHUB")} className="min-w-36 sm:min-w-41.5 min-h-[120px] sm:min-h-[124.5px] lg:min-h-[120px] lg:min-w-38 min-[72rem]:min-h-[124.5px] min-[72rem]:min-w-41.5 lg:block lg:col-span-1 lg:row-span-1 sm:hidden hidden"><EachSkill SkillImage={Github} SkillImageMono={GithubMono} /></div>
                    <div onMouseEnter={() => SetSelected("GIT")} className="min-w-36 sm:min-w-41.5 min-h-[120px] sm:min-h-[124.5px] lg:min-h-[120px] lg:min-w-38 min-[72rem]:min-h-[124.5px] min-[72rem]:min-w-41.5 lg:block lg:col-span-1 lg:row-span-1 sm:hidden hidden"><EachSkill SkillImage={Git} SkillImageMono={GitMono} /></div>
                    <div onMouseEnter={() => SetSelected("FIGMA")} className="min-w-36 sm:min-w-41.5 min-h-[120px] sm:min-h-[124.5px] lg:min-h-[120px] lg:min-w-38 min-[72rem]:min-h-[124.5px] min-[72rem]:min-w-41.5 lg:block lg:col-span-1 lg:row-span-1 sm:hidden hidden"><EachSkill SkillImage={Figma} SkillImageMono={FigmaMono} /></div>
                    <div onMouseEnter={() => SetSelected("PYTHON")} className="min-w-36 sm:min-w-41.5 min-h-[120px] sm:min-h-[124.5px] lg:min-h-[120px] lg:min-w-38 min-[72rem]:min-h-[124.5px] min-[72rem]:min-w-41.5 lg:row-span-2 lg:block sm:hidden hidden"><EachSkill SkillImage={Python} SkillImageMono={PythonMono} /></div>
                    <div onMouseEnter={() => SetSelected("C-SHARP")} className="min-w-36 sm:min-w-41.5 min-h-[120px] sm:min-h-[124.5px] lg:min-h-[120px] lg:min-w-38 min-[72rem]:min-h-[124.5px] min-[72rem]:min-w-41.5 lg:block lg:col-span-1 lg:row-span-1 sm:hidden hidden"><EachSkill SkillImage={Cs} SkillImageMono={CsMono} /></div>
                    <div onMouseEnter={() => SetSelected("UNITY")} className="min-w-36 sm:min-w-41.5 min-h-[120px] sm:min-h-[124.5px] lg:min-h-[120px] lg:min-w-38 min-[72rem]:min-h-[124.5px] min-[72rem]:min-w-41.5 lg:row-span-2 lg:col-span-2 sm:col-span-2 sm:row-span-2 col-span-2 row-span-2"><EachSkill SkillImage={Unity} SkillImageMono={UnityMono} /></div>
                    <div onMouseEnter={() => SetSelected("REACT")} className="min-w-36 sm:min-w-41.5 min-h-[120px] sm:min-h-[124.5px] lg:min-h-[120px] lg:min-w-38 min-[72rem]:min-h-[124.5px] min-[72rem]:min-w-41.5 lg:row-span-2 lg:col-span-2 block lg:block sm:hidden col-span-2 row-span-2"><EachSkill SkillImage={React} SkillImageMono={ReactMono} /></div>
                    <div onMouseEnter={() => SetSelected("C++")} className="min-w-36 sm:min-w-41.5 min-h-[120px] sm:min-h-[124.5px] lg:min-h-[120px] lg:min-w-38 min-[72rem]:min-h-[124.5px] min-[72rem]:min-w-41.5 lg:block lg:col-span-1 lg:row-span-1 sm:hidden hidden"><EachSkill SkillImage={Cpp} SkillImageMono={CppMono} /></div>
                    <div onMouseEnter={() => SetSelected("CSS")} className="min-w-36 sm:min-w-41.5 min-h-[120px] sm:min-h-[124.5px] lg:min-h-[120px] lg:min-w-38 min-[72rem]:min-h-[124.5px] min-[72rem]:min-w-41.5 sm:block sm:col-span-1 sm:row-span-2 lg:col-span-1 lg:row-span-1 block"><EachSkill SkillImage={Css} SkillImageMono={CssMono} /></div>
                    <div onMouseEnter={() => SetSelected("C")} className="min-w-36 sm:min-w-41.5 min-h-[120px] sm:min-h-[124.5px] lg:min-h-[120px] lg:min-w-38 min-[72rem]:min-h-[124.5px] min-[72rem]:min-w-41.5 lg:block lg:col-span-1 lg:row-span-1 sm:hidden hidden"><EachSkill SkillImage={C} SkillImageMono={CMono} /></div>
                    <div onMouseEnter={() => SetSelected("TAILWIND")} className="min-w-36 sm:min-w-41.5 min-h-[120px] sm:min-h-[124.5px] lg:min-h-[120px] lg:min-w-38 min-[72rem]:min-h-[124.5px] min-[72rem]:min-w-41.5 lg:col-span-2 lg:block sm:hidden hidden"><EachSkill SkillImage={Tailwind} SkillImageMono={TailwindMono} /></div>
                    <div onMouseEnter={() => SetSelected("JAVASCRIPT")} className="min-w-36 sm:min-w-41.5 min-h-[120px] sm:min-h-[124.5px] lg:min-h-[120px] lg:min-w-38 min-[72rem]:min-h-[124.5px] min-[72rem]:min-w-41.5 lg:block lg:col-span-1 lg:row-span-1 sm:hidden hidden"><EachSkill SkillImage={Js} SkillImageMono={JsMono} /></div>
                    <div onMouseEnter={() => SetSelected("TYPESCRIPT")} className="min-w-36 sm:min-w-41.5 min-h-[120px] sm:min-h-[124.5px] lg:min-h-[120px] lg:min-w-38 min-[72rem]:min-h-[124.5px] min-[72rem]:min-w-41.5 lg:block lg:col-span-1 lg:row-span-1 sm:hidden hidden"><EachSkill SkillImage={Ts} SkillImageMono={TsMono} /></div>
                    <div onMouseEnter={() => SetSelected("HTML")} className="min-w-36 sm:min-w-41.5 min-h-[120px] sm:min-h-[124.5px] lg:min-h-[120px] lg:min-w-38 min-[72rem]:min-h-[124.5px] min-[72rem]:min-w-41.5 sm:block lg:block lg:col-span-1 lg:row-span-1 sm:row-span-2 sm:col-span-1 block"><EachSkill SkillImage={HTML} SkillImageMono={HTMLMono} /></div>
                    {/* Stuff */}
                    <div onMouseEnter={() => SetSelected("REACT")} className="min-w-36 sm:min-w-41.5 min-h-[120px] sm:min-h-[124.5px] lg:min-h-[120px] lg:min-w-38 min-[72rem]:min-h-[124.5px] min-[72rem]:min-w-41.5 sm:col-span-2 sm:row-span-2 sm:block lg:hidden hidden"><EachSkill SkillImage={React} SkillImageMono={ReactMono} /></div>
                    <div onMouseEnter={() => SetSelected("TAILWIND")} className="min-w-36 sm:min-w-41.5 min-h-[120px] sm:min-h-[124.5px] lg:min-h-[120px] lg:min-w-38 min-[72rem]:min-h-[124.5px] min-[72rem]:min-w-41.5 sm:block lg:hidden sm:col-span-3 hidden"><EachSkill SkillImage={Tailwind} SkillImageMono={TailwindMono} /></div>
                    <div onMouseEnter={() => SetSelected("JAVASCRIPT")} className="min-w-36 sm:min-w-41.5 min-h-[120px] sm:min-h-[124.5px] lg:min-h-[120px] lg:min-w-38 min-[72rem]:min-h-[124.5px] min-[72rem]:min-w-41.5 sm:block lg:hidden sm:col-span-1"><EachSkill SkillImage={Js} SkillImageMono={JsMono} /></div>
                    <div onMouseEnter={() => SetSelected("TYPESCRIPT")} className="min-w-36 sm:min-w-41.5 min-h-[120px] sm:min-h-[124.5px] lg:min-h-[120px] lg:min-w-38 min-[72rem]:min-h-[124.5px] min-[72rem]:min-w-41.5 sm:block lg:hidden sm:col-span-1"><EachSkill SkillImage={Ts} SkillImageMono={TsMono} /></div>
                    <div onMouseEnter={() => SetSelected("TAILWIND")} className="min-w-36 sm:min-w-41.5 min-h-[120px] sm:min-h-[124.5px] lg:min-h-[120px] lg:min-w-38 min-[72rem]:min-h-[124.5px] min-[72rem]:min-w-41.5 sm:hidden sm:col-span-3 block"><EachSkill SkillImage={Tailwind} SkillImageMono={TailwindMono} /></div>
                    <div onMouseEnter={() => SetSelected("PYTHON")} className="min-w-36 sm:min-w-41.5 min-h-[120px] sm:min-h-[124.5px] lg:min-h-[120px] lg:min-w-38 min-[72rem]:min-h-[124.5px] min-[72rem]:min-w-41.5 sm:block lg:hidden sm:col-span-1 hidden"><EachSkill SkillImage={Python} SkillImageMono={PythonMono} /></div>
                    <div onMouseEnter={() => SetSelected("FIGMA")} className="min-w-36 sm:min-w-41.5 min-h-[120px] sm:min-h-[124.5px] lg:min-h-[120px] lg:min-w-38 min-[72rem]:min-h-[124.5px] min-[72rem]:min-w-41.5 sm:hidden sm:col-span-3 block"><EachSkill SkillImage={Figma} SkillImageMono={FigmaMono} /></div>
                    <div onMouseEnter={() => SetSelected("GITHUB")} className="min-w-36 sm:min-w-41.5 min-h-[120px] sm:min-h-[124.5px] lg:min-h-[120px] lg:min-w-38 min-[72rem]:min-h-[124.5px] min-[72rem]:min-w-41.5 sm:block lg:hidden sm:col-span-1"><EachSkill SkillImage={Github} SkillImageMono={GithubMono} /></div>
                    <div onMouseEnter={() => SetSelected("GIT")} className="min-w-36 sm:min-w-41.5 min-h-[120px] sm:min-h-[124.5px] lg:min-h-[120px] lg:min-w-38 min-[72rem]:min-h-[124.5px] min-[72rem]:min-w-41.5 sm:block lg:hidden sm:col-span-1"><EachSkill SkillImage={Git} SkillImageMono={GitMono} /></div>
                    <div onMouseEnter={() => SetSelected("FIGMA")} className="min-w-36 sm:min-w-41.5 min-h-[120px] sm:min-h-[124.5px] lg:min-h-[120px] lg:min-w-38 min-[72rem]:min-h-[124.5px] min-[72rem]:min-w-41.5 sm:block lg:hidden sm:col-span-1 hidden"><EachSkill SkillImage={Figma} SkillImageMono={FigmaMono} /></div>
                    <div onMouseEnter={() => SetSelected("PYTHON")} className="min-w-36 sm:min-w-41.5 min-h-[120px] sm:min-h-[124.5px] lg:min-h-[120px] lg:min-w-38 min-[72rem]:min-h-[124.5px] min-[72rem]:min-w-41.5 sm:hidden sm:col-span-3 block"><EachSkill SkillImage={Python} SkillImageMono={PythonMono} /></div>
                    <div onMouseEnter={() => SetSelected("C")} className="min-w-36 sm:min-w-41.5 min-h-[120px] sm:min-h-[124.5px] lg:min-h-[120px] lg:min-w-38 min-[72rem]:min-h-[124.5px] min-[72rem]:min-w-41.5 sm:block lg:hidden sm:col-span-1"><EachSkill SkillImage={C} SkillImageMono={CMono} /></div>
                    <div onMouseEnter={() => SetSelected("C++")} className="min-w-36 sm:min-w-41.5 min-h-[120px] sm:min-h-[124.5px] lg:min-h-[120px] lg:min-w-38 min-[72rem]:min-h-[124.5px] min-[72rem]:min-w-41.5 sm:block lg:hidden sm:col-span-1"><EachSkill SkillImage={Cpp} SkillImageMono={CppMono} /></div>
                    <div onMouseEnter={() => SetSelected("C-SHARP")} className="min-w-36 sm:min-w-41.5 min-h-[120px] sm:min-h-[124.5px] lg:min-h-[120px] lg:min-w-38 min-[72rem]:min-h-[124.5px] min-[72rem]:min-w-41.5 sm:block lg:hidden sm:col-span-1"><EachSkill SkillImage={Cs} SkillImageMono={CsMono} /></div>
                </div>
            </div>
            <hr />
        </>
    );
}
export default SkillsHome
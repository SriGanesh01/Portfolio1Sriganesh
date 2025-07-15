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

function SkillsHome() {
    return (
        <>
            <div className="flex justify-center items-center h-full xl:h-screen my-14 sm:h-full">
                <div className="grid grid-rows-5 grid-cols-2 xl:grid-cols-6 sm:grid-cols-3 xl:gap-4 gap-4 sm:gap-6 sm:w-[580px] xl:w-auto">
                    <div className="min-w-41.5 min-h-[124.5px] xl:row-span-2 xl:col-span-4 sm:col-span-3 col-span-2"></div>
                    <div className="min-w-41.5 min-h-[124.5px] xl:block xl:col-span-1 xl:row-span-1 sm:hidden hidden"><EachSkill SkillImage={Github} SkillImageMono={GithubMono} /></div>
                    <div className="min-w-41.5 min-h-[124.5px] xl:block xl:col-span-1 xl:row-span-1 sm:hidden hidden"><EachSkill SkillImage={Git} SkillImageMono={GitMono} /></div>
                    <div className="min-w-41.5 min-h-[124.5px] xl:block xl:col-span-1 xl:row-span-1 sm:hidden hidden"><EachSkill SkillImage={Figma} SkillImageMono={FigmaMono} /></div>
                    <div className="min-w-41.5 min-h-[124.5px] xl:row-span-2 xl:block sm:hidden hidden"><EachSkill SkillImage={Python} SkillImageMono={PythonMono} /></div>
                    <div className="min-w-41.5 min-h-[124.5px] xl:block xl:col-span-1 xl:row-span-1 sm:hidden hidden"><EachSkill SkillImage={Cs} SkillImageMono={CsMono} /></div>
                    <div className="min-w-41.5 min-h-[124.5px] xl:row-span-2 xl:col-span-2 sm:col-span-2 sm:row-span-2 col-span-2 row-span-2"><EachSkill SkillImage={Unity} SkillImageMono={UnityMono} /></div>
                    <div className="min-w-41.5 min-h-[124.5px] xl:row-span-2 xl:col-span-2 block xl:block sm:hidden col-span-2 row-span-2"><EachSkill SkillImage={React} SkillImageMono={ReactMono} /></div>
                    <div className="min-w-41.5 min-h-[124.5px] xl:block xl:col-span-1 xl:row-span-1 sm:hidden hidden"><EachSkill SkillImage={Cpp} SkillImageMono={CppMono} /></div>
                    <div className="min-w-41.5 min-h-[124.5px] sm:block sm:col-span-1 sm:row-span-2 xl:col-span-1 xl:row-span-1 block"><EachSkill SkillImage={Css} SkillImageMono={CssMono} /></div>
                    <div className="min-w-41.5 min-h-[124.5px] xl:block xl:col-span-1 xl:row-span-1 sm:hidden hidden"><EachSkill SkillImage={C} SkillImageMono={CMono} /></div>
                    <div className="min-w-41.5 min-h-[124.5px] xl:col-span-2 xl:block sm:hidden hidden"><EachSkill SkillImage={Tailwind} SkillImageMono={TailwindMono} /></div>
                    <div className="min-w-41.5 min-h-[124.5px] xl:block xl:col-span-1 xl:row-span-1 sm:hidden hidden"><EachSkill SkillImage={Js} SkillImageMono={JsMono} /></div>
                    <div className="min-w-41.5 min-h-[124.5px] xl:block xl:col-span-1 xl:row-span-1 sm:hidden hidden"><EachSkill SkillImage={Ts} SkillImageMono={TsMono} /></div>
                    <div className="min-w-41.5 min-h-[124.5px] sm:block xl:block xl:col-span-1 xl:row-span-1 sm:row-span-2 sm:col-span-1 block"><EachSkill SkillImage={HTML} SkillImageMono={HTMLMono} /></div>
                    {/* Stuff */}
                    <div className="min-w-41.5 min-h-[124.5px] sm:col-span-2 sm:row-span-2 sm:block xl:hidden hidden"><EachSkill SkillImage={React} SkillImageMono={ReactMono} /></div>
                    <div className="min-w-41.5 min-h-[124.5px] sm:block xl:hidden sm:col-span-3 hidden"><EachSkill SkillImage={Tailwind} SkillImageMono={TailwindMono} /></div>
                    <div className="min-w-41.5 min-h-[124.5px] sm:block xl:hidden sm:col-span-1"><EachSkill SkillImage={Js} SkillImageMono={JsMono} /></div>
                    <div className="min-w-41.5 min-h-[124.5px] sm:block xl:hidden sm:col-span-1"><EachSkill SkillImage={Ts} SkillImageMono={TsMono} /></div>
                    <div className="min-w-41.5 min-h-[124.5px] sm:hidden sm:col-span-3 block"><EachSkill SkillImage={Tailwind} SkillImageMono={TailwindMono} /></div>
                    <div className="min-w-41.5 min-h-[124.5px] sm:block xl:hidden sm:col-span-1 hidden"><EachSkill SkillImage={Python} SkillImageMono={PythonMono} /></div>
                    <div className="min-w-41.5 min-h-[124.5px] sm:hidden sm:col-span-3 block"><EachSkill SkillImage={Figma} SkillImageMono={FigmaMono} /></div>
                    <div className="min-w-41.5 min-h-[124.5px] sm:block xl:hidden sm:col-span-1"><EachSkill SkillImage={Github} SkillImageMono={GithubMono} /></div>
                    <div className="min-w-41.5 min-h-[124.5px] sm:block xl:hidden sm:col-span-1"><EachSkill SkillImage={Git} SkillImageMono={GitMono} /></div>
                    <div className="min-w-41.5 min-h-[124.5px] sm:block xl:hidden sm:col-span-1 hidden"><EachSkill SkillImage={Figma} SkillImageMono={FigmaMono} /></div>
                    <div className="min-w-41.5 min-h-[124.5px] sm:hidden sm:col-span-3 block"><EachSkill SkillImage={Python} SkillImageMono={PythonMono} /></div>
                    <div className="min-w-41.5 min-h-[124.5px] sm:block xl:hidden sm:col-span-1"><EachSkill SkillImage={C} SkillImageMono={CMono} /></div>
                    <div className="min-w-41.5 min-h-[124.5px] sm:block xl:hidden sm:col-span-1"><EachSkill SkillImage={Cpp} SkillImageMono={CppMono} /></div>
                    <div className="min-w-41.5 min-h-[124.5px] sm:block xl:hidden sm:col-span-1"><EachSkill SkillImage={Cs} SkillImageMono={CsMono} /></div>
                </div>
            </div>
            <hr />
        </>
    );
}
export default SkillsHome
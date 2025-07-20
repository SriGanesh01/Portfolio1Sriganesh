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

function EachProjectCard({ listofthing = [] }) {

    const MonoLogos = {
        "Github" : GithubMono,
        "Git" : GitMono,
        "Figma" : FigmaMono,
        "Python" : PythonMono,
        "Cs" : CsMono,
        "Unity" : UnityMono,
        "React" : ReactMono,
        "Cpp" : CppMono,
        "Css" : CssMono,
        "C" : CMono,
        "Tailwind" : TailwindMono,
        "Js" : JsMono,
        "Ts" : TsMono,
        "HTML" : HTMLMono
    }

    const ColouredLogos = {
        "Github" : Github,
        "Git" : Git,
        "Figma" : Figma,
        "Python" : Python,
        "Cs" : Cs,
        "Unity" : Unity,
        "React" : React,
        "Cpp" : Cpp,
        "Css" : Css,
        "C" : C,
        "Tailwind" : Tailwind,
        "Js" : Js,
        "Ts" : Ts,
        "HTML" : HTML
    }

    return (
        <>
            <div className="min-w-88 w-88 h-88 border-[5px] bg-[#EAE7C7]/20 border-[#EAE7C7]/40 rounded-3xl px-[5px] pb-[4.5px] pt-[4.9px]">
                <div className="h-full flex flex-col">
                    <div className="h-[109%] bg-[#EAE7C7]/30 rounded-t-[14px] border-[3.2px] relative">
                        <div className="flex h-100% gap-1 absolute bottom-0 pl-1 pb-1">
                            {
                                listofthing.map((element) => {
                                    return (
                                        <div key={element} className="h-6 w-6 rounded-full bg-[#EAE7C7]/30 relative">
                                            {/* {element} */}
                                            <img className="absolute" src={ColouredLogos[element]} alt={element} />
                                            <img className="absolute" src={MonoLogos[element]} alt={element} />
                                        </div>
                                    )
                                })
                            }

                        </div>
                    </div>
                    <div className="flex flex-col justify-between h-full">
                        <div className="pt-0.5">
                            <div className="flex flex-col justify-around">
                                <div className="font-ISans text-[22px] font-bold">
                                    Terminal Emulator
                                </div>
                                <div className="font-alata leading-none px-[1px]  text-[#EAE7C7]/50 text-[15.5px]">
                                    This is a Unity Asset to emulate a linux-like terminal with working commands for learning purposes
                                </div>
                            </div>

                        </div>
                        <div>
                            <button className="flex justify-center items-center cursor-pointer px-3 py-[7px] w-32 h-8.5 bg-[#EAE7C7] text-black rounded-bl-[14px] rounded-tl-[2.5px] rounded-br-[2.5px]" type="button">Source</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default EachProjectCard
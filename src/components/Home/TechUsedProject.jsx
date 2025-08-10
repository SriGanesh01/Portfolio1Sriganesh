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

import { useEffect, useRef, useState } from 'react'

function TechUsedProject({element}) {

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

    const [Hov, SetHov] = useState(false);

    const Monochroma = useRef()
    const Fullchroma = useRef()

    useEffect(() => {
        if (Hov) {
            Fullchroma.current.classList.add('reductor')
            Fullchroma.current.classList.remove('increasori')
            Monochroma.current.classList.add('increasor')
            Monochroma.current.classList.remove('reductori')
        }
        else {
            Fullchroma.current.classList.add('increasori')
            Fullchroma.current.classList.remove('reductor')
            Monochroma.current.classList.add('reductori')
            Monochroma.current.classList.remove('increasor')
        }
    }, [Hov])


    return (
        <>
            <div key={element} className="backdrop-blur-[1px] h-6 w-6 rounded-full bg-[#EAE7C7]/30 relative " onMouseEnter={() => SetHov(true)} onMouseOut={() => SetHov(false)}>
                {/* {element} */}
                <img ref={Fullchroma} className="absolute reductor" src={ColouredLogos[element]} alt={element} />
                <img ref={Monochroma} className="absolute increasor" src={MonoLogos[element]} alt={element} />
            </div>
        </>
    );
}

export default TechUsedProject
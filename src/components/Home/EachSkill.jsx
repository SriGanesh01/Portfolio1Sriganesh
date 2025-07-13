
import { useEffect, useReducer, useRef, useState } from 'react';

function EachSkill({SkillImage, SkillImageMono}) {

    const Opacity = useRef();
    const InverseOpacity = useRef();

    const [HoverState, SetHoverState] = useState(0)

    useEffect(() => {
        if (HoverState === 1)
        {
            Opacity.current.classList.add('rop')
            Opacity.current.classList.remove('op')
            InverseOpacity.current.classList.add('op')
            InverseOpacity.current.classList.remove('rop')
        }
        else if (HoverState === 0)
        {
            Opacity.current.classList.add('op')
            Opacity.current.classList.remove('rop')
            InverseOpacity.current.classList.add('rop')
            InverseOpacity.current.classList.remove('op')
        }
        
    }, [HoverState])



    return (
        <>
            <div className="w-full h-full border-[5px] bg-[#EAE7C7]/20 border-[#EAE7C7]/40 rounded-3xl flex flex-col items-center justify-center" onMouseEnter={() => SetHoverState(1)} onMouseLeave={() => SetHoverState(0)} >
                <div className='w-full relative h-full flex items-center justify-center'>
                    <div className='relative w-full h-full spoon transform flex justify-center items-center' >
                        <img ref={Opacity} className='absolute rop w-full h-full p-2' src={SkillImage} alt="" />
                        <img ref={InverseOpacity} className='absolute op w-full h-full p-2' src={SkillImageMono} alt="" />
                    </div>

                </div>
            </div>
        </>
    );
}
export default EachSkill
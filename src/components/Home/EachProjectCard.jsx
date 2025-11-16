import TechUsedProject from './TechUsedProject'

import { FaArrowRightLong } from "react-icons/fa6";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaExternalLinkAlt } from "react-icons/fa";

import { useState } from 'react'


function EachProjectCard({ listofthing = [], listofCarosell = [], title = "Placeholder project", description = "This is a Placeholder Description", source = "https://github.com/", redirect = "https://innovixity.com/" }) {

    const [ShownCarosel, SetShownCarosel] = useState(0)
    const [percent, Setpercent] = useState(100)
    // let percent = 100
    // let ShownCarosel = 1

    function Next() {
        if (ShownCarosel != (listofCarosell.length - 1)) {
            SetShownCarosel(ShownCarosel + 1)
        }
        else {

            Setpercent(percent + 30)
            setTimeout(() => {

                Setpercent(100)
            }, 200);
        }
    }

    function Prev() {
        if (ShownCarosel != 0) {
            SetShownCarosel(ShownCarosel - 1)
        }
        else {
            SetShownCarosel(-1)
            Setpercent(percent)
            setTimeout(() => {
                SetShownCarosel(0)
                Setpercent(100)
            }, 200);
        }
    }

    return (
        <>
            <div className="sm:mx-7 lg:mx-0 w-full min-w-[22rem] flex-1 h-88 max-[23.5rem]:min-w-75 max-[23.5rem]:w-75 max-[23.5rem]:h-88 border-[5px] bg-[#EAE7C7]/20 border-[#EAE7C7]/40 rounded-3xl px-[5px] pb-[4.5px] pt-[4.9px]">
                <div className="h-full flex flex-col">
                    <div className="h-[109%]  bg-[#EAE7C7]/30 rounded-t-[14px] border-[3.2px]  relative lika overflow-scroll ">
                        <div className='w-full max-h-[100%] object-contain overflow-clip absolute flex'>
                            {
                                listofCarosell.map((element) => {
                                    return (
                                        <img
                                            style={{ transform: `translateX(${-ShownCarosel * percent}%)` }}

                                            className={`w-full object-cover overflow-cover transition-transform duration-1250 ease`} src={element} alt={element}
                                        />
                                    )
                                }
                                )
                            }
                        </div>
                        <div className="flex h-100% gap-1 absolute bottom-0 mx-1 my-1 z-50">
                            {
                                listofthing.map((element) => {
                                    return (
                                        <TechUsedProject element={element} />
                                    )
                                })
                            }
                        </div>
                        <div className='flex w-full px-1 absolute top-[42%] justify-between'>
                            <div className={`h-8 w-8 cursor-pointer rounded-full backdrop-blur-[1px] ${(ShownCarosel > 0) ? "bg-[#EAE7C7]/94" : "bg-[#EAE7C7]/30"}`} onClick={() => Prev()} >
                                <div className='flex h-full justify-center items-center'>
                                    <FaArrowLeftLong className={` ${(ShownCarosel > 0) ? "text-black" : "text-[#EAE7C7]"}`} />
                                </div>
                            </div>
                            <div className={`h-8 w-8 cursor-pointer rounded-full backdrop-blur-[1px] ${ShownCarosel != (listofCarosell.length - 1) ? "bg-[#EAE7C7]/94" : "bg-[#EAE7C7]/30"}`} onClick={() => Next()} >
                                <div className='flex h-full justify-center items-center'>
                                    <FaArrowRightLong className={`${ShownCarosel != (listofCarosell.length - 1) ? "text-black" : "text-[#EAE7C7]"}`} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col justify-between h-full">
                        <div className="pt-0.5">
                            <div className="flex flex-col justify-around">
                                <div className='flex justify-between h-full'>
                                    <div className="font-ISans text-[22px] font-bold">
                                        {title}
                                    </div>
                                    <div className='flex items-center text-[15px]'>
                                        <a href={redirect}>
                                            <FaExternalLinkAlt />
                                        </a>
                                    </div>
                                </div>
                                <div className="font-alata leading-none px-[1px] text-[#EAE7C7]/50 text-[15.5px]">
                                    {description}
                                </div>
                            </div>

                        </div>
                        <div>
                            <a href={source} target='_blank'>
                                <button className="flex justify-center items-center cursor-pointer px-3 py-[7px] w-32 h-8.5 bg-[#EAE7C7] text-black rounded-bl-[14px] rounded-tl-[2.5px] rounded-br-[2.5px]" type="button">Source</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default EachProjectCard
import TechUsedProject from './TechUsedProject'

function EachProjectCard({ listofthing = [] }) {

    

    

    return (
        <>
            <div className="min-w-88 w-88 h-88 border-[5px] bg-[#EAE7C7]/20 border-[#EAE7C7]/40 rounded-3xl px-[5px] pb-[4.5px] pt-[4.9px]">
                <div className="h-full flex flex-col">
                    <div className="h-[109%] bg-[#EAE7C7]/30 rounded-t-[14px] border-[3.2px]  relative lika overflow-scroll ">
                        <div className="flex h-100% gap-1 absolute bottom-0 mx-1 my-1">
                            {
                                listofthing.map((element) => {
                                    return (
                                        <TechUsedProject element={element} />
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
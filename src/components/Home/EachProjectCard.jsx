

function EachProjectCard() {
    return (
        <>
            <div className="min-w-88 w-88 h-88 border-[5px] bg-[#EAE7C7]/20 border-[#EAE7C7]/60 rounded-3xl px-[5px] pb-[4.5px] pt-[4.9px]">
                <div className="h-full flex flex-col">
                    <div className="h-[109%] bg-[#EAE7C7]/30 rounded-t-[14px] border-[3.2px]">

                    </div>
                    <div className="flex flex-col justify-between h-full">
                        <div>
                            <div>
                                Terminal Emulator
                            </div>
                            <div>
                                This is a Unity Asset to emulate a linux-like terminal with working commands for learning purposes
                            </div>
                        </div>
                        <div>
                            <button className="cursor-pointer px-3 py-2 w-32 bg-[#EAE7C7] text-black rounded-bl-[14px] rounded-tl-[2.5px] rounded-br-[2.5px]" type="button">Source</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default EachProjectCard
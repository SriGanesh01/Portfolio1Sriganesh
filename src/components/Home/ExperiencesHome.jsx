
import EachExperienceCard from "./EachExperienceCard";

function ExperiencesHome() {
    return (
        <>
            <div className="flex flex-col items-center justify-center my-14 mx-14">
                <div className="flex h-full w-screen justify-center items-center">
                    <div className="leading-none font-primary min-[72rem]:text-[185px] md:text-[150px] sm:text-[100px] text-[60px] pb-[-12px] pt-9 sm:pt-0">EXPERIENCES</div>
                </div>

                <div className="max-w-[1120px]  w-full py-7">
                    <EachExperienceCard />

                    <div className="flex w-full justify-end items-end justify-items-end mb-12">
                        View More ---
                    </div>
                </div>
            </div>
        </>
    )
}

export default ExperiencesHome;
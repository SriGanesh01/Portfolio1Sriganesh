
import EachExperienceCard from "./EachExperienceCard";

function ExperiencesHome() {
    return (
        <>
            <div className="">
                <div className="">
                    <div className="leading-none font-primary ">EXPERIENCES</div>
                </div>

                <div className=" w-full py-7">
                    <EachExperienceCard />

                    
                </div>

                <div className="flex w-full justify-end items-end justify-items-end mb-12">
                    View More ---
                </div>
            </div>

            <hr className="w-[100vw] ml-[calc(-50vw+50%)]"/>
        </>
    )
}

export default ExperiencesHome;
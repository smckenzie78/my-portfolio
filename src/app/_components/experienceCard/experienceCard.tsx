import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './experienceCard.css'
import { faBriefcase } from '@fortawesome/free-solid-svg-icons'
import { poppins } from "@/app/layout";
import { opensans } from "@/app/layout";

export default function ExperienceCard() {
    return(
        <>
            <div className="flex">
                <div className="bulletpoint flex justify-center items-center text-"><FontAwesomeIcon icon={faBriefcase} /></div>
                <div className="flex w-full flex-col pl-5">
                    <div className={`${opensans.className} bg-[#303030] uppercase text-[12px] font-[700] rounded-full text-center w-[40%] text-[#a8a8a8]`}>Jul 2023 — Present</div>
                    <div className="experience flex flex-col mt-3 gap-1">
                        <h1 className={`${poppins.className} uppercase font-[400] text-[18px]`}>Associate Software Engineer</h1>
                        <p className={`${opensans.className} text-[16px] font-[300]`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent fermentum placerat hendrerit. Fusce posuere neque et nulla gravida, sit amet tincidunt lectus tincidunt.</p>
                    </div>
                </div>
            </div>
        </>
    )
}
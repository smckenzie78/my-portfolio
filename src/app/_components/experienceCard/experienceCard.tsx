import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './experienceCard.css'
import { faBriefcase } from '@fortawesome/free-solid-svg-icons'
import { poppins } from "@/app/layout";

type ExperienceCardProps = {
    duration: string
    title: string
    company: string
    desc: string
}

export default function ExperienceCard(props: ExperienceCardProps) {
    return(
        <>
            <div className="flex">
                <div className="bulletpoint flex justify-center items-center text-"><FontAwesomeIcon icon={faBriefcase} /></div>
                <div className="flex w-full flex-col pl-5">
                    <div className={`${poppins.className} bg-[#303030] uppercase text-[12px] font-[700] rounded-full text-center w-[50%] text-[#a8a8a8]`}>{props.duration}</div>
                    <div className="experience flex flex-col mt-3 gap-1">
                        <h1 className={`${poppins.className} uppercase font-[400] text-[18px]`}>{props.title}<span className='text-[#a8a8a8] text-[14px]'> - <span className='underline'>{props.company}</span></span></h1>
                        <p className={`${poppins.className} text-[16px] font-[300]`}>{props.desc}</p>
                    </div>
                </div>
            </div>
        </>
    )
}
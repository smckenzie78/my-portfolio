'use client'
import React from "react";
import { poppins } from "@/app/layout";
import ExperienceCard from "@/app/_components/experienceCard/experienceCard";


export default function About(){
    return (
        <>
            <div className="flex flex-col items-center mt-10 w-full">
                <h1 className={`${poppins.className} uppercase text-center leading-15 font-[900] text-[52px] z-1`}>About<span className="text-cyan-600"> Me</span></h1>
                <h1 className={`${poppins.className} uppercase text-center leading-15 font-[900] text-[#303030] text-[80px] absolute z-0`}>About Me</h1>
            </div>
            <div className="h-[380px] flex w-full justify-center">
                <div className="w-[630px] h-[380px] leading-10 py-15 px-15">
                    <h1 className={`${poppins.className} uppercase text-center text-2xl leading-15 font-[600]`}>My Info</h1>
                    <div className="flex justify-between">
                        <div><p><span className="text-[#a8a8a8]">First Name:</span> Sacha</p><p><span className="text-[#a8a8a8]">Last Name:</span> McKenzie</p></div>
                        <div className="text-right"><p><span className="text-[#a8a8a8]">Location:</span> Florida, United States</p><p><span className="text-[#a8a8a8]">Email:</span> smckenzieuk@gmail.com</p></div>
                    </div>
                        <p className="text-center "><span className="text-[#a8a8a8]">Hobbies:</span> Running, Gym, Gaming, Traveling</p>
                </div>
                <div className="w-[550px] h-[380px] grid grid-cols-2 gap-4 px-5 pt-15">
                    <div className="border-1 border-[#565656] rounded-xl px-8 py-5">
                        <h1 className={`${poppins.className} uppercase text-cyan-600 text-5xl leading-15 font-[700]`}>2+</h1>
                        <div className="flex gap-2">
                            <h2 className={`${poppins.className} uppercase`}>—</h2>
                            <h2 className={`${poppins.className} uppercase`}>Years of<br/>experience</h2>
                        </div> 
                    </div>
                    <div className="border-1 border-[#565656] rounded-xl px-8 py-5">
                        <h1 className={`${poppins.className} text-cyan-600 text-5xl leading-15 font-[700]`}>React</h1>
                        <div className="flex gap-2">
                            <h2 className={`${poppins.className} uppercase`}>—</h2>
                            <h2 className={`${poppins.className} uppercase`}>Next.js<br/>TypeScript</h2>
                        </div> 
                    </div>
                    <div className="border-1 border-[#565656] rounded-xl px-8 py-5">
                        <h1 className={`${poppins.className} text-cyan-600 text-5xl leading-15 font-[700]`}>Azure</h1>
                        <div className="flex gap-2">
                            <h2 className={`${poppins.className} uppercase`}>—</h2>
                            <h2 className={`${poppins.className} uppercase`}>Webapps<br/>DEVOPS, PIPELINES</h2>
                        </div> 
                    </div>
                    <div className="border-1 border-[#565656] rounded-xl px-8 py-5">
                        <h1 className={`${poppins.className} uppercase text-cyan-600 text-5xl leading-15 font-[700]`}>SQL</h1>
                        <div className="flex gap-2">
                            <h2 className={`${poppins.className} uppercase`}>—</h2>
                            <h2 className={`${poppins.className} uppercase`}>Postgresql<br/>api integration</h2>
                        </div> 
                    </div>
                </div>
            </div> 
            <div className="h-[60%] w-full flex flex-col justify-center mt-30">
                <div className="flex justify-between h-[80%] w-[70%] self-center">
                    <div className="flex flex-col gap-5 w-[500px]">
                        <h1 className={`${poppins.className} uppercase text-center text-2xl leading-15 font-[600]`}>Experience</h1>
                        <ExperienceCard 
                            duration="dec 2024 — present"
                            title="Associate Software Engineer"
                            company="Citizens Property Insurance"
                            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eu sapien id nisi faucibus varius eget vel eros. Maecenas vestibulum ex risus. Sed consectetur diam id nisl maximus congue."
                        />
                        <ExperienceCard 
                            duration="jul 2023 — dec 2024"
                            title="Software Engineer Intern"
                            company="Citizens Property Insurance"
                            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eu sapien id nisi faucibus varius eget vel eros. Maecenas vestibulum ex risus. Sed consectetur diam id nisl maximus congue."
                        />
                        <ExperienceCard 
                            duration="jun 2022 — aug 2022"
                            title="IT Intern"
                            company="Kemper"
                            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eu sapien id nisi faucibus varius eget vel eros. Maecenas vestibulum ex risus. Sed consectetur diam id nisl maximus congue."
                        />
                    </div>
                    <div className="flex flex-col gap-5 w-[500px]">
                        <h1 className={`${poppins.className} uppercase text-center text-2xl leading-15 font-[600]`}>Education</h1>
                        <ExperienceCard 
                            duration="MAY 2023"
                            title="Bachelor Degree"
                            company="University of North Florida"
                            desc="Information Technology"
                        />
                    </div>
                </div>
                
            </div>
        </>
    );
}
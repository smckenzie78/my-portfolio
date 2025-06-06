'use client'
import React from "react";
import Navbar from "@/app/_components/navbar/navbar";
import { poppins } from "@/app/layout";
import { opensans } from "@/app/layout";
import ExperienceCard from "@/app/_components/experienceCard/experienceCard";


export default function About(){
    return (
        <>
            <div className="h-[40%] flex flex-col items-center">
                <h1 className={`${poppins.className} uppercase text-right leading-15 font-[700] text-[46px] mt-10 z-1`}>About<span className="text-cyan-600"> Me</span></h1>
                <h1 className={`${poppins.className} uppercase text-right leading-15 font-[700] text-[#303030] text-[80px] mt-10 absolute z-0`}>About Me</h1>
                <div className="h-[100%] flex w-full justify-center">
                    <div className="w-[30%] py-25 leading-10 px-15">
                        <h1 className={`${poppins.className} uppercase text-center text-2xl leading-15 font-[600]`}>My Info</h1>
                        <div className="flex justify-between">
                            <div><p><span className="text-[#a8a8a8]">First Name:</span> Sacha</p><p><span className="text-[#a8a8a8]">Last Name:</span> McKenzie</p></div>
                            <div className="text-right"><p><span className="text-[#a8a8a8]">Location:</span> Florida, United States</p><p><span className="text-[#a8a8a8]">Email:</span> smckenzieuk@gmail.com</p></div>
                        </div>
                        <p className="text-center "><span className="text-[#a8a8a8]">Hobbies:</span> Running, Gym, Gaming, Traveling</p>
                    </div>
                    <div className="w-[30%] grid grid-cols-2 gap-4 px-5 py-15">
                        <div className="border-1 border-[#565656] rounded-xl"></div>
                        <div className="border-1 border-[#565656] rounded-xl"></div>
                        <div className="border-1 border-[#565656] rounded-xl"></div>
                        <div className="border-1 border-[#565656] rounded-xl"></div>
                    </div>
                </div>
            </div>
            <div className="h-[60%] w-full flex flex-col justify-center mb-20">
                <div className="flex justify-around h-[80%] w-[70%] px-10 self-center">
                    <div className="flex flex-col gap-5 w-[35%]">
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
                    <div className="flex flex-col gap-5 w-[35%]">
                        <h1 className={`${poppins.className} uppercase text-center text-2xl leading-15 font-[600]`}>Education</h1>
                        <ExperienceCard 
                            duration="MAY 2023"
                            title="Bachelor Degree"
                            company="University of North Florida"
                            desc="Information Technology"
                        />
                    </div>
                </div>
                <div id="navbar" className="fixed top-0 right-[3%]">
                    <Navbar />
                </div>
            </div>
        </>
    );
}
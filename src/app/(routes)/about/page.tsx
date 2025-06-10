import React from "react";
import ExperienceCard from "@/app/_components/experienceCard/experienceCard";


export default function About(){
    return (
        <>
            <div className="flex flex-col items-center mt-10 w-full">
                <h1 className={` uppercase text-center leading-15 font-[900] lg:text-[52px] text-[40px] z-1`}>About<span className="text-cyan-600"> Me</span></h1>
                <h1 className={` uppercase text-center leading-15 font-[900] text-[#303030] lg:text-[80px] text-[50px] absolute z-0`}>About Me</h1>
            </div>
            <div className="lg:h-[380px] mt-0  w-full justify-center flex flex-col items-center h-[800px]  lg:items-start lg:flex-row xl:px-30">
                <div className="sm:w-[630px] flex flex-col items-center lg:h-[380px] lg:leading-12 lg:py-15 lg:px-15 h-[380px] py-0 px-0 sm:leading-10 w-full">
                    <h1 className={` uppercase text-center text-2xl lg:leading-15 font-[600] sm:leading-10`}>My Info</h1>
                    <div className="lg:w-[700px] bg-white lg:h-[95%] w-[200px] h-[200px] relative rounded-full lg:rounded-xl border-[3px] border-[#565656] lg:border-0 lg:hidden mt-4 lg:mt-0" style={{overflow: 'hidden'}}>
                        <img className="object-cover h-[100%] w-[100%]"
                            src="./meTemp.jpeg"
                            loading="lazy"
                            alt="hero"
                        />
                    </div>
                    <div className="flex sm:justify-between justify-around lg:w-full w-[90%] sm:text-[16px] text-[14px] mt-4 lg:mt-0">
                        <div><p className="flex flex-col sm:block"><span className="text-[#a8a8a8]">First Name:</span> Sacha</p><p className="flex flex-col sm:block"><span className="text-[#a8a8a8]">Last Name:</span> McKenzie</p></div>
                        <div className="text-right"><p className="flex flex-col sm:block"><span className="text-[#a8a8a8]">Location:</span> Florida, United States</p><p className="flex flex-col sm:block"><span className="text-[#a8a8a8]">Email:</span> smckenzieuk@gmail.com</p></div>
                    </div>
                        <p className="flex flex-col text-center sm:block sm:text-[16px] text-[14px]"><span className="text-[#a8a8a8]">Hobbies:</span> Running, Gym, Gaming, Traveling</p>
                </div>
                <div className="lg:w-[550px] lg:h-[380px] grid grid-cols-2 gap-4 px-5 lg:pt-15 w-full pt-7">
                    <div className="border-1 border-[#565656] rounded-xl sm:px-8 px-5 py-5">
                        <h1 className={` uppercase text-cyan-600 sm:text-5xl text-5xl leading-15 font-[700]`}>2+</h1>
                        <div className="flex gap-2">
                            <h2 className={`uppercase sm:text-[16px] text-[14px]`}>—</h2>
                            <h2 className={`uppercase sm:text-[16px] text-[14px]`}>Years of<br/>experience</h2>
                        </div> 
                    </div>
                    <div className="border-1 border-[#565656] rounded-xl sm:px-8 px-5 py-5">
                        <h1 className={` text-cyan-600 sm:text-5xl text-4xl leading-15 font-[700]`}>React</h1>
                        <div className="flex gap-2">
                            <h2 className={` uppercase sm:text-[16px] text-[14px]`}>—</h2>
                            <h2 className={` uppercase sm:text-[16px] text-[14px]`}>Next.js<br/>TypeScript</h2>
                        </div> 
                    </div>
                    <div className="border-1 border-[#565656] rounded-xl sm:px-8 px-5 py-5">
                        <h1 className={` text-cyan-600 sm:text-5xl text-4xl leading-15 font-[700]`}>Azure</h1>
                        <div className="flex gap-2">
                            <h2 className={`uppercase sm:text-[16px] text-[14px]`}>—</h2>
                            <h2 className={`uppercase sm:text-[16px] text-[14px]`}>Webapps<br/>DEVOPS, PIPELINES</h2>
                        </div> 
                    </div>
                    <div className="border-1 border-[#565656] rounded-xl sm:px-8 px-5 py-5">
                        <h1 className={` uppercase text-cyan-600 sm:text-5xl text-4xl leading-15 font-[700]`}>SQL</h1>
                        <div className="flex gap-2">
                            <h2 className={`uppercase sm:text-[16px] text-[14px]`}>—</h2>
                            <h2 className={`uppercase sm:text-[16px] text-[14px]`}>Postgresql<br/>api integration</h2>
                        </div> 
                    </div>
                </div>
            </div> 
            <div className="h-[1500px] sm:h-[900px] w-full flex flex-col sm:justify-center mt-0">
                <div className="flex sm:justify-around h-[80%] w-[70%] self-center lg:items-start items-center lg:flex-row flex-col">
                    <div className="flex flex-col gap-5 sm:w-[500px]">
                        <h1 className={` uppercase text-center text-2xl leading-15 font-[600]`}>Experience</h1>
                        <ExperienceCard 
                            duration="dec 2024 — present"
                            title="Associate Software Engineer"
                            company="Citizens Property Insurance"
                            desc=" Contributed to a full-stack web application by developing reusable UI components and implementing RESTful API integrations to support business-critical features such as agent lookup and compliance verification."
                        />
                        <ExperienceCard 
                            duration="jul 2023 — dec 2024"
                            title="Software Engineer Intern"
                            company="Citizens Property Insurance"
                            desc="Participated in the full software development life cycle, including daily meetings, iterative development, estimations, and design sessions. Also served as a point of contact with our business partners to troubleshoot and resolve real-time production issues."
                        />
                        <ExperienceCard 
                            duration="jun 2022 — aug 2022"
                            title="IT Intern"
                            company="Kemper"
                            desc=" Collaborated with fellow interns to leverage RPA technology to automate a tedious business process as our main deliverable for the summer. We documented our RPA solution and created a user guide for future developers."
                        />
                    </div>
                    <div className="flex flex-col gap-5 sm:w-[500px] lg:mt-0 mt-10">
                        <h1 className={` uppercase text-center text-2xl leading-15 font-[600]`}>Education</h1>
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

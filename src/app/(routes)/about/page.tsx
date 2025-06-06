import Navbar from "@/app/_components/navbar/navbar";
import { poppins } from "@/app/layout";
import { opensans } from "@/app/layout";
import ExperienceCard from "@/app/_components/experienceCard/experienceCard";


export default function About(){
    return (
        <main className="h-[100vh] w-full flex flex-col mx-20 justify-center">
            <div className=" flex flex-col h-[80%] w-[30%] px-15">
                <h1 className={`${poppins.className} uppercase text-center text-2xl leading-15 font-[600] mb-7`}>Experience</h1>
                <div className="flex flex-col gap-10">
                    <ExperienceCard />
                    <ExperienceCard />
                </div>
            </div>
            <div id="navbar" className="fixed top-0 right-[3%]">
                <Navbar />
            </div>
        </main>
    );
}
'use client'
import Navbar from "@/app/_components/navbar/navbar";
import { poppins } from "@/app/layout";
import { opensans } from "@/app/layout";
import FillButton from "@/app/_components/fillButton/fillButton";


export default function Contact(){
    return (
        <>
            <div className="flex flex-col items-center mt-10 w-full">
                <h1 className={`${poppins.className} uppercase text-center leading-15 font-[900] text-[52px] z-1`}>Contact<span className="text-cyan-600"> Me</span></h1>
                <h1 className={`${poppins.className} uppercase text-center leading-15 font-[900] text-[#303030] text-[80px] absolute z-0`}>Contact</h1>
            </div>
            <div className="h-[80vh] flex w-full justify-center mt-20 gap-20 ">
                <div className="flex flex-col w-[350px] gap-5">
                    <h1 className={`${poppins.className} uppercase text-2xl font-[600]`}>Be not afraid</h1>
                    <p>Looking for a partner who can bring fresh ideas to your projects? I'm the developer you need! I'm always excited to hear about new projects and explore how I can contribute to your success. Don't hesitate to reach out to me and let's collaborate to make your visions a reality. Contact me today and let's get started!</p>
                </div>
                <div className="flex flex-col w-[700px] gap-3 ">
                    <div className="bg-[#303030] rounded-xl w-[50%] h-[50px] text-[#a8a8a8] flex flex-col">
                        <input type="email" placeholder="YOUR EMAIL" className={`${poppins.className} h-[100%] rounded-xl px-7 font-[200] outline-[0px] focus:outline-[1px] focus:outline-cyan-600`}></input>
                    </div>
                    <div className="bg-[#303030] rounded-xl w-[100%] h-[50px] text-[#a8a8a8] flex flex-col">
                        <input type="text" placeholder="YOUR SUBJECT" className={`${poppins.className} h-[100%] rounded-xl px-7 font-[200] outline-[0px] focus:outline-[1px] focus:outline-cyan-600`}></input>
                    </div>
                    <div className=" rounded-xl w-[100%] h-[300px] text-[#a8a8a8] flex flex-col">
                        <textarea placeholder="YOUR MESSAGE" className={`${poppins.className} bg-[#303030] h-[100%] rounded-lg px-7 py-5 font-[200] outline-[0px] focus:outline-[1px] focus:outline-cyan-600 resize-none`}></textarea>
                        <div className="border-1 border-cyan-600 h-[55px] w-[45%] rounded-full mt-5">
                            <FillButton 
                            text="Send Message"
                            function="email"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
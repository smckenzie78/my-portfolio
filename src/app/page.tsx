import Navbar from "@/app/_components/navbar/navbar";
import { poppins } from "@/app/layout";
import { opensans } from "@/app/layout";
import Image from "next/image";
import FillButton from "./_components/fillButton/fillButton";
import React, { Component } from "react";

export default function Home(){
    return (
        <main className="h-[100vh] w-full flex flex-col mx-20 justify-center">
            
            <div className="h-[90%] w-full flex gap-40 items-center">
                <div className="bg-white h-full w-[33%] relative" style={{borderRadius: '32px', overflow: 'hidden'}}>
                    <Image
                        src="/meTemp.jpeg"
                        fill
                        alt="Picture of me"
                    />
                </div>
                <div className=" w-[30%] flex flex-col gap-7">
                    <h1 className={`${poppins.className} uppercase text-right leading-15 font-[700] text-[46px]`}>
                        <span className="text-cyan-600">— I'm Sacha McKenzie</span>
                        <br/>
                        Software Developer
                    </h1>
                    <p className={`${opensans.className} leading-8 text-[16px]`}>I'm a United States based software developer with a knack for problem solving and a passion for programming. I enjoy delivering real value through my work.</p>
                    <div className="uppercase flex justify-center items-center border-1 border-cyan-600 h-[55px] w-[45%] rounded-full">
                        <FillButton />
                    </div>
                </div>
                <div id="navbar" className="fixed top-0 right-[3%]">
                    <Navbar />
                </div>
            </div>
        </main>
    );
}
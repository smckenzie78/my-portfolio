'use client'
import { poppins } from "@/app/layout";
import { opensans } from "@/app/layout";
import Image from "next/image";
import DownloadButton from "@/app/_components/downloadButton/downloadButton";
import React, { Component } from "react";

export default function Home(){
    return (
        <>
            <div className="h-[100vh] w-[100%] flex  items-center pl-[30px]">
                <div className="w-[700px] bg-white h-[95%] relative" style={{borderRadius: '32px', overflow: 'hidden'}}>
                    <img className="object-cover h-[100%] w-[100%]"
                        src="./meTemp.jpeg"
                        loading="lazy"
                    />
                </div>
                <div className=" w-[766px] flex flex-col gap-7 pr-50 ml-50">
                    <h1 className={`${poppins.className} uppercase text-right leading-15 font-[700] text-[46px]`}>
                        <span className="text-cyan-600">— I'm Sacha McKenzie</span>
                        <br/>
                        Software Developer
                    </h1>
                    <p className={`${opensans.className} leading-8 text-[16px]`}>I'm a United States based software developer with a knack for problem solving and a passion for programming. I enjoy delivering real value through my work.</p>
                    <div className="uppercase flex justify-center items-center border-1 border-cyan-600 h-[55px] w-[300px] rounded-full">
                        <DownloadButton
                            text= "Download CV"
                            file="./file.txt"
                        />
                    </div>
                </div>
            </div>
        </>
    );
}
import "./downloadButton.css"
import React, { Component } from "react";
import { poppins } from "@/app/layout";


type fillButtonProps = {
    text: string
    file: string
}

export default function DownloadButton(props: fillButtonProps) {
    return(
        <a className={`liquid ${poppins.className} leading-8 font-[700] h-full w-full flex justify-center items-center rounded-full`} href={props.file} download="file.txt">{props.text}</a>
    );
}
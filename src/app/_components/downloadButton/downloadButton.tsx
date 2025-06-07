import "./downloadButton.css"
import React, { Component } from "react";


type fillButtonProps = {
    text: string
    file: string
}

export default function DownloadButton(props: fillButtonProps) {
    return(
        <a className={`liquid leading-8 font-[700] h-full w-full flex justify-center items-center rounded-full`} href={props.file} download="file.txt">{props.text}</a>
    );
}
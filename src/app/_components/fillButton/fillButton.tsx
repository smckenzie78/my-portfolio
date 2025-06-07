import "./fillButton.css"
import React, { Component } from "react";
import { poppins } from "@/app/layout";

type fillButtonProps = {
    text: string
    function: string
}

export default function FillButton(props: fillButtonProps) {
    return(
        <button className={`liquid ${poppins.className} leading-8 font-[700] h-full w-full flex justify-center items-center rounded-full`} type="submit">{props.text}</button>
    );
}
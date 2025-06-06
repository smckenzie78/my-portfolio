import "./fillButton.css"
import React, { Component } from "react";
import { opensans } from "@/app/layout";

export default function FillButton() {
    return(
        <p className={`liquid ${opensans.className} leading-8 font-[700] h-full w-full flex justify-center items-center rounded-full`}>Download CV</p>
    );
}
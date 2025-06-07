import "./fillButton.css"
import React, { Component } from "react";

type fillButtonProps = {
    text: string
    function: string
}

export default function FillButton(props: fillButtonProps) {
    return(
        <button className={`liquid leading-8 font-[700] h-full w-full flex justify-center items-center rounded-full`} type="submit">{props.text}</button>
    );
}
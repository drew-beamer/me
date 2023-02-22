'use client';
import { useState, useEffect } from "react";

export default function ScrambleText({ text }) {
    const goalText = text
    const [headlineText, setHeadlineText] = useState("DREW BEAMER");

    function generateRandomString(length: number): string {
        const RANDOM_LETTERS = "1234567890!#$%^&*";
        let randomString = ""
        for (let i = 0; i < length; i++) {
            randomString += RANDOM_LETTERS.charAt(Math.floor(RANDOM_LETTERS.length * Math.random()))
        }
        return randomString
    }

    useEffect(() => {
        let timesRun = 0;
        const interval = setInterval(() => {
            if (timesRun === goalText.length + 1) {
                clearInterval(interval);
            } else {
                const newString = goalText.substring(0, timesRun) + generateRandomString(goalText.length - timesRun);
                setHeadlineText(newString);
            }
            timesRun += 1;
        }, 75)
    }, [])


    return <h1><span className="text-green-400">{headlineText}</span></h1>
}
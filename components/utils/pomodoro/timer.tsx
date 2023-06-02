'use client';
import { motion } from "framer-motion";
import { useState, useEffect } from 'react';

const LONG_BREAK_TIME_MINS = 15;
const BREAK_TIME_MINS = 5;
const WORK_TIME_MINS = 25;

const DESKTOP_HEIGHT = 48;
const DESKTOP_WIDTH = 48;


const WORK_COLOR = "#4ade80";
const WORK_ALT_COLOR = "#bbf7d0";
const BREAK_COLOR = "#2dd4bf";
const BREAK_ALT_COLOR = "#99f6e4";
const LONG_BREAK_COLOR = "#22d3ee";
const LONG_BREAK_ALT_COLOR = "#a5f3fc";

const sliderData = {
    work: {
        color: WORK_COLOR,
        altColor: WORK_ALT_COLOR,
        width: 72.070,
        x: 0
    },
    break: {
        color: BREAK_COLOR,
        altColor: BREAK_ALT_COLOR,
        width: 76.758,
        x: 72.070
    },
    'long-break': {
        color: LONG_BREAK_COLOR,
        altColor: LONG_BREAK_ALT_COLOR,
        width: 119.234,
        x: 148.828
    }
}

function padNumber(num) {
    num = num.toString();
    if (num.length < 2) {
        num = '0' + num;
    }
    return num;
}

type IntervalType = 'work' | 'break' | 'long-break';

function getCurrentColor(intervalType: IntervalType) {
    if (intervalType === 'work') {
        return WORK_COLOR;
    } else if (intervalType === 'break') {
        return BREAK_COLOR;
    } else if (intervalType === 'long-break') {
        return LONG_BREAK_COLOR;
    }
}



function getCurrentAltColor(intervalType: IntervalType) {
    if (intervalType === 'work') {
        return WORK_ALT_COLOR;
    } else if (intervalType === 'break') {
        return BREAK_ALT_COLOR;
    } else if (intervalType === 'long-break') {
        return LONG_BREAK_ALT_COLOR;
    }
}

export default function Timer() {

    const [intervalType, setIntervalType] = useState<IntervalType>('work');
    const [intervalLength, setIntervalLength] = useState(WORK_TIME_MINS * 60);
    const [timeLeft, setTimeLeft] = useState(intervalLength);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        if (timeLeft === 0) {
            if (intervalType === 'work') {
                setIntervalType('break');
                setIsRunning(false);
            } else if (intervalType === 'break') {
                setIntervalType('work');
                setIsRunning(false);
            } else {
                setIntervalType('work');
                setIsRunning(false);
            }
        }
        const timeout = setTimeout(() => {
            if (!isRunning) return;
            setTimeLeft(timeLeft - 0.1);
        }, 100);

        return () => clearTimeout(timeout);
    }, [timeLeft, isRunning]);

    useEffect(() => {
        if (intervalType === 'work') {
            setIntervalLength(WORK_TIME_MINS * 60);
            setTimeLeft(WORK_TIME_MINS * 60);
        } else if (intervalType === 'break') {
            setIntervalLength(BREAK_TIME_MINS * 60);
            setTimeLeft(BREAK_TIME_MINS * 60);
        } else {
            setIntervalLength(LONG_BREAK_TIME_MINS * 60);
            setTimeLeft(LONG_BREAK_TIME_MINS * 60);
        }
        setIsRunning(false);
    }, [intervalType]);

    return (
        <div className="flex justify-center flex-wrap">
            <div className="w-full flex justify-center">
                <div className="relative bg-neutral-800 rounded-xl w-min">
                    <motion.div className="absolute w-10 h-full top-0 left-0 rounded-xl"
                        initial={{ x: sliderData[intervalType].x, opacity: 0, backgroundColor: sliderData[intervalType].color, width: sliderData[intervalType].width }}
                        animate={{ opacity: 1, x: sliderData[intervalType].x, width: sliderData[intervalType].width, backgroundColor: sliderData[intervalType].color }}
                        transition={{
                            type: "spring",
                            damping: 40,
                            stiffness: 300
                        }}
                    ></motion.div>
                    <ul className="relative list-none flex whitespace-nowrap py-0.5 m-0">
                        <li onClick={() => setIntervalType('work')} className={`transition-colors ease-in-out duration-300 px-4 hover:cursor-pointer ${intervalType === "work" ? "text-neutral-900" : ""}`}>Work</li>
                        <li onClick={() => setIntervalType('break')} className={`transition-colors ease-in-out duration-300  px-4 hover:cursor-pointer ${intervalType === "break" ? "text-neutral-900" : ""}`}>Break</li>
                        <li onClick={() => setIntervalType('long-break')} className={`transition-colors ease-in-out duration-300  px-4 hover:cursor-pointer ${intervalType === "long-break" ? "text-neutral-900" : ""}`}>Long Break</li>
                    </ul>
                </div>
            </div>

            <div className={`relative rounded-full mt-6`}>
                <div style={{
                    backgroundImage: `conic-gradient(
                    ${getCurrentColor(intervalType)} ${360 - (100 * timeLeft / intervalLength * 3.6)}deg,
                    ${getCurrentAltColor(intervalType)} ${360 - (100 * timeLeft / intervalLength * 3.6)}deg
            )`}} className={`h-${DESKTOP_HEIGHT} w-${DESKTOP_WIDTH} rounded-full p-4 shadow-lg`}>
                    <div className={`h-40 w-40 rounded-full flex bg-neutral-900 items-center justify-center`}>
                        <div className='text-4xl font-bold'>
                            <i>{Math.floor(timeLeft / 60)}:{padNumber(Math.floor(timeLeft % 60))}</i>
                        </div>

                    </div>
                </div>
            </div>

            <div className="w-full justify-center flex mt-6">
                <button className={`transition-colors ease-in-out duration-500 w-28 font-bold text-2xl rounded-lg ${isRunning ? "bg-red-500" : "bg-green-400 text-neutral-900"} px-6 py-2`} onClick={() => setIsRunning(!isRunning)}>{!isRunning ? "Start" : "Pause"}</button>
            </div>

        </div>
    );
}
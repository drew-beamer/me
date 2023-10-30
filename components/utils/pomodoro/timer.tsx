"use client";

import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

type IntervalType = "work" | "break" | "long-break";

const LONG_BREAK_TIME_MINS: number = 15;
const BREAK_TIME_MINS: number = 5;
const WORK_TIME_MINS: number = 25;

const DESKTOP_HEIGHT = 48;
const DESKTOP_WIDTH = 48;

const WORK_COLOR: string = "#4ade80";
const WORK_ALT_COLOR: string = "#86efac";
const BREAK_COLOR: string = "#2dd4bf";
const BREAK_ALT_COLOR: string = "#5eead4";
const LONG_BREAK_COLOR: string = "#22d3ee";
const LONG_BREAK_ALT_COLOR: string = "#67e8f9";

const sliderData = {
    work: {
        color: WORK_COLOR,
        altColor: WORK_ALT_COLOR,
        width: 72.07,
        x: 0,
    },
    break: {
        color: BREAK_COLOR,
        altColor: BREAK_ALT_COLOR,
        width: 76.758,
        x: 72.07,
    },
    "long-break": {
        color: LONG_BREAK_COLOR,
        altColor: LONG_BREAK_ALT_COLOR,
        width: 119.234,
        x: 148.828,
    },
};

function padNumber(num: number) {
    let stringified: string = num.toString();
    if (stringified.length < 2) {
        stringified = `0${num}`;
    }
    return stringified;
}

function getCurrentColor(intervalType: IntervalType) {
    if (intervalType === "work") {
        return WORK_COLOR;
    }
    if (intervalType === "break") {
        return BREAK_COLOR;
    }
    if (intervalType === "long-break") {
        return LONG_BREAK_COLOR;
    }
    return "#000";
}

function getCurrentAltColor(intervalType: IntervalType) {
    if (intervalType === "work") {
        return WORK_ALT_COLOR;
    }
    if (intervalType === "break") {
        return BREAK_ALT_COLOR;
    }
    if (intervalType === "long-break") {
        return LONG_BREAK_ALT_COLOR;
    }
    return "#000";
}

export default function Timer(): React.FunctionComponentElement<{}> {
    const [intervalType, setIntervalType] = useState<IntervalType>("work");
    const [intervalLength, setIntervalLength] = useState<number>(
        WORK_TIME_MINS * 60
    );
    const [timeLeft, setTimeLeft] = useState<number>(intervalLength);
    const [sessionsCompleted, setSessionsCompleted] = useState<number>(0);
    const [isRunning, setIsRunning] = useState<boolean>(false);

    useEffect(() => {
        if (timeLeft <= 0 && isRunning) {
            if (intervalType === "work") {
                setIntervalType("break");
                setIsRunning(false);
                setSessionsCompleted(sessionsCompleted + 1);
            } else if (intervalType === "break") {
                setIntervalType("work");
                setIsRunning(false);
            } else {
                setIntervalType("work");
                setIsRunning(false);
            }
        }
        const timeout = setTimeout(() => {
            if (!isRunning) return;
            setTimeLeft(timeLeft - 0.1);
        }, 100);

        return () => clearTimeout(timeout);
    }, [timeLeft, isRunning, intervalType, sessionsCompleted]);

    useEffect(() => {
        if (sessionsCompleted % 4 === 0 && sessionsCompleted > 0) {
            setIntervalType("long-break");
        }
    }, [sessionsCompleted]);

    useEffect(() => {
        if (intervalType === "work") {
            setIntervalLength(WORK_TIME_MINS * 60);
            setTimeLeft(WORK_TIME_MINS * 60);
        } else if (intervalType === "break") {
            setIntervalLength(BREAK_TIME_MINS * 60);
            setTimeLeft(BREAK_TIME_MINS * 60);
        } else {
            setIntervalLength(LONG_BREAK_TIME_MINS * 60);
            setTimeLeft(LONG_BREAK_TIME_MINS * 60);
        }
        setIsRunning(false);
    }, [intervalType]);

    return (
        <div className="flex flex-wrap justify-center">
            <div className="flex w-full justify-center">
                <div className="relative w-min rounded-xl bg-muted">
                    <motion.div
                        className="absolute left-0 top-0 h-full w-10 rounded-xl"
                        initial={{
                            x: sliderData[
                                intervalType as keyof typeof sliderData
                            ].x,
                            opacity: 0,
                            backgroundColor:
                                sliderData[
                                    intervalType as keyof typeof sliderData
                                ].color,
                            width: sliderData[
                                intervalType as keyof typeof sliderData
                            ].width,
                        }}
                        animate={{
                            opacity: 1,
                            x: sliderData[
                                intervalType as keyof typeof sliderData
                            ].x,
                            width: sliderData[
                                intervalType as keyof typeof sliderData
                            ].width,
                            backgroundColor:
                                sliderData[
                                    intervalType as keyof typeof sliderData
                                ].color,
                        }}
                        transition={{
                            type: "spring",
                            damping: 40,
                            stiffness: 300,
                        }}
                    />
                    <ul
                        style={{ padding: 0, margin: 0 }}
                        className="relative m-0 flex list-none whitespace-nowrap py-0.5"
                    >
                        <li>
                            <Button
                                onClick={() => setIntervalType("work")}
                                onKeyDown={e => {
                                    if (e.key === "Enter") {
                                        setIntervalType("work");
                                    }
                                }}
                                role="button"
                                tabIndex={0}
                                className={`px-4 transition-colors duration-300 ease-in-out hover:cursor-pointer ${
                                    intervalType === "work"
                                        ? "text-neutral-900"
                                        : ""
                                }`}
                            >
                                Work
                            </Button>
                        </li>
                        <li>
                            <Button
                                variant="default"
                                onClick={() => setIntervalType("break")}
                                onKeyDown={e => {
                                    if (e.key === "Enter") {
                                        setIntervalType("break");
                                    }
                                }}
                                className={`px-4 transition-colors duration-300  ease-in-out hover:cursor-pointer ${
                                    intervalType === "break"
                                        ? "text-neutral-900"
                                        : ""
                                }`}
                            >
                                Break
                            </Button>
                        </li>
                        <li>
                            <Button
                                onClick={() => setIntervalType("long-break")}
                                onKeyDown={e => {
                                    if (e.key === "Enter") {
                                        setIntervalType("long-break");
                                    }
                                }}
                                className={`px-4 transition-colors duration-300  ease-in-out hover:cursor-pointer ${
                                    intervalType === "long-break"
                                        ? "text-neutral-900"
                                        : ""
                                }`}
                            >
                                Long Break
                            </Button>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="relative mt-6 rounded-full">
                <div
                    style={{
                        backgroundImage: `conic-gradient(
                    ${getCurrentColor(intervalType)} ${
                        360 - ((100 * timeLeft) / intervalLength) * 3.6
                    }deg,
                    ${getCurrentAltColor(intervalType)} ${
                        360 - ((100 * timeLeft) / intervalLength) * 3.6
                    }deg
            )`,
                    }}
                    className={`h-${DESKTOP_HEIGHT} w-${DESKTOP_WIDTH} rounded-full p-4 shadow-lg`}
                >
                    <div className="flex h-40 w-40 items-center justify-center rounded-full bg-background">
                        <div className="text-4xl">
                            {Math.floor(timeLeft / 60)}:
                            {padNumber(Math.floor(timeLeft % 60))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-4 w-full text-center">
                <h5>Pomodoros Completed: {sessionsCompleted}</h5>
            </div>

            <div className="mt-4 flex w-full justify-center">
                <Button
                    variant={isRunning ? "destructive" : "default"}
                    className={`transition-colors duration-500 ease-in-out
          } px-6 py-1`}
                    onClick={() => setIsRunning(!isRunning)}
                >
                    {!isRunning ? "Start" : "Pause"}
                </Button>
            </div>
        </div>
    );
}

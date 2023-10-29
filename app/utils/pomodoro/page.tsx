import StandardPageWrapper from "components/page-wrapper";
import Timer from "components/utils/pomodoro/timer";

export const metadata = {
    title: "Pomodoro Timer | Drew Beamer",
    description:
        "A simple, modern pomodoro timer built with React and Next.js.",
    keywords: [
        "pomodoro",
        "timer",
        "react",
        "next.js",
        "javascript",
        "responsive design",
        "student",
        "developer",
    ],
    creator: "Drew Beamer",
    openGraph: {
        title: "Pomodoro Timer",
        description:
            "A simple, modern pomodoro timer built with React and Next.js.",
        images: [
            {
                url: "https://drewbeamer.io/images/projects/pomodoro/pomodoro.png",
                width: 790,
                height: 750,
            },
        ],
    },
};

export default function Pomodoro() {
    return (
        <StandardPageWrapper>
            <section className="min-h-screen sm:min-h-0">
                <h1 className="text-4xl">Pomodoro Timer</h1>
                <p>
                    A timer for focus/work/study sessions using the Pomodoro
                    method. For more information on the Pomodoro method, the
                    Wikipedia page can be found{" "}
                    <a
                        target="_blank"
                        href="https://en.wikipedia.org/wiki/Pomodoro_Technique"
                        rel="noreferrer"
                    >
                        here
                    </a>
                    .
                </p>
                <div className="sm:mt-4">
                    <Timer />
                </div>
            </section>
        </StandardPageWrapper>
    );
}

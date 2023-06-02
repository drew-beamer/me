import PageWrapper from "components/ui-components/pageWrapper";
import Timer from "components/utils/pomodoro/timer";

export const metadata = {
    title: "Pomodoro Timer | Drew Beamer",
    description: "A simple, modern pomodoro timer built with React and Next.js.",
    keywords: ['pomodoro', 'timer', 'react', 'next.js', 'javascript', 'responsive design', 'student', 'developer'],
    creator: "Drew Beamer",
    openGraph: {
        title: "Pomodoro Timer",
        description: "A simple, modern pomodoro timer built with React and Next.js.",
        images: [
            {
                url: "https://drewbeamer.com/images/projects/pomodoro/pomodoro.png",
                width: 790,
                height: 750,
            }
        ]
    }
}

export default function Pomodoro() {
    return (
        <PageWrapper>
            <section className="pt-32">
                <h1>Pomodoro</h1>
                <div className="sm:mt-4">
                <Timer/>
                </div>
                
            </section>
        </PageWrapper>

    );
}
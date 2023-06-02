import PageWrapper from "components/ui-components/pageWrapper";
import Timer from "components/utils/pomodoro/timer";


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
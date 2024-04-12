import Achievements from "./components/Achievements";
import CourseProgress from "./components/CourseProgress";
import GetPro from "./components/GetPro";
import Hero from "./components/Hero";
import Streaks from "./components/Streaks";

export default function AccountPage() {
    return(
        <article className="">
            <Hero />
            <GetPro />
            <Streaks />
            <div className="mx-24 my-6 flex gap-x-4">
                <CourseProgress />
                <Achievements />
            </div>
        </article>
    )
}
import GetPro from "./components/GetPro";
import Hero from "./components/Hero";
import Streaks from "./components/Streaks";

export default function AccountPage() {
    return(
        <article className="">
            <Hero />
            <GetPro />
            <Streaks />
        </article>
    )
}
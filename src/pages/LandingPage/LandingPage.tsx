import Header from "../../common/Header";
import ThemeButton from "../../common/ThemeButton";
import Hero from "./components/Hero";

export default function LandingPage() {
  return (
    <section className="relative w-screen">
      <div className="border-b pb-6 border-front/20 flex absolute pt-6 items-center w-full text-xl font-light tracking-wider justify-center gap-x-8">
        <h1>Home</h1>
        <span className="text-3xl">•</span>
        <h1>About</h1>
        <span className="text-3xl">•</span>
        <h1>Team</h1>
      </div>
      <ThemeButton className="absolute top-4 right-8 text-2xl p-2 aspect-square bg-foreground rounded-full flex justify-center items-center border border-front border-opacity-40" />
      <Hero />
    </section>
  );
}

import { Link } from "react-router-dom";
import Header from "../../common/Header";
import ThemeButton from "../../common/ThemeButton";
import Hero from "./components/Hero";

export default function LandingPage() {
  return (
    <section className="relative w-screen">
      <div
        className="border-b pb-6 border-front/20 flex absolute pt-6 items-center w-full text-lg mobile:text-base mobile:gap-x-3 mobile:py-4
      -tracking-wide justify-center gap-x-8"
      >
        {navLinks.map((navLink, i) => (
          <>
            <Link to={navLink.to} target={`_newABC`} className="cursor-pointer">
              {navLink.title}
            </Link>
            <span className="text-3xl mobile:text-xl">•</span>
          </>
        ))}
        <Link
          to="/Amex_Hackathon.pdf"
          target={`_newABC`}
          className="cursor-pointer"
        >
          PPT
        </Link>

        <span className="text-3xl mobile:text-xl">•</span>
        <Link
          to="https://youtu.be/ZniI5oX7PiA"
          target={`_newABC`}
          className="cursor-pointer"
        >
          Video
        </Link>
      </div>
      <ThemeButton className="absolute top-4 right-8 mobile:top-3 text-2xl mobile:text-xl mobile:right-4 p-2 aspect-square bg-foreground rounded-full flex justify-center items-center border border-front border-opacity-40" />
      <Hero />
    </section>
  );
}

const navLinks = [
  {
    title: "Home",
    to: "/",
  },
  {
    title: "Team",
    to: "/team",
  },
];

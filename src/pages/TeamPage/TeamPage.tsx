import { Link } from "react-router-dom";
import ThemeButton from "../../common/ThemeButton";

export default function TeamPage() {
  return (
    <section className="relative w-screen">
      <div
        className="border-b pb-6 border-front/20 flex absolute pt-6 items-center w-full text-lg mobile:text-base mobile:gap-x-3 mobile:py-4
      -tracking-wide justify-center gap-x-8"
      >
        {navLinks.map((navLink, i) => (
          <>
            <Link to={navLink.to}  target={`_newABC`} className="cursor-pointer">
              {navLink.title}
            </Link>
            {navLinks.length - 1 > i && (
              <span className="text-3xl mobile:text-xl">•</span>
            )}
          </>
        ))}
      </div>
      <ThemeButton className="absolute top-4 right-8 mobile:top-3 text-2xl mobile:text-xl mobile:right-4 p-2 aspect-square bg-foreground rounded-full flex justify-center items-center border border-front border-opacity-40" />
      <div className="p-page py-28 flex flex-col items-center">
        <h1 className="text-3xl font-bold">Our team</h1>
        <div className="flex flex-wrap items-center justify-around pt-6 gap-y-12">
          {team.map((member, i) => (
            <div
              key={i}
              className="w-[28%] mobile:w-[35%] bg-primary/10 rounded-xl flex flex-col items-center px-2 py-6 border border-primary/40"
            >
              <img src={member.imgUrl} className="w-[8vw] rounded-full mobile:w-[16vw] aspect-square object-cover" />
              <h1 className="mt-4 text-lg font-bold">{member.name}</h1>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const team = [
  {
    name: "Riya",
    imgUrl: "/riya.jpeg",
  },
  {
    name: "Dariksha",
    imgUrl: "https://avatars.githubusercontent.com/u/100822529?v=4",
  },
  {
    name: "Vanshika",
    imgUrl: "https://avatars.githubusercontent.com/u/102902652?v=4",
  },
  {
    name: "Sakshi",
    imgUrl: "/sakshi.jpg",
  },
];

const navLinks = [
  {
    title: "Home",
    to: "/",
  },
  {
    title: "PPT",
    to: "/Amex_hackathon.pdf",
  },
  {
    title: "Video",
    to: "/",
  },
  {
    title: "Team",
    to: "/team",
  },
];

import ThemeButton from "../ThemeButton";
import CourseStats from "./components/CourseStats";
import FiInfo from "./components/FiInfo";

export default function StatisticsSidebar() {
  return (
    <section className="flex relative flex-col border-l border-border max-w-[20vw] h-screen">
      <div className="p-6 flex flex-col gap-y-2">
        <div className="flex items-center justify-between">
          <h1 className="text-mute text-base font-bold">FiHub Milestones</h1>
          <ThemeButton className="text-2xl p-2 aspect-square bg-foreground rounded-full flex justify-center items-center border border-front border-opacity-40" />
        </div>
        <div>
          <h2 className="text-xs -mb-1">Ongoing Courses</h2>
          <p className="font-mono text-primary text-2xl font-medium">12</p>
        </div>
        <div>
          <h2 className="text-xs -mb-1">Completed Courses</h2>
          <p className="font-mono text-primary text-2xl font-medium">4</p>
        </div>
      </div>
      <CourseStats />
      <figure role="separator" className="flex-1" />
      <FiInfo />
    </section>
  );
}

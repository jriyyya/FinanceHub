import CourseStats from "./components/CourseStats";
import FiInfo from "./components/FiInfo";

export default function StatisticsSidebar() {
  return (
    <section className="flex relative flex-col border-l border-border max-w-[20vw] h-screen">
      <div className="p-6 flex flex-col gap-y-2">
        <h1 className="text-mute text-base font-bold">FiHub Milestones</h1>
        <div>
          <h2 className="text-xs -mb-1">Ongoing Courses</h2>
          <p className="font-mono text-primary text-2xl font-medium">15</p>
        </div>
        <div>
          <h2 className="text-xs -mb-1">Completed Courses</h2>
          <p className="font-mono text-primary text-2xl font-medium">1</p>
        </div>
      </div>
      <CourseStats />
      <figure role="separator" className="flex-1" />
      <FiInfo />
    </section>
  );
}

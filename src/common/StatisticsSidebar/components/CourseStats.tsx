import React, { useRef } from "react";
import { linearMapColor, rgbToHex } from "../../../utils";
import useIdleScrollbar from "../../../hooks/useIdleScrollbar";
import { twMerge } from "tailwind-merge";

export default function CourseStats() {
  const containerRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  useIdleScrollbar(containerRef);

  const totalcourse = 4;

  return (
    <div
      className="border-y border-border px-6 py-4 flex flex-col gap-y-5 max-h-[50vh] overflow-y-scroll scrollbar-primary"
      ref={containerRef}
    >
      <div className="flex items-center justify-between gap-x-3">
        <h1 className="text-mute text-base font-bold">Daily Challenge</h1>
        <p className="bg-foreground p-2 text-sm font-semibold rounded-lg">
          Total : {totalcourse}
        </p>
      </div>

      {courses.map((course, key) => (
        <div className="border border-border p-1 rounded-lg">
          <div key={key} className="flex gap-x-3 justify-start">
            <img
              src={course.img}
              alt="bf"
              className="aspect-square rounded-lg h-12 bg-foreground"
            />

            <div className="flex flex-col gap-y-1">
              <h1 className="font-semibold text-sm max-w-[12vw]">
                {course.name}
              </h1>
              <p className="text-xs text-front/60">{course.modules}</p>
            </div>
          </div>

          <div className="flex flex-col gap-y-1 pt-2 text-xs">
            <p className={twMerge("font medium", course.status ? "text-green-500" : "text-red-500")}>{course.complete}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

const courses = [
  {
    img: "https://previews.123rf.com/images/ionutparvu/ionutparvu1612/ionutparvu161202075/67603281-budgeting-stamp-sign-text-word-logo-blue.jpg",
    name: "Complete 5 Budgeting modules",
    modules: "Total Modules: 12",
    complete: "Completed Modules: 4",
    status: 0,
  },
  {
    img: "https://www.shutterstock.com/image-vector/money-logo-design-vector-illustrative-260nw-2005306109.jpg",
    name: "Complete 2 Investment modules",
    modules: "Total Modules: 15",
    complete: "Completed Modules: 7",
    status: 1,
  },
  {
    img: "https://www.shutterstock.com/image-vector/high-quality-fire-emoticon-isolated-260nw-1716411895.jpg",
    name: "Maintain a streak of 5 days",
    modules: "Required Streak: 5",
    complete: "Current Streak: 3",
    status: 0,
  },
  
];

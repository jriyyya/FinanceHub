import React, { useRef } from "react";
import { linearMapColor, rgbToHex } from "../../../utils";
import useIdleScrollbar from "../../../hooks/useIdleScrollbar";

export default function CourseStats() {
  const containerRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  useIdleScrollbar(containerRef);

  const totalcourse = 5;

  return (
    <div
      className="border-y border-border px-6 py-4 flex flex-col gap-y-5 max-h-[50vh] overflow-y-scroll scrollbar-primary"
      ref={containerRef}
    >
      <div className="flex items-center justify-between gap-x-3">
        <h1 className="text-mute text-base font-bold">Your Courses</h1>
        <p className="bg-foreground p-2 text-sm font-semibold rounded-lg">
          Total : {totalcourse}
        </p>
      </div>

      {courses.map((course, key) => (
        <div className="border border-border p-1 rounded-lg">
          <div key={key} className="flex gap-x-3 items-center">
            <img
              src={course.img}
              alt="bf"
              className="aspect-square rounded-lg h-12 bg-foreground"
            />

            <div className="flex flex-col gap-y-1">
              <h1 className="font-semibold text-sm max-w-[12vw] truncate">
                {course.name}
              </h1>
              <p className="text-xs text-front/60">Modules : {course.modules}</p>
            </div>
          </div>

          <div className="flex flex-col gap-y-1 pt-2 text-xs">
            <p
              className="font-medium"
              style={{
                color: rgbToHex(
                  linearMapColor(
                    course.complete,
                    { from: 0, to: 1 },
                    { from: [255, 0, 0], to: [0, 255, 0] }
                  )
                ),
              }}
            >
             Completed Modules : {course.complete}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

const courses = [
  {
    img: "https://previews.123rf.com/images/ionutparvu/ionutparvu1612/ionutparvu161202075/67603281-budgeting-stamp-sign-text-word-logo-blue.jpg",
    name: "Budgeting",
    modules: 12,
    complete: 5,
  },
  {
    img: "https://www.shutterstock.com/image-vector/money-logo-design-vector-illustrative-260nw-2005306109.jpg",
    name: "Saving and Investments",
    modules: 15,
    complete: 5,
  },
  {
    img: "https://www.shutterstock.com/image-vector/finance-accounting-logo-design-vector-260nw-1722070894.jpg",
    name: "Personal finance",
    modules: 30,
    complete: 20,
  },
  {
    img: "https://avatars.githubusercontent.com/u/134763039?s=200&v=4",
    name: "Eco-Finance",
    modules: 10,
    complete: 5,
  }
];

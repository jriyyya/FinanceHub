import { useState } from "react";
import { twMerge } from "tailwind-merge";
import Icon from "../../common/Icon";
import { Link } from "react-router-dom";

export default function CoursePage() {
  const [showDescription, setShowDescription] = useState(true);
  return (
    <div className="px-24 py-16 mobile:px-6">
      <div className="flex gap-x-6 bg-opacity-[4%] bg-front p-4 rounded-xl hover:bg-opacity-[6%] cursor-pointer duration-300 ease-in border border-front/20">
        <img
          src="https://i.pinimg.com/736x/78/2b/2c/782b2c9ce0bd50155e5e54fb2ec3aefb.jpg"
          alt=""
          className="w-[7vw] aspect-square h-max rounded-full border border-primary p-1 object-cover"
        />
        <div className="flex flex-col relative w-full mobile:gap-y-1">
          <h1 className="text-2xl font-bold">Personal Finance</h1>
          <button onClick={() => setShowDescription(!showDescription)}>
            <Icon
              icon="expand_more"
              className="text-[2rem] absolute right-0 top-0"
            />
          </button>
          <p
            className={twMerge(
              "text-sm text-front/80 ease-linear duration-300",
              showDescription ? "" : "hidden"
            )}
          >
            Master essential financial concepts to effectively manage your money
            and achieve your financial goals. In this comprehensive course,
            you'll learn how to create and stick to a budget, control expenses,
            save for emergencies, and make informed decisions about investments
            and retirement planning. Explore topics such as understanding income
            and expenses, debt management, savings strategies, investment
            vehicles, retirement accounts, and estate planning.
          </p>
          <div className="w-full flex h-[1vh] rounded-xl overflow-hidden mt-4 bg-front/20">
            <div className="basis-1/3 bg-green-500/90 rounded-r-xl scale-115" />
            <div className="basis-2/3" />
          </div>
          <div className="flex gap-x-2 self-end">
            <div className="text-xs self-end bg-red-500/80 text-back font-semibold px-3 py-1 rounded-xl mt-3">
              Incomplete : <span className="">6</span>
            </div>
            <div className="text-xs self-end bg-primary/80 text-back font-semibold px-3 py-1 rounded-xl mt-3">
              Modules : <span className="">10</span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-y-6 mt-8 ">
        {modules.map((module, i) => (
          <>
            {i == 2 && (
              <div
                key={i}
                className={twMerge(
                  "flex  px-4 py-6 rounded-xl justify-between items-center bg-pink-500/20 border-pink-500/30 border"
                )}
              >
                <div className="flex gap-x-4 items-center">
                  <Icon icon="lesson" className="text-[2rem] font-light" />
                  <div className="flex flex-col gap-y-2">
                    <span className="text-xs text-front/60">Quiz</span>
                    <h1 className="text-xl font-semibold">
                      What you learnt - Finance
                    </h1>
                  </div>
                </div>
                <Icon
                  icon="done"
                  className="text-[2rem] text-green-500/80 mr-2"
                />
              </div>
            )}
            <div
              key={i}
              className={twMerge(
                "flex  px-4 py-6 rounded-xl justify-between items-center",
                module.status == 0 ? "bg-front/10 border border-front/20" : "bg-secondary/20 border border-secondary/30"
              )}
            >
              <div className="flex gap-x-4 items-center">
                <Icon icon="lesson" className="text-[2rem] font-light" />
                <div className="flex flex-col gap-y-2">
                  <span className="text-xs text-front/60">Module</span>
                  <h1 className="text-xl font-semibold">{module.title}</h1>
                  {module.status == 1 && (
                    <span className="text-xs border border-front/40 bg-front/20 w-max px-2 py-1 rounded-2xl">
                      XP +10
                    </span>
                  )}
                </div>
              </div>
              {module.status == 2 && (
                <Icon
                  icon="done"
                  className="text-[2rem] text-green-500/80 mr-2"
                />
              )}
              {module.status == 1 && (
                <Link to="/module" className="text-lg font-bold py-2 px-6 border border-primary/60 bg-primary/10 rounded-lg">
                  Start
                </Link>
              )}
              {module.status == 0 && (
                <Icon
                  icon="lock"
                  className="text-[2rem] text-gray-500/80 mr-2"
                />
              )}
            </div>
          </>
        ))}
      </div>
    </div>
  );
}

const modules = [
  {
    title: "Welcome to Personal Finance",
    status: 2,
  },
  {
    title: "Saving and budgeting",
    status: 2,
  },
  {
    title: "Interest and debt",
    status: 1,
  },
  {
    title: "Investments and retirement",
    status: 0,
  },
  {
    title: "Income and benefits",
    status: 0,
  },
  {
    title: "Housing",
    status: 0,
  },
  {
    title: "Car Expenses",
    status: 0,
  },
];

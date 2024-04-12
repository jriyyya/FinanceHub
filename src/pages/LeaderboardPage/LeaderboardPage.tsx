import { twMerge } from "tailwind-merge";
import Icon from "../../common/Icon";

export default function LeaderboardPage() {
  return (
    <section className="flex flex-col px-24 py-12 gap-y-8">
      <h1 className="self-center text-2xl font-bold font-sans">Leaderboard</h1>
      <div className="flex gap-x-6">
        <div className="basis-[55%] flex flex-col gap-y-3 bg-secondary/5 rounded-xl p-6">
          {data.map((user, i) => (
            <div
              key={i}
              className={twMerge(
                "flex justify-between items-center border border-front/10 hover:bg-front/5 duration-300 ease-in-out p-4 rounded-xl",
                i == 0 && "border-2 border-yellow-300/50 hover:bg-yellow-300/5",
                i == 1 && "border-2 border-gray-400",
                i == 2 && "border-2 border-yellow-800 hover:bg-yellow-800/10"
              )}
            >
              <div className="flex gap-x-4 items-center">
                <div className="font-mono pr-2">{i + 1} </div>
                <img
                  src={user.imageUrl}
                  alt={user.name}
                  className="w-[3vw] rounded-full"
                />
                <h1 className="font-bold">
                  {user.name}
                  {(i == 5 || i == 7 || i == 12 || i == 18) && (
                    <span className="bg-primary ml-4 px-2 rounded-xl text-back text-xs">
                      PRO
                    </span>
                  )}
                </h1>
              </div>
              <p className="font-mono">{user.points} XP</p>
            </div>
          ))}
        </div>
        <div className="basis-[45%] bg-secondary/5 h-max p-4 rounded-xl">
          <h1 className="text-xl font-semibold">Earn XP</h1>
          <div className="flex flex-col gap-y-4 mt-4">
            <div className="flex items-center justify-between border border-front/10 px-4 py-4 rounded-xl">
                <h1 className="">Complete a lesson</h1>
                <p className="text-sm"> + 20 XP</p>
            </div>
            {courses.map((course, i) => (
              <div
                key={i}
                className="flex items-center justify-between border border-front/10 px-4 py-4 rounded-xl hover:cursor-pointer hover:bg-front/5 duration-300 ease-in-out"
              >
                <div className="flex gap-x-2 items-center">
                  <img
                    src={course.imgUrl}
                    alt={course.name}
                    className="w-[2vw] rounded-full aspect-square"
                  />
                  <div className="flex flex-col gap-y-1">
                    <h1 className="font-medium w-[10vw] whitespace-nowrap truncate">
                      {course.name}
                    </h1>
                    <p className="text-sm text-front/50">In Progress</p>
                  </div>
                </div>
                <div className="border border-front/50 rounded-full p-1 text-front/50 bg-secondary/5">
                  <Icon icon="play" className="text-[1.8rem]" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const data = [
  {
    name: "Riya",
    imageUrl: "https://avatars.githubusercontent.com/u/96080203?v=4",
    points: 96,
  },
  {
    name: "Olivia",
    imageUrl: "https://randomuser.me/api/portraits/women/2.jpg",
    points: 88,
  },
  {
    name: "Emma",
    imageUrl: "https://randomuser.me/api/portraits/women/19.jpg",
    points: 81,
  },
  {
    name: "Ava",
    imageUrl: "https://randomuser.me/api/portraits/women/42.jpg",
    points: 80,
  },
  {
    name: "Isabella",
    imageUrl: "https://randomuser.me/api/portraits/women/23.jpg",
    points: 78,
  },
  {
    name: "Mia",
    imageUrl: "https://randomuser.me/api/portraits/women/26.jpg",
    points: 77,
  },
  {
    name: "Charlotte",
    imageUrl: "https://randomuser.me/api/portraits/women/28.jpg",
    points: 76,
  },
  {
    name: "Amelia",
    imageUrl: "https://randomuser.me/api/portraits/women/5.jpg",
    points: 72,
  },
  {
    name: "Luna",
    imageUrl: "https://randomuser.me/api/portraits/men/17.jpg",
    points: 70,
  },
  {
    name: "Alexander",
    imageUrl: "https://randomuser.me/api/portraits/men/14.jpg",
    points: 68,
  },
  {
    name: "Harper",
    imageUrl: "https://randomuser.me/api/portraits/men/3.jpg",
    points: 66,
  },
  {
    name: "Benjamin",
    imageUrl: "https://randomuser.me/api/portraits/men/36.jpg",
    points: 64,
  },
  {
    name: "Evelyn",
    imageUrl: "https://randomuser.me/api/portraits/men/18.jpg",
    points: 63,
  },
  {
    name: "James",
    imageUrl: "https://randomuser.me/api/portraits/men/10.jpg",
    points: 60,
  },
  {
    name: "Noah",
    imageUrl: "https://randomuser.me/api/portraits/men/20.jpg",
    points: 56,
  },
  {
    name: "Liam",
    imageUrl: "https://randomuser.me/api/portraits/men/29.jpg",
    points: 55,
  },
  {
    name: "Jackson",
    imageUrl: "https://randomuser.me/api/portraits/men/4.jpg",
    points: 53,
  },
  {
    name: "Aiden",
    imageUrl: "https://randomuser.me/api/portraits/men/47.jpg",
    points: 52,
  },
  {
    name: "Lucas",
    imageUrl: "https://randomuser.me/api/portraits/men/9.jpg",
    points: 50,
  },
  {
    name: "Ethan",
    imageUrl: "https://randomuser.me/api/portraits/men/39.jpg",
    points: 45,
  },
];

const courses = [
  {
    name: "Budgeting",
    imgUrl:
      "https://previews.123rf.com/images/ionutparvu/ionutparvu1612/ionutparvu161202075/67603281-budgeting-stamp-sign-text-word-logo-blue.jpg",
  },

  {
    name: "Saving and Investing",
    imgUrl:
      "https://www.shutterstock.com/image-vector/money-logo-design-vector-illustrative-260nw-2005306109.jpg",
  },

  {
    name: "Persona Finance",
    imgUrl:
      "https://www.shutterstock.com/image-vector/finance-accounting-logo-design-vector-260nw-1722070894.jpg",
  },
];

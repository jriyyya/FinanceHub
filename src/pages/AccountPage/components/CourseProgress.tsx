import Icon from "../../../common/Icon";

export default function CourseProgress() {
  return (
    <div className="bg-secondary/5 basis-1/2 rounded-lg px-6 py-4">
      <div className="flex justify-between items-baseline">
        <h1 className="text-lg">Courses Progress</h1>
        <p className="text-sm underline text-secondary hover:cursor-pointer">Manage</p>
      </div>
      <div className="flex flex-col gap-y-4 mt-4">
        {courses.map((course, i) => (
          <div key={i} className="flex items-center justify-between border border-front/10 px-4 py-4 rounded-xl hover:cursor-pointer hover:bg-front/5 duration-300 ease-in-out">
            <div className="flex gap-x-2 items-center">
              <img
                src={course.imgUrl}
                alt={course.name}
                className="w-[4vw] rounded-full aspect-square"
              />
              <div className="flex flex-col gap-y-1">
                <h1 className="font-medium w-[10vw] whitespace-nowrap truncate">{course.name}</h1>
                <p className="text-sm text-front/50">In Progress</p>
              </div>
            </div>
            <div className="border border-front/50 rounded-full p-1 text-front/50">
              <Icon icon="play" className="text-[1.8rem]" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

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

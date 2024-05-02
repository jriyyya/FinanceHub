export default function Hero() {
  return (
    <section className="px-24 flex flex-col items-center py-16 mobile:px-12">
      <div className="flex flex-col gap-y-8 w-full items-center mobile:justify-center">
        <h1 className="text-2xl font-bold">My Courses</h1>
        <div className="flex w-full scrollbar-primary gap-x-6 justify-center mobile:items-center mobile:flex-col mobile:gap-y-8">
          {myCourses.map((course, i) => (
            <div
              className="shadow-sm shadow-primary border border-primary/20 rounded-xl w-[30%] mobile:w-[70%] items-center px-4 flex flex-col gap-y-6 py-6 justify-between hover:scale-105 hover:bg-primary/5 duration-300 ease-in cursor-pointer"
              key={i}
            >
              <div className="flex flex-col items-center gap-y-2">
                <img
                  src={course.imgUrl}
                  alt={course.name}
                  className="w-[5vw] rounded-full border-2 border-primary p-1 aspect-square mobile:w-[15vw]"
                />

                <h1 className="text-lg text-center">{course.name}</h1>
              </div>
              {course.status == 0 && (
                <p className="text-sm text-orange-500"> In Progress </p>
              )}
              {course.status == 1 && (
                <p className="text-sm text-green-500"> Completed </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const myCourses = [


  {
    name: "PersonaL Finance",
    imgUrl:
      "https://i.pinimg.com/736x/78/2b/2c/782b2c9ce0bd50155e5e54fb2ec3aefb.jpg",
    status: 0,
  },
  {
    name: "Saving and Investing",
    imgUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGWE2vjJpER257F3OIq6vEY9thq98rCt6Sew&usqp=CAU",
    status: 1,
  },
  {
    name: "Budgeting",
    imgUrl:
      "https://c8.alamy.com/comp/2CR2RXM/budgeting-line-color-icon-event-management-sign-for-web-page-mobile-app-button-logo-vector-isolated-element-editable-stroke-2CR2RXM.jpg",
    status: 1,
  },
];

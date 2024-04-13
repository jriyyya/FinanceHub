export default function Courses() {
  return (
    <section className="mx-16 bg-secondary/5 p-6 rounded-xl flex flex-col items-center gap-y-6">
      <h1 className="text-[1.5rem] font-bold">Explore our courses</h1>
      <div className="flex gap-x-2">
        <button className="px-3 rounded-lg py-1 border-primary/20 bg-primary/80 text-back font-semibold border">
          All sectors
        </button>
        {sectors.map((sector, i) => (
          <button
            key={i}
            className="px-3 rounded-lg py-1 border-primary/30 border text-primary/80 font-medium"
          >
            {sector}
          </button>
        ))}
      </div>
      <div className="flex flex-col gap-y-8">
        {courses.map((course, i) => (
          <div
            className="flex gap-x-6 bg-front/5 p-4 rounded-xl hover:bg-front/10 cursor-pointer duration-300 ease-in border border-front/20"
            key={i}
          >
            <img
              src={course.imgUrl}
              alt=""
              className="w-[7vw] aspect-square h-max rounded-full border border-primary p-1 object-cover"
            />
            <div className="flex flex-col">
              <h1 className="text-lg font-bold">{course.name}</h1>
              <p className="text-sm text-front/80">{course.description}</p>
              <div className="text-sm self-end bg-primary text-back font-semibold px-3 py-1 rounded-xl mt-3">
                Modules : <span className="">{course.modules}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

const sectors = [
  "Budgeting",
  "Investing",
  "Debt management",
  "Retirement planning",
];

const courses = [
  {
    name: "Personal Finance",
    description:
      "Master essential financial concepts to effectively manage your money and achieve your financial goals. In this comprehensive course, you'll learn how to create and stick to a budget, control expenses, save for emergencies, and make informed decisions about investments and retirement planning. Explore topics such as understanding income and expenses, debt management, savings strategies, investment vehicles, retirement accounts, and estate planning.",
    imgUrl:
      "https://i.pinimg.com/736x/78/2b/2c/782b2c9ce0bd50155e5e54fb2ec3aefb.jpg",
    modules: 10,
  },
  {
    name: "Saving and Investing",
    description:
      "Discover proven strategies for saving money and investing wisely to build wealth over the long term. In this comprehensive course, you'll learn about different investment options, risk management techniques, and portfolio diversification strategies to maximize returns and achieve financial independence. Explore topics such as the power of compounding, asset allocation, stock market fundamentals, bond investments, real estate investing, and alternative assets.",
    imgUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGWE2vjJpER257F3OIq6vEY9thq98rCt6Sew&usqp=CAU",
    modules: 5,
  },
  {
    name: "Budgeting",
    description:
      "Gain mastery over the art of budgeting to effectively manage your income, control expenses, and achieve financial stability. In this comprehensive course, you'll learn how to create a budget, track spending, identify saving opportunities, and prioritize financial goals to make the most of your money. Explore topics such as setting financial goals, expense categorization, budgeting tools and techniques, emergency funds, and dealing with unexpected expenses.",
    imgUrl:
      "https://c8.alamy.com/comp/2CR2RXM/budgeting-line-color-icon-event-management-sign-for-web-page-mobile-app-button-logo-vector-isolated-element-editable-stroke-2CR2RXM.jpg",
    modules: 8,
  },
  {
    name: "Credit Management",
    description:
      "Explore the fundamentals of credit management and learn how to use credit wisely to achieve financial goals. In this comprehensive course, you'll understand how credit scores work, strategies for improving creditworthiness, and smart borrowing practices to avoid debt traps and build a solid financial foundation. Explore topics such as credit reports, credit scoring models, types of credit, credit card management, and debt consolidation. ",
    imgUrl:
      "https://www.creativefabrica.com/wp-content/uploads/2020/03/04/Credit-Card-Icon-Graphics-3068208-1-1-580x386.jpg",
    modules: 2,
  },
  {
    name: "Retirement Planning",
    description:
      "Prepare for a financially secure retirement by understanding key retirement planning concepts and strategies. In this comprehensive course, you'll learn about retirement accounts, investment options, income planning, and risk management techniques to build a retirement nest egg that lasts a lifetime. Explore topics such as retirement savings goals, employer-sponsored retirement plans, individual retirement accounts (IRAs), Social Security benefits, and annuities.",
    imgUrl:
      "https://cdn-icons-png.flaticon.com/512/5798/5798292.png",
    modules: 7,
  },
  {
    name: "Tax Planning",
    description:
      "Navigate the complexities of tax laws and optimize your tax situation with effective tax planning strategies. In this comprehensive course, you'll learn about deductions, credits, tax-deferred investment accounts, and tax-efficient investment strategies to minimize tax liability and maximize savings. Explore topics such as tax brackets, tax deductions and credits, tax-advantaged investment accounts, and tax planning for different life events.",
    imgUrl:
      "https://static.vecteezy.com/system/resources/previews/033/064/598/original/tax-planning-financial-advisor-color-icon-illustration-vector.jpg",
    modules: 8,
  },
  {
    name: "Estate Planning",
    description:
      "Protect your assets and ensure your wishes are carried out with proper estate planning. In this comprehensive course, you'll learn about wills, trusts, power of attorney, and healthcare directives, and understand the importance of estate planning in preserving wealth and providing for loved ones. Explore topics such as probate process, estate taxes, beneficiary designations, and charitable giving..",
    imgUrl:
      "https://cdn-icons-png.flaticon.com/512/1029/1029022.png",
    modules: 9,
  },
];

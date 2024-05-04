import { useState } from "react";
import Icon from "../../common/Icon";

export default function ModulePage() {
  const [progress, setProgress] = useState(0);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const handleButtonClick = () => {
    if (!isButtonDisabled) {
      setProgress(progress + 1);
      setIsButtonDisabled(true);

      setTimeout(() => {
        setIsButtonDisabled(false);
      }, 10000);
    }
  };
  return (
    <div className="px-24 flex flex-col items-center py-12 relative mobile:px-8 ">
      {/* likes and comments */}
      <div className="flex items-center gap-x-8">
        <div className="flex items-center">
          <Icon icon="heart" className="text-[1.5rem] text-red-500 mr-1" />
          {23}
        </div>
        <div className="flex items-center">
          <Icon icon="chat" className="text-[1.5rem] mr-1 text-primary" />
          {30}
        </div>
      </div>

      {/* progess bar */}
      <div className="w-full flex gap-x-8 pt-6 items-center">
        <button
          onClick={() => setProgress(progress - 1)}
          disabled={progress <= 0}
          className="-translate-x-6 mobile:translate-x-0 p-1 bg-primary/20 rounded-full hover:cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <Icon icon="arrow_forward" className="rotate-180 text-[1.5rem]" />
        </button>
        <div className="w-full bg-primary/20 h-[1vh] rounded-xl">
          <div
            className="bg-green-500 h-[1vh] rounded-xl flex items-center justify-end"
            style={{ width: `${(progress / data.length) * 100}%` }}
          >
            <div className="p-1 bg-background rounded-full border border-primary">
              <Icon icon="person" className="text-[1.5rem] text-primary" />
            </div>
          </div>
        </div>

        <button
          onClick={handleButtonClick}
          disabled={progress >= data.length || isButtonDisabled}
          className="p-1 bg-primary/20 rounded-full hover:cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <Icon icon="arrow_forward" className="text-[1.5rem]" />
        </button>
      </div>

      {0 <= progress && progress < data.length && (
        <div className="ease-linear duration-150 mt-16 bg-foreground/40 border border-front/20 p-6 rounded-xl flex flex-col gap-y-2 ">
          <h1 className="text-2xl font-bold">{data[progress].title}</h1>
          <p className="text-front/70">{data[progress].description}</p>
          <div className="mt-4 flex flex-col gap-y-4">
            <h1 className="text-xl w-full border-b border-primary/40 pb-2">
              Key Highlights
            </h1>
            <div className="flex flex-wrap gap-2">
              {data[progress].highlights.map((con, key) => (
                <div
                  key={key}
                  className="bg-primary/10 py-2 px-4 rounded-r-3xl min-w-[70%]"
                >
                  {con}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {progress == data.length && (
        <div className="w-full flex flex-col gap-y-8 font-semibold items-center pt-24 h-full overflow-hidden">
          <img src="/catsDancing.gif" className="w-[40%] rounded-xl mobile:w-[80%]" />
          <div className="flex gap-x-4 items-center ">
            <h1 className="tracking-widesr text-4xl mobile:text-3xl">MODULE COMPLETED!!!</h1>
            <div className="text-xl mobile:whitespace-nowrap bg-green-500/80 px-5 py-1 rounded-2xl font-bold">
              +10 XP
            </div>
          </div>
          <button className="text-xl font-medium rounded-xl bg-primary/10 border border-primary/60 hover:bg-primary/20 px-6 py-2 text-front self-end mt-16 duration-200 ease-in">
            Next Module
          </button>
        </div>
      )}

      <div className="absolute text-red-500 bottom-4 animate-pulse right-4 text-lg font-bold">
        This is all dummy data
      </div>
    </div>
  );
}

const data = [
  {
    title: "The Total Money Makeover by Dave Ramsey",
    description:
      "Dave Ramsey's 'The Total Money Makeover' is a comprehensive guide aimed at individuals seeking financial transformation. The book outlines practical steps to achieve financial health, primarily through the elimination of debt, careful budgeting, and the cultivation of wealth. Ramsey introduces the 'Debt Snowball' method, which involves paying off debts from smallest to largest, gaining momentum as each balance is cleared. This approach not only simplifies the debt repayment process but also provides psychological wins that motivate the individual to continue. Throughout the book, Ramsey emphasizes the need for a solid emergency fund as a foundation for financial stability, advocating for starting with $1,000 and building it to cover several months of expenses. The book also addresses common financial pitfalls and provides insights on avoiding these traps. Ramsey's straightforward, no-nonsense advice is backed by numerous testimonials from individuals who have achieved financial freedom by following his plan.",
    highlights: [
      "Debt Snowball method for debt reduction",
      "Creating and sticking to a budget",
      "Importance of emergency funds",
    ],
  },
  {
    title: "Rich Dad Poor Dad by Robert T. Kiyosaki",
    description:
      "'Rich Dad Poor Dad' by Robert T. Kiyosaki is a seminal book in personal finance literature, exploring the differing financial teachings of his two fathers: his biological father (the 'Poor Dad') and the father of his best friend (the 'Rich Dad'). This book challenges many traditional notions of finance, such as the emphasis on earning a high salary as the path to wealth. Instead, Kiyosaki focuses on the importance of financial education, investing, and understanding the distinction between assets and liabilities. The central thesis of the book is that the rich teach their children how to acquire assets that generate income, whereas the poor and middle class focus on acquiring liabilities that they mistakenly believe to be assets, such as their primary residence. Kiyosaki also emphasizes the need to cultivate a mindset that embraces risk-taking and innovation, suggesting that financial freedom comes from understanding how money works and making it work for you. The narrative is compelling and serves as an inspirational blueprint for thinking about money in ways that can lead to wealth accumulation.",
    highlights: [
      "Investment basics",
      "Differences between assets and liabilities",
      "Mindset of financial independence",
    ],
  },
  {
    title: "You Need A Budget (YNAB)",
    description:
      "You Need A Budget, or YNAB, is not just budgeting software but a philosophy of financial management that stresses proactive control of finances. It is based on four simple rules: Give every dollar a job, embrace your true expenses, roll with the punches, and age your money. These principles help users to break the paycheck-to-paycheck cycle, get out of debt, and save more money. Unlike traditional budgeting approaches that focus on past spending, YNAB focuses on giving each dollar a role in the future, whether it's covering immediate expenses, achieving longer-term financial goals, or investing. The platform provides robust tools for tracking spending and managing finances, along with a wealth of educational resources, including online classes, blogs, and video tutorials, to help users understand and implement its principles effectively. YNAB's approach is particularly beneficial for those who need a more structured system to manage their financial life, offering a clear, actionable plan that can adjust to life's financial ups and downs.",
    highlights: [
      "Proactive budgeting philosophy",
      "Tools for expense tracking and financial planning",
      "Educational resources for effective budget management",
    ],
  },
];

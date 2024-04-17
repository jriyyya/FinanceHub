import { useState } from "react";
import Icon from "../../common/Icon";

export default function ModulePage() {
  const [progress, setProgress] = useState(0);
  console.log((progress / data.length) * 100);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const handleButtonClick = () => {
    if (!isButtonDisabled) {
      setProgress(progress + 1);
      setIsButtonDisabled(true);

      setTimeout(() => {
        setIsButtonDisabled(false);
      }, 300);
    }
  };
  return (
    <div className="px-24 flex flex-col items-center py-12 relative h-full">
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
          className="-translate-x-6 p-1 bg-primary/20 rounded-full hover:cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
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
              {data[progress].content.map((con, key) => (
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
          <img
            src="https://i.pinimg.com/originals/f8/ba/e3/f8bae313dbee24d67d29770508e8cedd.gif"
            className="w-[40%] rounded-xl"
          />
          <div className="flex gap-x-4 items-center">
            <h1 className="tracking-widesr text-4xl">MODULE COMPLETED!!!</h1>
            <div className="text-xl bg-green-500/80 px-5 py-1 rounded-2xl font-bold">
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
    title: "Understanding Compound Interest",
    description:
      "This comprehensive module delves into the intricate workings of compound interest, a fundamental concept in finance that has profound implications for individuals' financial trajectories. Through engaging discussions and illustrative examples, participants will gain a deep understanding of how compound interest accelerates the growth of savings and investments over time. Topics covered include the mechanics of compound interest, its compounding effects on various financial instruments, and practical strategies for harnessing its power to achieve long-term financial goals.",
    content: [
      "Mechanics of Compound Interest",
      "Compounding Effects on Savings and Investments",
      "Strategies for Maximizing Compound Interest",
    ],
  },
  {
    title: "Managing Credit Card Debt",
    description:
      "In this module, participants will learn essential strategies for effectively managing credit card debt, a common financial challenge faced by many individuals. Through insightful guidance and actionable tips, participants will discover how to navigate the complexities of credit card debt, develop effective debt repayment strategies, and avoid common pitfalls that can exacerbate financial difficulties.",
    content: [
      "Understanding Credit Card Interest Rates",
      "Debt Repayment Strategies",
      "Budgeting for Debt Reduction",
    ],
  },
  {
    title: "Budgeting Basics",
    description:
      "Budgeting is the cornerstone of sound financial management. This module provides participants with a comprehensive introduction to budgeting principles, empowering them to take control of their finances and achieve their financial goals. Through practical guidance and interactive exercises, participants will learn how to create a personalized budget, track expenses effectively, and cultivate healthy spending habits.",
    content: [
      "Creating a Personal Budget",
      "Expense Tracking Tools",
      "Developing Healthy Spending Habits",
    ],
  },
  {
    title: "Investing for Beginners",
    description:
      "Investing can seem daunting to beginners, but this module demystifies the process and equips participants with the knowledge and confidence to embark on their investment journey. Participants will learn about essential investment concepts, different investment vehicles, and strategies for building a diversified investment portfolio tailored to their financial goals and risk tolerance.",
    content: [
      "Understanding Investment Basics",
      "Types of Investment Vehicles",
      "Building a Diversified Portfolio",
    ],
  },
  {
    title: "Retirement Planning Essentials",
    description:
      "Planning for retirement is a crucial aspect of financial planning. In this module, participants will learn essential retirement planning strategies to secure their financial future. Topics covered include retirement savings options, calculating retirement needs, and creating a comprehensive retirement income plan to ensure financial security during retirement years.",
    content: [
      "Exploring Retirement Savings Options",
      "Calculating Retirement Needs",
      "Creating a Retirement Income Plan",
    ],
  },
  {
    title: "Debt Consolidation Strategies",
    description:
      "Dealing with multiple debts can be overwhelming, but debt consolidation offers a practical solution. In this module, participants will learn about different debt consolidation strategies, their benefits and drawbacks, and how to implement a consolidation plan effectively to streamline debt repayment and regain financial stability.",
    content: [
      "Understanding Debt Consolidation",
      "Types of Consolidation Loans",
      "Implementing a Consolidation Plan",
    ],
  },
  {
    title: "Tax Planning Fundamentals",
    description:
      "Tax planning is an integral part of financial planning, and this module provides participants with essential knowledge and strategies to optimize their tax situation. Participants will learn about tax deductions, credits, retirement account contributions, and other tax-efficient strategies to minimize tax liability and maximize savings.",
    content: [
      "Understanding Tax Deductions and Credits",
      "Maximizing Retirement Account Contributions",
      "Tax-Efficient Investment Strategies",
    ],
  },
  {
    title: "Emergency Fund Essentials",
    description:
      "An emergency fund is a financial safety net that provides peace of mind and security during unexpected financial setbacks. This module covers the importance of having an emergency fund, determining the appropriate amount to save, and practical strategies for building and maintaining an emergency fund for financial stability.",
    content: [
      "Understanding the Purpose of an Emergency Fund",
      "Determining the Right Amount to Save",
      "Strategies for Building an Emergency Fund",
    ],
  },
  {
    title: "Estate Planning Basics",
    description:
      "Estate planning is essential for ensuring that your assets are distributed according to your wishes and minimizing potential conflicts among heirs. In this module, participants will learn about key components of estate planning, including wills, trusts, probate, and beneficiary designations, and how to create a comprehensive estate plan to protect their legacy.",
    content: [
      "Components of an Estate Plan",
      "Minimizing Estate Taxes",
      "Updating and Maintaining Your Estate Plan",
    ],
  },
  {
    title: "Financial Goal Setting",
    description:
      "Setting clear financial goals is the first step towards achieving financial success. This module guides participants through the process of identifying their financial goals, prioritizing them, and creating actionable plans to turn their aspirations into reality. Participants will learn valuable strategies for staying motivated and accountable on their financial journey.",
    content: [
      "Identifying Financial Goals",
      "Prioritizing Goals",
      "Creating Actionable Plans",
    ],
  },
];

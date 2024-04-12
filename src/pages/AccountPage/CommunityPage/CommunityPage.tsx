import Icon from "../../../common/Icon";

export default function CommunityPage() {
  return (
    <div className="px-24 py-16">
      <h1 className="text-2xl font-semibold">Community Discussion</h1>
      <div className="mt-4 w-full flex gap-x-4">
        <input
          type="text"
          placeholder="Search..."
          className="w-full bg-background border border-primary/50 px-4 py-3 rounded-xl focus-within:outline-none"
        />
        <button className="border border-primary px-4 text-lg font-medium rounded-xl">
          Search
        </button>
      </div>
      <div className="mt-3 flex justify-between">
        <button className="border border-primary/50 rounded-xl px-4 py-2  flex items-center gap-x-6">
          Trending tags <Icon icon="expand_more" className="text-[1.5rem]" />{" "}
        </button>
        <button className="bg-primary text-back px-6 rounded-xl py-2 font-medium">
          Start a Discussion
        </button>
      </div>
      <div className="flex flex-col gap-y-6 mt-8">
        {communityData.map((data, i) => (
          <div
            className="flex flex-col bg-secondary/5 border border-secondary/20 p-4 rounded-xl gap-y-2 hover:bg-secondary/10 cursor-pointer duration-300 ease-in-out"
            key={i}
          >
            <h1 className="text-xl font-bold font-sans">{data.title}</h1>
            <div className="flex text-xs gap-x-2">
              {data.tags.map((tag, i) => (
                <div
                  key={i}
                  className="capitalize bg-primary/80 py-1 px-2 text-back font-medium rounded-xl"
                >
                  {tag}
                </div>
              ))}
            </div>
            <p className="text-sm mt-2 text-front/90">{data.description.slice(0, 180)}<span className="pl-2 text-xs text-primary">...Read More</span></p>
            <div className="mt-2 flex justify-between">
              <div className="flex items-center gap-x-4">
                <div className="flex items-center">
                  <Icon
                    icon="heart"
                    className="text-[1.2rem] text-red-500 mr-1"
                  />
                  {data.likes}
                </div>
                <div className="flex items-center">
                  <Icon
                    icon="chat"
                    className="text=[1.2rem] mr-1 text-primary"
                  />
                  {data.commentsCount}
                </div>
              </div>
              <div className="flex items-center gap-x-4">
                <div className="flex flex-col">
                  <h2 className="self-end text-sm">{data.userName}</h2>
                  <p className="text-xs text-front/80">{data.timestamp}</p>
                </div>
                <img
                  src={data.userImage}
                  alt={data.userName}
                  className="w-[2.5vw] rounded-full"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const communityData = [
  {
    title: "The Future of Banking",
    description:
      "Discussing the impact of technology on the future of banking. With the advent of digital transformation and the rise of fintech startups, traditional banking institutions are facing unprecedented challenges. This discussion aims to explore how emerging technologies such as blockchain, artificial intelligence, and mobile banking are reshaping the financial landscape.",
    tags: ["banking", "technology", "finance"],
    likes: 42,
    commentsCount: 8,
    timestamp: "12:53:12 , 1 April 2023",
    userName: "Alice",
    userImage: "https://randomuser.me/api/portraits/women/10.jpg",
  },
  {
    title: "Investment Strategies for Volatile Markets",
    description:
      "Sharing tips for navigating volatile market conditions. In uncertain times, investors face increased volatility and risk in financial markets. This discussion aims to explore various investment strategies, including diversification, hedging, and value investing, to mitigate downside risk and capitalize on market opportunities.",
    tags: ["investing", "strategy", "finance"],
    likes: 28,
    commentsCount: 5,
    timestamp: "12:53:12 , 1 April 2023",
    userName: "Charlie",
    userImage: "https://randomuser.me/api/portraits/men/50.jpg",
  },
  {
    title: "Economic Stimulus Packages",
    description:
      "Analyzing the effectiveness of recent economic stimulus packages. With governments worldwide implementing fiscal policies to counteract the economic downturn caused by the pandemic, it's essential to assess the long-term implications of these measures. This discussion seeks to evaluate the impact of stimulus initiatives on inflation, employment, and economic growth.",
    tags: ["economy", "stimulus", "finance"],
    likes: 37,
    commentsCount: 12,
    timestamp: "12:53:12 , 1 April 2023",
    userName: "Bob",
    userImage: "https://randomuser.me/api/portraits/men/40.jpg",
  },
  
  {
    title: "The Rise of Sustainable Investing",
    description:
      "Exploring the growing popularity of sustainable investing. As environmental, social, and governance (ESG) considerations gain prominence among investors, sustainable investing has emerged as a significant trend in the financial industry. This discussion seeks to delve into the motivations behind sustainable investing and its potential impact on financial markets and corporate behavior.",
    tags: ["sustainability", "investing", "finance"],
    likes: 33,
    commentsCount: 9,
    timestamp: "12:53:12 , 1 April 2023",
    userName: "Diana",
    userImage: "https://randomuser.me/api/portraits/women/20.jpg",
  },
  {
    title: "Debt Management Tips",
    description:
      "Discussing effective strategies for managing debt. With consumer debt levels reaching record highs, it's crucial for individuals to adopt sound debt management practices. This discussion aims to share practical tips and resources for reducing debt burdens, improving credit scores, and achieving financial freedom.",
    tags: ["debt", "financialplanning", "finance"],
    likes: 25,
    commentsCount: 6,
    timestamp: "12:53:12 , 1 April 2023",
    userName: "Edward",
    userImage: "https://randomuser.me/api/portraits/men/30.jpg",
  },
  {
    title: "Emerging Market Opportunities",
    description:
      "Identifying investment opportunities in emerging markets. With rapid economic growth and demographic shifts, emerging markets offer attractive prospects for investors seeking high returns. This discussion seeks to uncover promising sectors and regions within emerging markets and assess the associated risks and rewards.",
    tags: ["emergingmarkets", "investing", "finance"],
    likes: 39,
    commentsCount: 11,
    timestamp: "12:53:12 , 1 April 2023",
    userName: "Fiona",
    userImage: "https://randomuser.me/api/portraits/women/30.jpg",
  },
  {
    title: "Personal Finance Tips for Millennials",
    description:
      "Providing financial advice tailored to millennials. As millennials face unique financial challenges such as student loan debt and housing affordability issues, this discussion aims to offer practical tips and strategies for achieving financial success and independence in today's economy.",
    tags: ["personalfinance", "millennials", "finance"],
    likes: 21,
    commentsCount: 4,
    timestamp: "12:53:12 , 1 April 2023",
    userName: "George",
    userImage: "https://randomuser.me/api/portraits/men/35.jpg",
  },
  {
    title: "The Impact of Inflation on Investments",
    description:
      "Understanding how inflation affects investment returns. With inflation eroding purchasing power over time, investors must consider its impact when crafting investment portfolios. This discussion aims to explore strategies for preserving wealth and achieving real returns in an inflationary environment.",
    tags: ["inflation", "investing", "finance"],
    likes: 29,
    commentsCount: 7,
    timestamp: "12:53:12 , 1 April 2023",
    userName: "Hannah",
    userImage: "https://randomuser.me/api/portraits/women/40.jpg",
  },
  {
    title: "Navigating Student Loans",
    description:
      "Strategies for managing and paying off student loans. With the burden of student loan debt weighing heavily on many individuals, this discussion seeks to provide guidance and support for navigating the complexities of student loan repayment. Topics include loan consolidation, income-driven repayment plans, and loan forgiveness programs.",
    tags: ["studentloans", "debt", "finance"],
    likes: 18,
    commentsCount: 3,
    timestamp: "12:53:12 , 1 April 2023",
    userName: "Ian",
    userImage: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    title: "Artificial Intelligence in Finance",
    description:
      "Exploring the use of AI and machine learning in finance. As artificial intelligence continues to revolutionize various industries, its application in finance holds immense potential for enhancing decision-making processes, risk management, and customer experience. This discussion aims to delve into the current and future role of AI in reshaping the financial services landscape.",
    tags: ["AI", "machinelearning", "finance"],
    likes: 34,
    commentsCount: 10,
    timestamp: "12:53:12 , 1 April 2023",
    userName: "Jane",
    userImage: "https://randomuser.me/api/portraits/women/50.jpg",
  },
  {
    title: "The Gig Economy and Financial Stability",
    description:
      "Discussing the financial implications of the gig economy. With the rise of freelance work and on-demand platforms, traditional notions of employment and income generation are undergoing significant changes. This discussion seeks to explore the challenges and opportunities presented by the gig economy and its impact on financial stability and social welfare.",
    tags: ["gigeconomy", "employment", "finance"],
    likes: 26,
    commentsCount: 6,
    timestamp: "12:53:12 , 1 April 2023",
    userName: "Kevin",
    userImage: "https://randomuser.me/api/portraits/men/10.jpg",
  },
  {
    title: "Navigating Market Corrections",
    description:
      "Tips for navigating and potentially profiting from market corrections. Market corrections, though unsettling, can present lucrative opportunities for savvy investors. This discussion aims to share strategies for identifying undervalued assets, rebalancing portfolios, and staying resilient during periods of market volatility.",
    tags: ["marketcorrections", "investing", "finance"],
    likes: 23,
    commentsCount: 5,
    timestamp: "12:53:12 , 1 April 2023",
    userName: "Lily",
    userImage: "https://randomuser.me/api/portraits/women/15.jpg",
  },
  {
    title: "Credit Score Essentials",
    description:
      "Understanding the importance of credit scores and how to improve them. A good credit score is essential for accessing credit, securing favorable interest rates, and achieving financial goals. This discussion aims to demystify credit scoring, highlight factors that impact creditworthiness, and provide actionable tips for building and maintaining a healthy credit profile.",
    tags: ["creditscore", "personalfinance", "finance"],
    likes: 32,
    commentsCount: 8,
    timestamp: "12:53:12 , 1 April 2023",
    userName: "Mike",
    userImage: "https://randomuser.me/api/portraits/men/25.jpg",
  },
];

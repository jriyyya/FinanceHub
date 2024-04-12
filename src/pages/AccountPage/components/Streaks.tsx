export default function Streaks() {
  return (
    <div className="mx-24 bg-secondary/5 px-6 py-4 rounded-lg flex-col flex gap-y-2">
      <h1 className="text-xl">Streaks</h1>
      <div className="flex">
        <StreakWeek />
        <div className="flex flex-col justify-between px-6 basis-1/2">
          <div className="flex flex-col gap-y-2">
            <p className="text-sm text-front/50">Current Streak</p>
            <div className="flex items-center gap-x-2">
              <div className="bg-green-500 w-max p-1 rounded-full">
                <img
                  src="https://img.icons8.com/ios-glyphs/30/FFFFFF/lightning-bolt--v1.png"
                  alt="lightning-bolt--v1"
                />
              </div>
              <p>2 Days</p>
            </div>
          </div>
          <div className="w-full bg-front/20 h-[1px]"/>
          <div className="flex flex-col gap-y-2">
            <p className="text-sm text-front/50">Longest Streak</p>
            <div className="flex gap-x-2 items-center">
              <div className="bg-red-500 w-max p-1 rounded-full">
                <img
                  src="https://img.icons8.com/ios-glyphs/30/FFFFFF/lightning-bolt--v1.png"
                  alt="lightning-bolt--v1"
                />
              </div>
              <p>10 Days</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function StreakWeek() {
  return (
    <div className="basis-1/2 flex flex-wrap gap-x-6 gap-y-4 border-r pr-2 border-front/20">
      <div className="items-center flex flex-col">
        <div className="border-4 border-red-500/50 rounded-full aspect-square py-3 px-4 items-center flex">
          28
        </div>
        <span className="text-sm">Mon</span>
      </div>
      <div className="items-center flex flex-col">
        <div className="border-4 border-green-500/50 rounded-full aspect-square py-3 px-4 items-center flex">
          28
        </div>
        <span className="text-sm">Tue</span>
      </div>
      <div className="items-center flex flex-col">
        <div className="border-4 border-green-500/50 rounded-full aspect-square py-3 px-4 items-center flex">
          28
        </div>
        <span className="text-sm">Wed</span>
      </div>
      <div className="items-center flex flex-col">
        <div className="border-4 border-primary/20 rounded-full aspect-square py-3 px-4 items-center flex">
          28
        </div>
        <span className="text-sm">Thurs</span>
      </div>
      <div className="items-center flex flex-col">
        <div className="border-4 border-primary/20 rounded-full aspect-square py-3 px-4 items-center flex">
          28
        </div>
        <span className="text-sm">Fri</span>
      </div>
      <div className="items-center flex flex-col">
        <div className="border-4 border-yellow-500/50 bg-yellow-500/50 rounded-full aspect-square py-3 px-4 items-center flex">
          <img
            height="20"
            width="20"
            src="https://img.icons8.com/ios/50/FFFFFF/gift--v1.png"
            alt="gift--v1"
          />
        </div>
        <span className="text-sm">Sat</span>
      </div>
      <div className="items-center flex flex-col">
        <div className="border-4 border-primary/20 rounded-full aspect-square py-3 px-4 items-center flex">
          28
        </div>
        <span className="text-sm">Sun</span>
      </div>
    </div>
  );
}

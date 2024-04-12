export default function Hero() {
  return (
      <div className="flex px-24 pt-12 pb-24 gap-x-8 items-center bg-foreground rounded-b-[8rem]">
        <img
          src="https://avatars.githubusercontent.com/u/96080203?v=4"
          alt="profile"
          className="w-[8vw] rounded-full"
        />
        <div className="flex flex-col gap-y-2">
          <div>
            <h1 className="text-xl font-semibold">Riya Jain</h1>
            <p className="text-sm pt-1">1 Following  |  2 Followers</p>
          </div>
            <div className="text-sm">⭐ 5,470 XP</div>
            <div className="flex gap-x-2 text-sm">
              <img
                src="https://em-content.zobj.net/source/twitter/376/flag-india_1f1ee-1f1f3.png"
                className="w-[1.5vw]"
                alt="india"
              />
              <p>India - Lvl 10</p>
          </div>
        </div>
      </div>
  );
}

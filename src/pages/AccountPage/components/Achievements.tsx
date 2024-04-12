import Icon from "../../../common/Icon";

export default function Achievements() {
  return (
    <div className="bg-secondary/5 basis-1/2 rounded-lg px-6 py-4 flex flex-col gap-y-4">
      <div className="flex justify-between items-baseline">
        <h1 className="text-lg">Recent Achievments</h1>
      </div>
      <div className="flex gap-4">
        <div className="flex flex-col bg-blue-600/20 p-2 rounded-xl">
          <Icon icon="ssidChart" className="text-[3rem]" />
        </div>
        <div className="flex flex-col bg-green-400/20 p-2 rounded-xl">
          <Icon icon="person" className="text-[3rem]" />
        </div>
        <div className="flex flex-col bg-red-300/20 p-2 rounded-xl">
          <Icon icon="analytics" className="text-[3rem]" />
        </div>
      </div>
      <div className="pt-4 flex flex-col gap-y-4">
        <h1 className="text-lg border-b border-front/20 pb-2">Next Task</h1>
        <div className="flex items-center gap-x-4">
          <div className="p-2 bg-purple-300/20 w-max rounded-xl">
            <Icon icon="reward" className="text-[3rem]" />
          </div>
          <div className="flex flex-col gap-y-1">
            <h1>Streak Day</h1>
            <p className="text-sm text-front/60">Maintain a streak of 10 days</p>
          </div>
        </div>
      </div>
      <button className="mt-4 bg-primary/5 p-3 rounded-xl border border-primary/20 hover:bg-primary/10 duration-300 ease-in-out">
        See more
      </button>
    </div>
  );
}

export default function GetPro() {
  return (
    <div className="flex justify-between mx-24 bg-primary py-6 px-6 rounded-lg -translate-y-8">
      <div className="flex flex-col gap-y-1">
        <h1 className="text-back font-bold text-xl flex gap-x-1 items-center">
          <span>FiHub</span>
          <span className="bg-background text-primary px-3 rounded-2xl">
            PRO
          </span>
        </h1>
        <p className="text-sm text-back font-medium">Get a month of free PRO experience!</p>
      </div>
      <button className="text-primary px-4 rounded-3xl bg-back">
        Start Today
      </button>
    </div>
  );
}

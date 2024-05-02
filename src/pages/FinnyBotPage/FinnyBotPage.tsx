import Icon from "../../common/Icon";

export default function FinnyBotPage() {
  return (
    <div className="px-24 py-12 flex flex-col justify-between h-screen mobile:px-6 mobile:pb-8 mobile:pt-20">
      <div className="flex flex-col gap-y-12">
        <div className="flex gap-x-4">
          <img
            src="https://avatars.githubusercontent.com/u/96080203?v=4"
            className="w-[3vw] rounded-full aspect-square h-[3vw] mobile:w-[10vw] mobile:h-[10vw]"
          />
          <div className="flex flex-col">
            <h1 className="text-sm font-bold">You</h1>
            <p className="text-front/80">Who are you?</p>
          </div>
        </div>

        <div className="flex gap-x-4 bg-primary/10 p-4 rounded-r-2xl rounded-t-2xl">
          <img
            src="https://t4.ftcdn.net/jpg/01/91/93/03/360_F_191930303_c1u8vl5OypVoK5LfcKIfSc17hjjOxVVP.jpg"
            className="w-[3vw] rounded-full aspect-square h-[3vw] mobile:w-[10vw] mobile:h-[10vw]"
          />
          <div className="flex flex-col">
            <h1 className="text-sm font-bold">You</h1>
            <p className="text-front/80">
              I am your finance support bot, You can ask me questions and doubts
              you have related to your finance. I can also suggest you some
              particular modules which you can refer on this platform if you
              wanted to learn something, Let's begin this conversation!
            </p>
          </div>
        </div>
      </div>
      <div className="flex w-full p-3 border border-front/20 rounded-xl items-center">
        <input className="w-full bg-background focus-within:outline-none" placeholder="Type something..." />
        <Icon icon="arrow_forward" className="-rotate-90 text-[1.8rem] bg-front/10 p-1 rounded-lg" />
      </div>
    </div>
  );
}

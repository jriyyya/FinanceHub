import Icon from "../../common/Icon";

export default function ArPage() {
  return (
    <div className="p-page py-24 flex flex-col items-center mobile:justify-center">
      <h1 className="text-3xl font-bold">Your AR advisor is here!</h1>
      <div className="flex p-24 border-8 mt-24 relative hover:cursor-pointer hover:bg-primary/10 duration-300 ease-in ">
        <Icon icon="book" className="text-[6rem]" />
        <div className="bg-background w-[10vw] h-[3vh] absolute -top-5 -translate-x-5 mobile:w-[30vw]" />
        <div className="bg-background h-[10vw] w-[3vh] absolute  -right-5 -translate-y-6 mobile:h-[30vw]" />

        <div className="bg-background h-[10vw] w-[3vh] absolute  -left-5 -translate-y-6 mobile:h-[30vw]" />
        <div className="bg-background w-[10vw] h-[3vh] absolute -bottom-5 -translate-x-5 mobile:w-[30vw]" />
      </div>
      <p className="mt-16 text-lg mobile:text-center">
        Let's get some recommedation for your learning
      </p>
      <button className="mt-6 bg-primary text-back px-6 py-2 text-xl rounded-md font-semibold duration-150 cursor-pointer ease-in hover:-translate-y-1">
        Let's Go
      </button>
    </div>
  );
}

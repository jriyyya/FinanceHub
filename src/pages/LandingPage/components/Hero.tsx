import { Link } from "react-router-dom";
import Icon from "../../../common/Icon";
export default function Hero() {
  return (
    <section className="px-24 widescreen:py-24 flex h-screen mobile:px-12 mobile:py-6">
      <div className="flex flex-col gap-y-5 widescreen:py-12 mobile:pt-24">
        <h1 className="text-5xl font-semibold leading-snug mobile:text-3xl">
          Empower your wallet.
          <br />
          Fihub: Finance made simple
        </h1>
        <p className="text-lg text-front text-opacity-60">
          Chart your course to financial mastery with Fihub. <br />
          You can rely on{" "}
          <span className="font-semibold text-primary">FiHub</span> to start
          your journey!
        </p>
        <div className="my-10 mobile:my-2">
          <Link
            to="/home"
            className="relative text-2xl font-semibold flex items-center gap-x-4 mobile:text-xl"
          >
            Start the Module!
            <span className="bg-primary/5 border border-primary/30 rounded-full p-3">
              <Icon icon="lesson" className="text-[2.1rem] mobile:text-[1.5rem]" />
            </span>
          </Link>
        </div>
        <div className="my-3 flex gap-y-8 flex-col widescreen:max-w-[45vw] gap-x-8 mobile:w-full">
            <div className="flex gap-x-4 mobile:flex-col mobile:gap-y-8">
              <div className="flex widescreen:max-w-[45%] gap-x-5 mobile:w-full">
                <img
                  draggable={false}
                  src="https://cdn-icons-png.flaticon.com/512/6134/6134346.png"
                  alt="robot"
                  className="aspect-square w-14 h-14"
                />
                <p className="text-sm text-front text-opacity-50">
                  We have a bot, "Finny" which helps you understand your finance
                  and recommend you modules
                </p>
              </div>
              <div className="flex widescreen:max-w-[45%] gap-x-5 mobile:w-full">
                <img
                  draggable={false}
                  src="https://cdn-icons-png.freepik.com/256/8078/8078617.png?semt=ais_hybrid"
                  alt="xp"
                  className="aspect-square w-14 h-14"
                />
                <p className="text-sm text-front text-opacity-50">
                  You can earn XP by completing modules, and maintaining a
                  streak to earn more XP!
                </p>
              </div>
            </div>
            <div className="flex gap-x-4 mobile:w-full mobile:flex-col mobile:gap-y-6">
              <div className="flex widescreen:max-w-[45%] gap-x-5">
                <img
                  draggable={false}
                  src="https://img.icons8.com/fluency/48/virtual-reality.png"
                  alt="xp"
                  className="aspect-square w-14 h-14"
                />
                <p className="text-sm text-front text-opacity-50">
                With the AR service analysis, Scanned financial documents, extract pertinent data using OCR technologies!
                </p>
              </div>
              <div className="flex widescreen:max-w-[45%] gap-x-5">
                <img
                  draggable={false}
                  src="https://img.icons8.com/fluency/48/group.png"
                  alt="xp"
                  className="aspect-square w-14 h-14"
                />
                <p className="text-sm text-front text-opacity-50">
                 Interact with the community, ask you doubt away, share your experince, and Grow your connections!
                </p>
              </div>
            </div>
        </div>
      </div>
      <div className="flex flex-1 flex-col items-center justify-center mobile:hidden">
        <div className="h-[95%] w-[80%] rounded-t-full rounded-bl-full rounded-br-[145rem] bg-primary flex items-center justify-center overflow-hidden">
          <img
            src="https://extension.harvard.edu/wp-content/uploads/sites/8/2022/07/careers-in-corporate-finance.jpg"
            className="w-full h-full object-cover"
          />
          {/* bg-[url('https://www.wbcsd.org/var/site/storage/images/media/images/finance_img/25992-1-eng-GB/finance_img_i1140.jpg')]" */}
        </div>
      </div>
    </section>
  );
}

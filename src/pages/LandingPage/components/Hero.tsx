import { Link } from "react-router-dom";
import Icon from "../../../common/Icon";
import usePopoverDrawer from "../../../hooks/usePopoverDrawer";

export default function Hero() {
  const drawer = usePopoverDrawer();
  return (
    <section className="px-24 py-24 flex h-screen">
      <div className="flex flex-col gap-y-5 py-12">
        <h1 className="text-5xl font-semibold leading-snug">
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
        <div className="my-10 ">
          <Link
          to="/home"
            className="relative text-2xl font-semibold flex items-center gap-x-4"
            // onClick={() => drawer.show(<AssessmentModal />)}
          >
            Start the Assesment!
            <span className="bg-primary/5 border border-primary/30 rounded-full p-3">
              <Icon icon="lesson" className="text-[2.1rem]" />
            </span>
          </Link>
        </div>
        <div className="my-3 flex max-w-[45vw] gap-x-8">
          <div className="flex max-w-[45%] gap-x-5">
            <img
              draggable={false}
              src="https://cdn-icons-png.flaticon.com/512/6134/6134346.png"
              alt="robot"
              className="aspect-square w-14 h-14"
            />
            <p className="text-sm text-front text-opacity-50">
              We have a bot, "Finny" which helps you understand your finance and
              recommend you modules
            </p>
          </div>
          <div className="flex max-w-[45%] gap-x-5">
            <img
              draggable={false}
              src="https://cdn-icons-png.freepik.com/256/8078/8078617.png?semt=ais_hybrid"
              alt="xp"
              className="aspect-square w-14 h-14"
            />
            <p className="text-sm text-front text-opacity-50">
              You can earn XP by completing modules, and maintaining a streak to
              earn more XP!
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-1 flex-col items-center justify-center">
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

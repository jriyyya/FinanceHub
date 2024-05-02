import { Outlet } from "react-router-dom";
import SideNav from "../common/SideNav";
import Modal from "../common/Modal";
import { useRef } from "react";
import useIdleScrollbar from "../hooks/useIdleScrollbar";
import StatisticsSidebar from "../common/StatisticsSidebar";
import Header from "../common/Header";
import PopupDrawer from "../common/PopupDrawer";
import { twMerge } from "tailwind-merge";
import usePopoverDrawer from "../hooks/usePopoverDrawer";

export default function Default() {
  const mainSectionRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  useIdleScrollbar(mainSectionRef, { idleType: "hidden" });
  const drawer = usePopoverDrawer();

  return (
    <>
      <main className="flex h-screen">
        <Modal />
        <PopupDrawer />

        <div
          className={twMerge(
            "duration-500 flex w-full",
            drawer.element != null && "scale-[98%]"
          )}
        >
          <SideNav />
          <section
            ref={mainSectionRef}
            className="h-screen overflow-y-scroll flex-1 scrollbar-primary"
          >
            {/* <Header /> */}
            <Outlet />
          </section>
          <StatisticsSidebar />
        </div>
      </main>
    </>
  );
}

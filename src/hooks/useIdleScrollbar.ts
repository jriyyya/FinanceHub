import React, { useEffect, useRef } from "react";

export default function useIdleScrollbar(
  ref: React.MutableRefObject<HTMLElement>,
  options?: { timeout?: number; idleType?: "hidden" | "muted" }
) {
  const timeout = useRef<NodeJS.Timeout>();

  const idleClass =
    options?.idleType == "hidden" ? "scrollbar-none" : "scrollbar-idle";

  useEffect(() => {
    ref.current.classList.add(idleClass);
    ref.current.addEventListener("scroll", () => {
      ref.current.classList.add("scrollbar-active");
      if (timeout.current) clearTimeout(timeout.current);
      timeout.current = setTimeout(() => {
        ref.current.classList.remove("scrollbar-active");
      }, options?.timeout || 700);
    });
  }, []);
}

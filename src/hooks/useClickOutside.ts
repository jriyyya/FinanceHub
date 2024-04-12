import React, { useEffect } from "react";

export default function useClickOutside(
  ref: React.MutableRefObject<HTMLElement>,
  callback: () => any
) {
  function handleClick(e: Event) {
    if (ref.current && !ref.current.contains(e.target as Node)) {
      callback();
    }
  }

  useEffect(() => {
    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  });
}

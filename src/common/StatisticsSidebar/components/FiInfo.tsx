import React, { useEffect, useState } from "react";
import Icon, { IconType } from "../../Icon";
import { Link } from "react-router-dom";

export default function FiInfo() {
  const [seed, setSeed] = useState(Date.now());

  useEffect(() => {
    setInterval(() => {
      setSeed(Date.now());
    }, 100);
  }, []);

  return (
    <div className="border-t border-border px-6 py-4 flex flex-col gap-y-1 text-sm font-semibold">
      <div className="bg-primary p-2 rounded-lg mb-3 relative overflow-hidden">
        <div className="absolute-cover bg-gradient-to-r from-transparent to-front/50" />

        <div className="flex relative z-10">
          <div className="w-1/4 flex flex-col items-center">
            <img src="/logo.png" alt="logo" className="brightness-0 invert" />
            <p className="font-black text-lg">FiHub</p>
          </div>

          <figure role="separator" className="flex-1" />

          <div className="flex flex-col text-red-500 font-black">
            <figure role="separator" className="flex-1" />
          </div>
        </div>
      </div>

      <div className="flex text-xs gap-x-2" key={seed}>
        <p>{new Date(Date.now()).toLocaleTimeString()}</p>
        <p>{new Date(Date.now()).toDateString()}</p>
      </div>

      <div className="flex items-center gap-x-3">
        Socials
        {socialLinks.map((social, key) => (
          <Link to={social.link} key={key}>
            <Icon icon={social.icon} />
          </Link>
        ))}
      </div>
    </div>
  );
}

const socialLinks: Array<{ link: string; icon: IconType }> = [
  { link: "", icon: "github" },
  { link: "", icon: "github" },
  { link: "", icon: "github" },
  { link: "", icon: "github" },
];

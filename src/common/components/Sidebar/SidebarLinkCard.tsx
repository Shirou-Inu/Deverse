import type { ReactNode } from "react";
import { DiAtom } from "react-icons/di";
import { Link } from "react-router-dom";

interface SidebarLinkCardProps {
  url: string;
  text?: string;
  icon?: ReactNode;
  current?: boolean;
  collapsed?: boolean;
  className?: string;
}

function SidebarLinkCard({
  url,
  text = "",
  icon = <DiAtom size={24} />,
  current = false,
  collapsed = false,
}: SidebarLinkCardProps) {
  if (current) {
    return (
      <div
        className={`flex flex-row px-4 py-2 gap-2 items-center rounded
        bg-[oklch(0.82_0.08_264)] text-[oklch(0.1_0.07_264)]
        dark:bg-[oklch(0.3_0.08_264)] dark:text-[oklch(0.96_0.07_264)]`}
      >
        <div>{icon}</div>
        <div
          className={`transition-all ease-out duration-300 ${
            collapsed
              ? "opacity-100 overflow-hidden"
              : "opacity-100 overflow-auto"
          }`}
        >
          {text}
        </div>
      </div>
    );
  } else {
    return (
      <Link
        to={url}
        className={`flex flex-row px-4 py-2 gap-2 items-center rounded
        text-[oklch(0.15_0.07_264)] dark:text-[oklch(0.9_0.07_264)]
        hover:bg-[oklch(0.87_0.08_264)] hover:text-[oklch(0.1_0.07_264)]
        dark:hover:bg-[oklch(0.25_0.08_264)] dark:hover:text-[oklch(0.96_0.07_264)]
        transition-colors`}
      >
        <div>{icon}</div>
        <div
          className={`transition-all ease-out duration-300 ${
            collapsed
              ? "opacity-100 overflow-hidden"
              : "opacity-100 overflow-auto"
          }`}
        >
          {text}
        </div>
      </Link>
    );
  }
}

export default SidebarLinkCard;

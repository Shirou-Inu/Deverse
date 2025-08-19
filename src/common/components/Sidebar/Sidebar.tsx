import { useState } from "react";
import { motion } from "framer-motion";
import SidebarHeader from "./SidebarHeader";
import { DiAtom } from "react-icons/di";
import SidebarLinkCard from "./SidebarLinkCard";
import { useLocation } from "react-router-dom";
import { basePath } from "../../utils/routes";

const contentLinks = [
  { url: basePath + "/", text: "Home", icon: <DiAtom size={24} /> },
  { url: basePath + "/about", text: "About", icon: <DiAtom size={24} /> },
  { url: basePath + "/template", text: "Template", icon: <DiAtom size={24} /> },
];

const Sidebar: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();

  return (
    <aside
      className={`sticky left-0 top-0 flex flex-shrink-0 flex-col h-screen transition-all duration-300 px-1 border-r ${
        collapsed ? "w-16" : "w-64"
      }
      bg-[oklch(0.9_0.08_264)] text-[oklch(0.15_0.07_264)] border-[oklch(0.7_0.07_264)]
      dark:bg-[oklch(0.2_0.08_264)] dark:text-[oklch(0.96_0.07_264)] dark:border-[oklch(0.3_0.07_264)]
      `}
    >
      <SidebarHeader
        collapsed={collapsed}
        onToggleCollapse={() => setCollapsed((prev) => !prev)}
      />

      {/* Sidebar content */}
      <motion.nav
        className="flex flex-col flex-grow py-4 justify-start w-full overflow-y-auto"
        layout
      >
        <ul className="space-y-2">
          {contentLinks.map((item, idx) => (
            <li key={idx}>
              <SidebarLinkCard
                url={item.url}
                text={item.text}
                icon={item.icon}
                current={location.pathname === item.url}
                collapsed={collapsed}
              />
            </li>
          ))}
        </ul>
      </motion.nav>
    </aside>
  );
};

export default Sidebar;

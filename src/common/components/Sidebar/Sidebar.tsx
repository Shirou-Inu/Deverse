import { useState } from "react";
import { FiChevronRight } from "react-icons/fi";
import { DiAptana } from "react-icons/di";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside
      className={`sticky left-0 top-0 flex flex-shrink-0 flex-col h-screen transition-all duration-300 bg-bg text-text border-r border-border px-1 ${
        collapsed ? "w-16" : "w-64"
      }`}
    >
      {/* Header */}
      <motion.header
        layout
        className={`relative p-3 flex flex-col border-b border-border ${
          collapsed ? "gap-2" : ""
        }`}
      >
        {/* Collapse Button */}
        <motion.button
          layout
          className={`absolute top-3 right-3 rounded p-1`}
          onClick={() => setCollapsed((prev) => !prev)}
        >
          <FiChevronRight
            size={24}
            className={`transition-transform duration-300 ${
              collapsed ? "rotate-0" : "rotate-180"
            }`}
          />
        </motion.button>

        {/* Phantom Button for positioning purposes */}
        <AnimatePresence initial={false}>
          {collapsed && (
            // outer container animates height (auto -> 0), overflow hidden
            <motion.div
              layout
              initial={{ height: 0 }}
              animate={{ height: "auto" }}
              exit={{ height: 0 }}
              transition={{ duration: 0.2, ease: "easeInOut", delay: 0.1 }}
              aria-hidden
              className="pointer-events-none opacity-0"
            >
              {/* inner content keeps padding/layout you want */}
              <div className="flex rounded p-1 bg-black">
                <div style={{ width: 24, height: 24 }} />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Logo & Title */}
        <motion.div layout className="flex items-center flex-shrink-0 w-full">
          <Link to={"/"} className="flex items-center gap-2">
            <DiAptana
              size={32}
              className={`transition-transform duration-300 ${
                collapsed ? "rotate-0" : "rotate-90"
              }`}
            />
            <AnimatePresence initial={false}>
              {!collapsed && (
                <motion.span
                  layout
                  initial={{ width: 0 }}
                  animate={{
                    width: "auto",
                    transition: { duration: 0.2, ease: "easeOut", delay: 0.1 },
                  }}
                  exit={{
                    width: 0,
                    transition: { duration: 0.2, ease: "easeIn" },
                  }}
                  style={{ overflow: "hidden" }}
                >
                  Deverse
                </motion.span>
              )}
            </AnimatePresence>
          </Link>
        </motion.div>
      </motion.header>

      {/* Sidebar content */}
      <motion.nav
        className="flex flex-col flex-grow py-4 justify-start w-full overflow-y-auto"
        layout
      >
        <ul className="space-y-2"></ul>
      </motion.nav>
    </aside>
  );
}

export default Sidebar;

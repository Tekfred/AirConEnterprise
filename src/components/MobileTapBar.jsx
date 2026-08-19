import { NavLink } from "react-router-dom";
import clsx from "clsx";

const TABS = [
  { to: "/buy", icon: "fa-cart-shopping", label: "Buy" },
  { to: "/sell", icon: "fa-tag", label: "Sell" },
  { to: "/how-it-works", icon: "fa-circle-question", label: "Guide" },
  { to: "/contact", icon: "fa-circle-question", label: "Contact" },
];

export default function MobileTabBar() {
  return (
    <nav
      className={clsx(
        "md:hidden",
        "fixed",
        "bottom-0",
        "left-0",
        "right-0",
        "z-100",
        "bg-surface",
        "dark:bg-dark-surface",
        "border-t",
        "border-border",
        "dark:border-dark-border",
        "flex",
        "items-center",
        "justify-around",
        "py-2",
        "px-2",
      )}
    >
      {TABS.map((tab) => (
        <NavLink
          key={tab.to}
          to={tab.to}
          className={({ isActive }) =>
            clsx(
              "flex",
              "flex-col",
              "items-center",
              "gap-1",
              "text-xs",
              "font-medium",
              "px-3",
              "py-1.5",
              "rounded-full",
              "transition-colors",
              isActive ? "bg-primary text-white" : "text-text-muted",
            )
          }
        >
          {({ isActive }) => (
            <>
              <span
                className={clsx(
                  "w-9",
                  "h-9",
                  "rounded-full",
                  "flex",
                  "items-center",
                  "justify-center",
                  isActive ? "bg-primary text-white" : "bg-transparent",
                )}
              >
                <i className={"fa-solid " + tab.icon}></i>
              </span>
              {tab.label}
            </>
          )}
        </NavLink>
      ))}
    </nav>
  );
}

import React, { HTMLAttributes, forwardRef, useState } from "react";
import clsx from "clsx";
import { Link, useLocation } from "react-router-dom";
import { twMerge } from "tailwind-merge";

interface Props extends HTMLAttributes<HTMLElement> {}

const Nav = forwardRef<HTMLElement, Props>(
  ({ className, ...props }: Props, ref) => {
    const [showNav, setShowNav] = useState(false);
    const location = useLocation();
    const navPath = location.pathname.split("/");

    return (
      <nav ref={ref} {...props} className={twMerge(className)}>
        <button
          className={clsx(
            "absolute -right-full bg-slate-900 text-white text-sm p-2",
            showNav && "hidden"
          )}
          onClick={() => setShowNav(!showNav)}
        >
          Click to open menu
        </button>
        <div className={clsx(!showNav && "hidden")}>
          <ul className="h-full flex flex-col gap-4">
            <li
              className={clsx(
                "px-4 py-3 font-semibold text-sm",
                navPath[1] === "overview" &&
                  "bg-orange-500 text-white rounded-lg"
              )}
            >
              <Link to="/overview">Overview</Link>
            </li>
            <li
              className={clsx(
                "px-4 py-3 font-semibold text-sm",
                navPath[1] === "workout" &&
                  "bg-orange-500 text-white rounded-lg"
              )}
            >
              <Link to="/workout">Workout</Link>
            </li>
            <li
              className={clsx(
                "px-4 py-3 font-semibold text-sm",
                navPath[1] === "diet_plan" &&
                  "bg-orange-500 text-white rounded-lg"
              )}
            >
              <Link to="/diet_plan">Diet Plan</Link>
            </li>
            <li
              className={clsx(
                "px-4 py-3 font-semibold text-sm",
                navPath[1] === "goals" && "bg-orange-500 text-white rounded-lg"
              )}
            >
              <Link to="/goals">Goals</Link>
            </li>
            <li
              className={clsx(
                "px-4 py-3 font-semibold text-sm",
                navPath[1] === "my_schedule" &&
                  "bg-orange-500 text-white rounded-lg"
              )}
            >
              <Link to="/my_schedule">My Schedule</Link>
            </li>
            <li
              className={clsx(
                "px-4 py-3 font-semibold text-sm",
                navPath[1] === "progress" &&
                  "bg-orange-500 text-white rounded-lg"
              )}
            >
              <Link to="/progress">Progress</Link>
            </li>
          </ul>
        </div>
        <div className={clsx(!showNav && "hidden")}>
          <ul className="h-full flex flex-col gap-4">
            <li className="px-4 py-3 font-semibold text-sm">Help</li>
            <li className="px-4 py-3 font-semibold text-sm">Logout</li>
          </ul>
        </div>
      </nav>
    );
  }
);

export default Nav;

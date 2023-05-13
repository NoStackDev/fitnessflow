import React, { HTMLAttributes, forwardRef, Suspense, lazy } from "react";
import clsx from "clsx";
import { Link, useLocation } from "react-router-dom";
import { twMerge } from "tailwind-merge";

const OverviewIcon = lazy(() => import("../../UI/OverviewIcon"));
const WorkoutIcon = lazy(() => import("../../UI/WorkoutIcon"));

interface Props extends HTMLAttributes<HTMLElement> {}

const Nav = forwardRef<HTMLElement, Props>(
  ({ className, ...props }: Props, ref) => {
    const location = useLocation();
    const navPath = location.pathname.split("/");

    return (
      <nav ref={ref} {...props} className={twMerge(className)}>
        <div>
          <ul className="h-full flex flex-col gap-4">
            <li
              className={clsx(
                "px-4 py-3 font-semibold text-sm grid grid-flow-col gap-4",
                navPath[1] === "overview" &&
                  "bg-orange-500 text-white rounded-lg"
              )}
            >
              <Suspense
                fallback={
                  <div className="w-5 h-5 bg-slate-600 animate-pulse"></div>
                }
              >
                <OverviewIcon className="block stroke-slate-600 self-center" />
              </Suspense>
              <Link className="w-full block self-center" to="/overview">
                Overview
              </Link>
            </li>
            <li
              className={clsx(
                "px-4 py-3 font-semibold text-sm grid grid-flow-col gap-4",
                navPath[1] === "workout" &&
                  "bg-orange-500 text-white rounded-lg"
              )}
            >
              <Suspense
                fallback={
                  <div className="w-6 h-[14px] bg-slate-600 animate-pulse"></div>
                }
              >
                <WorkoutIcon className="stroke-slate-600 self-center" />
              </Suspense>
              <Link className="w-full block self-center" to="/workout">
                Workout
              </Link>
            </li>
            <li
              className={clsx(
                "px-4 py-3 font-semibold text-sm grid grid-flow-col gap-4",
                navPath[1] === "diet_plan" &&
                  "bg-orange-500 text-white rounded-lg"
              )}
            >
              <Link className="w-full block self-center" to="/diet_plan">
                Diet Plan
              </Link>
            </li>
            <li
              className={clsx(
                "px-4 py-3 font-semibold text-sm grid grid-flow-col gap-4",
                navPath[1] === "goals" && "bg-orange-500 text-white rounded-lg"
              )}
            >
              <Link className="w-full block self-center" to="/goals">
                Goals
              </Link>
            </li>
            <li
              className={clsx(
                "px-4 py-3 font-semibold text-sm grid grid-flow-col gap-4",
                navPath[1] === "my_schedule" &&
                  "bg-orange-500 text-white rounded-lg"
              )}
            >
              <Link className="w-full block self-center" to="/my_schedule">
                My Schedule
              </Link>
            </li>
            <li
              className={clsx(
                "px-4 py-3 font-semibold text-sm grid grid-flow-col gap-4",
                navPath[1] === "progress" &&
                  "bg-orange-500 text-white rounded-lg"
              )}
            >
              <Link className="w-full block self-center" to="/progress">
                Progress
              </Link>
            </li>
          </ul>
        </div>
        <div>
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

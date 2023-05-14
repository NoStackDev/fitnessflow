import React, { HTMLAttributes, forwardRef, Suspense, lazy } from "react";
import clsx from "clsx";
import { Link, useLocation } from "react-router-dom";
import { twMerge } from "tailwind-merge";

const OverviewIcon = lazy(() => import("../../UI/OverviewIcon"));
const WorkoutIcon = lazy(() => import("../../UI/WorkoutIcon"));
const DietIcon = lazy(() => import("../../UI/DietIcon"));
const GoalsIcon = lazy(() => import("../../UI/GoalsIcon"));
const ScheduleIcon = lazy(() => import("../../UI/ScheduleIcon"));
const ProgressIcon = lazy(() => import("../../UI/ProgressIcon"));

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
                "font-semibold text-sm",
                navPath[1] === "overview" &&
                  "bg-orange-500 text-white rounded-lg"
              )}
            >
              <Link
                className="w-full px-4 py-3 grid grid-cols-[24px_1fr] gap-4"
                to="/overview"
              >
                <Suspense
                  fallback={
                    <div className="w-5 h-5 bg-slate-600 animate-pulse"></div>
                  }
                >
                  <OverviewIcon
                    className={clsx(
                      "block stroke-slate-600",
                      navPath[1] === "overview" && "stroke-white"
                    )}
                  />
                </Suspense>
                <div className="self-center">Overview</div>
              </Link>
            </li>

            <li
              className={clsx(
                "font-semibold text-sm",
                navPath[1] === "workout" &&
                  "bg-orange-500 text-white rounded-lg"
              )}
            >
              <Link
                className="w-full px-4 py-3 grid grid-cols-[24px_1fr] gap-4"
                to="/workout"
              >
                <Suspense
                  fallback={
                    <div className="w-6 h-[14px] bg-slate-600 animate-pulse"></div>
                  }
                >
                  <WorkoutIcon
                    className={clsx(
                      "stroke-slate-600 self-center",
                      navPath[1] === "workout" && "stroke-white"
                    )}
                  />
                </Suspense>
                <div className="self-center">Workout</div>
              </Link>
            </li>

            <li
              className={clsx(
                "font-semibold text-sm",
                navPath[1] === "diet_plan" &&
                  "bg-orange-500 text-white rounded-lg"
              )}
            >
              <Link
                className="w-full px-4 py-3 grid grid-cols-[24px_1fr] gap-4"
                to="/diet_plan"
              >
                <Suspense
                  fallback={
                    <div className="w-6 h-6 bg-slate-600 animate-pulse"></div>
                  }
                >
                  <DietIcon
                    className={clsx(
                      "block stroke-slate-600",
                      navPath[1] === "diet_plan" && "stroke-white"
                    )}
                  />
                </Suspense>
                <div className="self-center"> Diet Plan</div>
              </Link>
            </li>

            <li
              className={clsx(
                "font-semibold text-sm ",
                navPath[1] === "goals" && "bg-orange-500 text-white rounded-lg"
              )}
            >
              <Link
                className="w-full px-4 py-3 grid grid-cols-[24px_1fr] gap-4"
                to="/goals"
              >
                <Suspense
                  fallback={
                    <div className="w-6 h-6 bg-slate-600 animate-pulse"></div>
                  }
                >
                  <GoalsIcon
                    className={clsx(
                      "block stroke-slate-600",
                      navPath[1] === "goals" && "stroke-white"
                    )}
                  />
                </Suspense>
                <div className="justify-start">Goals</div>
              </Link>
            </li>

            <li
              className={clsx(
                "font-semibold text-sm",
                navPath[1] === "my_schedule" &&
                  "bg-orange-500 text-white rounded-lg"
              )}
            >
              <Link
                className="w-full px-4 py-3 grid grid-cols-[24px_1fr] gap-4"
                to="/my_schedule"
              >
                <Suspense
                  fallback={
                    <div className="w-6 h-6 bg-slate-600 animate-pulse"></div>
                  }
                >
                  <ScheduleIcon
                    className={clsx(
                      "block stroke-slate-600",
                      navPath[1] === "my_schedule" && "stroke-white"
                    )}
                  />
                </Suspense>
                <div className="self-center"> My Schedule</div>
              </Link>
            </li>

            <li
              className={clsx(
                "font-semibold text-sm grid grid-flow-col gap-4",
                navPath[1] === "progress" &&
                  "bg-orange-500 text-white rounded-lg"
              )}
            >
              <Link
                className="w-full px-4 py-3 grid grid-cols-[24px_1fr] gap-4"
                to="/progress"
              >
                <Suspense
                  fallback={
                    <div className="w-6 h-6 bg-slate-600 animate-pulse"></div>
                  }
                >
                  <ProgressIcon
                    className={clsx(
                      "block stroke-slate-600",
                      navPath[1] === "progress" && "stroke-white"
                    )}
                  />
                </Suspense>
                <div className="self-center">Progress</div>
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <ul className="h-full flex flex-col gap-4">
            <li className="px-4 py-3 font-semibold text-sm w-full grid grid-cols-[24px_1fr] gap-4 hover:cursor-pointer">
              <Suspense
                fallback={
                  <div className="w-5 h-5 bg-slate-600 animate-pulse"></div>
                }
              >
                <ProgressIcon className="stroke-slate-600 self-center" />
              </Suspense>
              <div className="self-center">Logout</div>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
);

export default Nav;

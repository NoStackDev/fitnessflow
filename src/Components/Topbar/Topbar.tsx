import clsx from "clsx";
import React, { HTMLAttributes, Suspense, forwardRef, lazy } from "react";
import { twMerge } from "tailwind-merge";

const SearchIcon = lazy(() => import("../UI/SearchIcon"));

interface Props extends HTMLAttributes<HTMLDivElement> {
  setShowNav: React.Dispatch<React.SetStateAction<boolean>>;
  showNav: boolean;
}

const Topbar = forwardRef<React.ElementRef<"div">, Props>(
  ({ className, showNav, setShowNav, ...props }, ref) => {
    return (
      <div ref={ref} className={twMerge(className)} {...props}>
        <button
          className={clsx("md:hidden text-sm flex flex-col gap-1")}
          onClick={() => setShowNav(!showNav)}
        >
          <div className="bg-slate-400 h-1 w-5"></div>
          <div className="bg-slate-400 h-1 w-5"></div>
          <div className="bg-slate-400 h-1 w-5"></div>
        </button>

        <div className="hidden md:flex md:flex-col w-max gap-1">
          <span className="text-slate-500 text-[12px] w-max">Good Morning</span>
          <span className="text-slate-600 font-semibold w-max">
            Welcome Back!
          </span>
        </div>

        <div className="relative w-4/6">
          <input
            className="bg-slate-100 rounded-lg p-2 placeholder:translate-x-8 placeholder:text-slate-500 placeholder:text-sm w-full"
            placeholder="Search"
          />
          <div className="absolute top-[50%] -translate-y-[50%] left-0 translate-x-2">
            <Suspense
              fallback={
                <div className="w-6 h-6 bg-slate-300 rounded-full animate-pulse"></div>
              }
            >
              <SearchIcon className="stroke-slate-500" />
            </Suspense>
          </div>
        </div>

        <div className="h-10 w-10 bg-slate-300 animate-pulse rounded-full"></div>
      </div>
    );
  }
);

export default Topbar;

import clsx from "clsx";
import React, { lazy, Suspense, useRef, useState } from "react";
import { Outlet } from "react-router-dom";
import useOnClickOutside from "../../Hooks/useOnclickOutside";

const Nav = lazy(() => import("../../Components/Nav"));

type Props = {};

const DashboardLayout = (props: Props) => {
  const [showNav, setShowNav] = useState(false);
  const navRef = useRef(null);
  useOnClickOutside(navRef, setShowNav);

  return (
    <div className="relative h-screen w-screen bg-slate-100 md:flex">
      <Suspense
        fallback={
          <div className="absolute md:relative transition-transform h-screen -translate-x-full md:translate-x-0 p-6 flex flex-col justify-between bg-white w-max">
            navbar loading
          </div>
        }
      >
        <Nav
          className={clsx(
            "absolute md:relative transition-transform h-screen translate-x-0 p-6 flex flex-col justify-between bg-white text-slate-600 w-max",
            !showNav &&
              "-translate-x-full md:translate-x-0 duration-500 ease-in-out"
          )}
          ref={navRef}
        />
      </Suspense>
      <div>
        <header>
          <button
            className={clsx("md:hidden text-sm flex flex-col gap-1")}
            onClick={() => setShowNav(!showNav)}
          >
            <div className="bg-slate-500 h-1 w-5"></div>
            <div className="bg-slate-500 h-1 w-5"></div>
            <div className="bg-slate-500 h-1 w-5"></div>
          </button>
        </header>
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;

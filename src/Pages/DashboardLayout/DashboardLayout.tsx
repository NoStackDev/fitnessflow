import clsx from "clsx";
import React, { lazy, Suspense, useRef, useState } from "react";
import { Outlet } from "react-router-dom";
import useOnClickOutside from "../../Hooks/useOnclickOutside";

const Nav = lazy(() => import("../../Components/Nav"));
const Header = lazy(() => import("../../Components/Header"));

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
            "absolute md:relative transition-transform h-screen translate-x-0 p-6 flex flex-col justify-between bg-white text-slate-600 w-max z-50",
            !showNav &&
              "-translate-x-full md:translate-x-0 duration-500 ease-in-out"
          )}
          ref={navRef}
        />
      </Suspense>
      <div className="w-full">
        <Suspense fallback={<div className="bg-white h-[92] w-full"></div>}>
          <Header
            showNav={showNav}
            setShowNav={setShowNav}
            className="px-4 md:px-8 py-3 md:py-6 bg-white w-full flex items-center justify-between"
          />
        </Suspense>
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;

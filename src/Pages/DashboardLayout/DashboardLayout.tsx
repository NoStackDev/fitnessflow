import React, { lazy, Suspense, useState } from "react";
import { Outlet } from "react-router-dom";

const Nav = lazy(() => import("../../Components/Nav"));

type Props = {};

const DashboardLayout = (props: Props) => {
  const [showNav, setShowNav] = useState(false);

  return (
    <div className="relative h-screen w-screen bg-slate-100 md:flex">
      <Suspense fallback={<div>LOADINNNNNG</div>}>
        <Nav className="relative h-screen p-6 flex flex-col justify-between bg-white text-slate-600" />
      </Suspense>
      <div>
        <header></header>
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;

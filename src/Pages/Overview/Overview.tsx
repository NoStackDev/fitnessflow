import React from "react";

const TitleCard = React.lazy(() => import("../../Components/TitleCard"));
const ActionCard = React.lazy(() => import("../../Components/ActionCard"));

type Props = {};

const Overview = (props: Props) => {
  return (
    <div className="grid md:grid-cols-[70%_30%] p-4 md:p-8">
      <div className="flex flex-col gap-4 md:gap-6">
        <React.Suspense
          fallback={
            <div className="bg-overviewTitleCardGradient w-full h-[155px] animate-pulse"></div>
          }
        >
          <TitleCard
            title="Track Your Daily Activities"
            caption="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod "
            className=""
          />
        </React.Suspense>

        <div className="flex flex-col md:grid md:grid-cols-3 gap-4">
          <React.Suspense
            fallback={
              <div className="rounded h-[168px] w-full bg-cyan-500 animate-pulse"></div>
            }
          >
            <ActionCard cardType="WORKOUT" />
          </React.Suspense>

          <React.Suspense
            fallback={
              <div className="rounded h-[168px] w-full bg-orange-500 animate-pulse"></div>
            }
          >
            <ActionCard cardType="CALORIES" card="calories" />
          </React.Suspense>

          <React.Suspense
            fallback={
              <div className="rounded h-[168px] w-full bg-violet-500 animate-pulse"></div>
            }
          >
            <ActionCard cardType="GOALS" card="goals" />
          </React.Suspense>
        </div>

        
      </div>
      <div></div>
    </div>
  );
};

export default Overview;

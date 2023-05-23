import { VariantProps, cva } from "class-variance-authority";
import React from "react";
import { twMerge } from "tailwind-merge";

const GoalsIcon = React.lazy(() => import("../UI/GoalsIcon"));
const WorkoutIcon = React.lazy(() => import("../UI/WorkoutIcon"));
const CaloriesIcon = React.lazy(() => import("../UI/CaloriesIcon"));

const actionCardVariants = cva("flex gap-4 rounded-lg p-4 h-[168px]", {
  variants: {
    card: {
      workout: "bg-cyan-500 bg-[url(../public/images/workoutbg.png)] bg-no-repeat bg-cover",
      calories: "bg-orange-500 bg-[url(../public/images/caloriesbg.png)] bg-no-repeat bg-cover",
      goals: "bg-violet-500 bg-[url(../public/images/goalsbg.png)] bg-no-repeat bg-cover"
    },
  },
  defaultVariants: {
    card: "workout",
  },
});

interface ActionCardProps
  extends VariantProps<typeof actionCardVariants>,
    React.HTMLAttributes<HTMLDivElement> {
  cardType: "GOALS" | "WORKOUT" | "CALORIES";
}

const ActionCard = React.forwardRef<React.ElementRef<"div">, ActionCardProps>(
  ({ className, card, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={twMerge(actionCardVariants({ card }), className)}
      >
        {props.cardType === "WORKOUT" && (
          <>
            <div className="bg-cyan-600 p-[6px] flex items-center justify-center rounded h-fit">
              <React.Suspense fallback={<div>LOADING WORKOUT ICON</div>}>
                <WorkoutIcon className="stroke-white w-8 h-8" />
              </React.Suspense>
            </div>

            <div className="flex flex-col gap-1 text-white">
              <h2 className="text-base font-bold">Workout</h2>
              <span className="text-[12px] font-normal">4hrs</span>
            </div>
          </>
        )}

        {props.cardType === "CALORIES" && (
          <>
            <div className="bg-orange-600 p-[6px] flex items-center justify-center rounded h-fit">
              <React.Suspense fallback={<div>LOADING CALORIES ICON</div>}>
                <CaloriesIcon className="stroke-white w-8 h-8" />
              </React.Suspense>
            </div>

            <div className="flex flex-col gap-1 text-white">
              <h2 className="text-base font-bold">Calories</h2>
              <span className="text-[12px] font-normal">1800 kcl</span>
            </div>
          </>
        )}

        {props.cardType === "GOALS" && (
          <>
            <div className="bg-violet-700 p-[6px] flex items-center justify-center rounded h-fit">
              <React.Suspense fallback={<div>LOADING GOALS ICON</div>}>
                <GoalsIcon className="stroke-white w-8 h-8" />
              </React.Suspense>
            </div>

            <div className="flex flex-col gap-1 text-white">
              <h2 className="text-base font-bold">Goals</h2>
              <span className="text-[12px] font-normal">2/3</span>
            </div>
          </>
        )}
      </div>
    );
  }
);

export default ActionCard;

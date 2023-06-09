import React, { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

interface Props extends React.SVGProps<SVGSVGElement> {}

const WorkoutIcon = forwardRef<SVGSVGElement, Props>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        width="24"
        height="14"
        viewBox="0 0 24 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        ref={ref}
        className={twMerge(className)}
        {...props}
      >
        <path
          d="M9.82 7H14.18M22.5 9.5V4.5M1.5 9.5V4.5M17.18 13C19.58 13 20.18 11.65 20.18 10V4C20.18 2.35 19.58 1 17.18 1C14.78 1 14.18 2.35 14.18 4V10C14.18 11.65 14.78 13 17.18 13ZM6.82 13C4.42 13 3.82 11.65 3.82 10V4C3.82 2.35 4.42 1 6.82 1C9.22 1 9.82 2.35 9.82 4V10C9.82 11.65 9.22 13 6.82 13Z"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
);

export default WorkoutIcon;

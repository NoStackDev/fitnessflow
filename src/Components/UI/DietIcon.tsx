import React, { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

interface Props extends React.SVGProps<SVGSVGElement> {}

const DietIcon = forwardRef<SVGSVGElement, Props>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        ref={ref}
        className={twMerge(className)}
        {...props}
      >
        <path
          d="M21.93 6.76L18.56 20.29C18.4431 20.7793 18.164 21.2146 17.7681 21.5251C17.3723 21.8356 16.8831 22.0029 16.38 22H3.24001C1.73001 22 0.650007 20.52 1.10001 19.07L5.31001 5.55C5.45068 5.0915 5.73419 4.68994 6.11915 4.40391C6.50412 4.11789 6.97042 3.96235 7.45001 3.96H19.75C20.7 3.96 21.49 4.54 21.82 5.34C22.01 5.77 22.05 6.26 21.93 6.76Z"
          // stroke="#475569"
          strokeWidth="1.5"
          strokeMiterlimit="10"
        />
        <path
          d="M16 22H20.78C22.07 22 23.08 20.91 22.99 19.62L22 6M9.68 6.38L10.72 2.06M16.38 6.39L17.32 2.05M7.7 12H15.7M6.7 16H14.7"
          // stroke="#475569"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
);

export default DietIcon;

import React from "react";
import { twMerge } from "tailwind-merge";

interface Props extends React.SVGProps<SVGSVGElement> {}

const CaloriesIcon = React.forwardRef<SVGSVGElement, Props>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        width="25"
        height="24"
        viewBox="0 0 25 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        ref={ref}
        className={twMerge(className)}
        {...props}
      >
        <path
          d="M16.8667 10C16.8667 10 16.6667 11 13.6667 15C10.7667 18.8 14.9667 21.6 15.4667 22H15.5667C16.1667 21.5 23.7667 16.7 16.8667 10Z"
          stroke="white"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M14.4667 7.8C14.4667 5.5 13.5667 3.4 12.6667 2.2C12.3667 1.9 11.8667 2 11.7667 2.4C11.3667 3.9 10.1667 7.1 7.26668 10.9C3.56668 15.7 6.96668 20.9 10.4667 21.9C12.3667 22.4 9.96668 20.9 9.66668 17.8C9.36668 13.9 14.4667 11 14.4667 7.8Z"
          stroke="white"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
);

export default CaloriesIcon;

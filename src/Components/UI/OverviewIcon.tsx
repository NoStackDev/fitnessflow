import React, { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

interface Props extends React.SVGProps<SVGSVGElement> {}

const OverviewIcon = forwardRef<SVGSVGElement, Props>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        width="20px"
        height="20px"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        ref={ref}
        className={twMerge(className)}
        {...props}
      >
        <path
          d="M8.06 3.32771V3.33V5.23C8.06 6.23613 7.79557 6.92232 7.35895 7.35895C6.92232 7.79557 6.23613 8.06 5.23 8.06H3.33C2.32387 8.06 1.63768 7.79557 1.20105 7.35895C0.764427 6.92232 0.5 6.23613 0.5 5.23V3.33C0.5 2.32387 0.764412 1.63797 1.20191 1.20145C1.63959 0.764743 2.32828 0.5 3.34 0.5H5.24C6.24631 0.5 6.93213 0.764509 7.3673 1.20066C7.80228 1.63661 8.06462 2.322 8.06 3.32771ZM8.06 14.7677V14.77V16.67C8.06 17.6761 7.79557 18.3623 7.35895 18.7989C6.92232 19.2356 6.23613 19.5 5.23 19.5H3.33C2.32387 19.5 1.63797 19.2356 1.20145 18.7981C0.764743 18.3604 0.5 17.6717 0.5 16.66V14.76C0.5 13.7539 0.764412 13.068 1.20191 12.6314C1.63959 12.1947 2.32828 11.93 3.34 11.93H5.24C6.24631 11.93 6.93184 12.1945 7.36691 12.6315C7.80196 13.0685 8.06462 13.7564 8.06 14.7677ZM14.77 0.5H16.67C17.6761 0.5 18.3623 0.764427 18.7989 1.20105C19.2356 1.63768 19.5 2.32387 19.5 3.33V5.23C19.5 6.23613 19.2356 6.92232 18.7989 7.35895C18.3623 7.79557 17.6761 8.06 16.67 8.06H14.77C13.7639 8.06 13.0777 7.79557 12.6411 7.35895C12.2044 6.92232 11.94 6.23613 11.94 5.23V3.33C11.94 2.32387 12.2044 1.63768 12.6411 1.20105C13.0777 0.764427 13.7639 0.5 14.77 0.5ZM14.77 11.93H16.67C17.6761 11.93 18.3623 12.1944 18.7989 12.6311C19.2356 13.0677 19.5 13.7539 19.5 14.76V16.66C19.5 17.6661 19.2356 18.3523 18.7989 18.7889C18.3623 19.2256 17.6761 19.49 16.67 19.49H14.77C13.7639 19.49 13.0777 19.2256 12.6411 18.7889C12.2044 18.3523 11.94 17.6661 11.94 16.66V14.76C11.94 13.7539 12.2044 13.0677 12.6411 12.6311C13.0777 12.1944 13.7639 11.93 14.77 11.93Z"
          //   fill="white"
          //   stroke="white"
          strokeWidth="1.5"
        />
      </svg>
    );
  }
);

export default OverviewIcon;
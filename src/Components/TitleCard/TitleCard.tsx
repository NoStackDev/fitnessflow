import React, { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

interface Props extends HTMLAttributes<HTMLDivElement> {
  title: string;
  caption: string;
}

const TitleCard = React.forwardRef<React.ElementRef<"div">, Props>(
  ({ children, className, title, caption, ...props }, ref) => {
    return (
      <div
        className={twMerge(
          "relative p-4 md:p-8 bg-overviewTitleCardGradient bg-blend-normal bg-no-repeat bg-right bg-contain rounded-xl text-white flex flex-col gap-[5px]",
          className
        )}
      >
        <h1 className="text-2xl font-extrabold">{title}</h1>
        <span className="block w-1/2 text-justify text-[12px] font-normal">{caption}</span>
      </div>
    );
  }
);

export default TitleCard;

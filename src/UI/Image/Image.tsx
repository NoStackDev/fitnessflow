import React, { HTMLAttributes, ReactNode, forwardRef } from "react";
import { twMerge } from "tailwind-merge";

interface Props extends React.ImgHTMLAttributes<HTMLImageElement> {
  loadingSkeleton?: ReactNode;
}

const Image = forwardRef<React.ImgHTMLAttributes<HTMLImageElement>>(
  ({ className, ...props }: Props, ref) => {
    return <img {...props}  className={twMerge(className)} />;
  }
);

export default Image;

import { cn } from "@/lib/utils";
import { ReactNode } from "react";

const MaxWidthWrapper = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("md:mx-auto md:max-w-screen-xl  md:px-8", className)}>
      {children}
    </div>
  );
};

export default MaxWidthWrapper;

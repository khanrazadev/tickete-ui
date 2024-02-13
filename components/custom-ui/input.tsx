"use client";
import { cn } from "@/lib/utils";
import { Input } from "../../node_modules/@material-tailwind/react";

interface InputProps {
  title: string;
}
const CInput = ({ title }: InputProps) => {
  return (
    <div className={cn("relative w-full h-10")}>
      <Input
        // @ts-ignore
        label={
          <>
            {title}
            <p className="text-red-500 ml-[1px]">*</p>
          </>
        }
      />
    </div>
  );
};

export default CInput;

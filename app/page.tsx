"use client";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { HiInformationCircle } from "react-icons/hi";

import Sidebar from "@/components/Sidebar";
import FaQ from "@/components/FaQ";
import Payment from "@/components/Payment";
import { Input } from "../node_modules/@material-tailwind/react";

export default function Home() {
  return (
    <MaxWidthWrapper className="p-4">
      <h1 className=" font-medium py-4 text-[32px] md:text-[57px] font-serif text-[#1C2024]">
        Confirm & pay
      </h1>

      <div className="md:grid grid-cols-3">
        <Sidebar />
        <div className="col-span-2 md:grid-cols-2 md:order-1 gap-6 md:pr-6 md:mr-6">
          <div className="space-y-6 py-4 grid">
            {/* free cancellation */}
            <div className="text-sm flex flex-col border rounded-md p-4">
              <p className="font-semibold flex items-center justify-between">
                Free cancellation
                <HiInformationCircle className=" text-muted-foreground w-3 h-3 mt-1" />
              </p>
              <p className="text-muted-foreground">
                Tickets can be cancelled by 13th December, 2022.
              </p>
            </div>
            <hr className="md:hidden" />
            {/* forms */}
            <Payment />
          </div>
        </div>
      </div>
      <FaQ />
    </MaxWidthWrapper>
  );
}

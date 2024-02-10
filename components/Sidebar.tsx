import { HiOutlineInformationCircle } from "react-icons/hi";
import {
  PiTicketFill,
  PiCalendarBlankFill,
  PiUsersFill,
  PiPiggyBankFill,
  PiLockFill,
} from "react-icons/pi";
import { Icons } from "./Icons";
import {
  CAccordion,
  CAccordionItem,
  CAccordionTrigger,
  CAccordionContent,
} from "./custom-ui/accordion";
import Carousal from "./custom-ui/carousal";
import { Button } from "./ui/button";

const Sidebar = () => {
  return (
    <div className="border rounded-xl md:h-fit md:order-2 flex flex-col space-y-4">
      <div className="p-4">
        <div className="h-[198px] w-full flex justify-center items-center">
          {/* Carousal */}
          <Carousal />
        </div>

        <div className="font-semibold space-y-4 text-sm flex items-center">
          <div className="h-[1px]">
            <Icons.ratingstar className="w-5 " />
          </div>
          <p>4.6</p>
          <p className="text-muted-foreground font-normal text-sm">{"(293)"}</p>
        </div>

        <p className="font-semibold">
          Amsterdam open boat canal cruise - Live Guiye - from Anne Frank Housef
        </p>

        <div className="font-semibold space-y-4 py-4 text-[#1C2024]">
          <div className="flex gap-2 items-center">
            <PiTicketFill />
            Dubai Safari Park Day Pass
          </div>
          <div className="flex gap-2 items-center">
            <PiCalendarBlankFill />
            Sun, Feb 11 2024
          </div>
          <div className="flex gap-2 items-center">
            <PiUsersFill /> 5 guests
          </div>
          <div className="border border-dashed" />
          <CAccordion type="single" collapsible>
            <CAccordionItem value="item-1">
              <CAccordionTrigger>
                <p className="font-semibold underline text-[#60646C]">
                  Is it accessible?
                </p>
              </CAccordionTrigger>
              <CAccordionContent>
                <div className="flex justify-between text-muted-foreground">
                  <p>1 Adult</p>
                  <p>₹3,390.98</p>
                </div>
              </CAccordionContent>
            </CAccordionItem>
          </CAccordion>
        </div>
      </div>

      <div className="border-t p-4">
        <div className="space-y-4 flex justify-between items-baseline w-full">
          <div className="w-full space-y-2">
            <div className="flex justify-between items-center font-semibold text-lg">
              <p>Total payable</p>
              <p>$XXX</p>
            </div>

            <div className=" rounded-full bg-[#E9F9EE]  h-6 w-[120px] text-xs font-semibold text-[#299764] gap-1 justify-center flex items-center">
              <PiPiggyBankFill className="mt-[1px] w-4 h-4" />
              <p>You save price</p>
            </div>
            <div className="font-semibold text-xs text-[#60646C] underline flex items-center gap-2">
              You will be charged in AED
              <span>
                <HiOutlineInformationCircle />
              </span>
            </div>
          </div>
        </div>

        <div className=" hidden md:block text-xs text-muted-foreground py-6">
          By clicking “confirm & pay”, you agree to
          <a
            href=""
            className="text-[#3A5CCC] underline decoration-slate-500 mx-1"
          >
            Tickete’s general terms and conditions
          </a>
          and
          <a
            href=""
            className="text-[#3A5CCC] mx-1 underline decoration-slate-500"
          >
            cancellation policy.
          </a>
        </div>
        <Button className=" hidden h-14 w-full md:flex items-center gap-1 bg-black font-semibold text-lg">
          <PiLockFill className="w-[22px] h-[22px]" />
          Confirm & pay
        </Button>
      </div>
    </div>
  );
};

export default Sidebar;

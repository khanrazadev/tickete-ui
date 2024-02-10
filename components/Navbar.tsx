import Link from "next/link";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { Icons } from "./Icons";
import { PiLockFill } from "react-icons/pi";
import { Button } from "./ui/button";
import { IoHelpCircleOutline } from "react-icons/io5";
import { IoIosArrowRoundBack } from "react-icons/io";

const Navbar = () => {
  return (
    <>
      <header className="relative bg-white">
        <MaxWidthWrapper className="flex h-16 items-center justify-around md:justify-between">
          <Link href={"/"}>
            <Icons.logo className="h-8 w-32 hidden md:block" />
            <IoIosArrowRoundBack className="md:hidden h-8 w-10" />
          </Link>
          <div className="text-muted-foreground text-base font-semibold flex items-center gap-2">
            <PiLockFill className="h-5 w-5" />
            Checkout
          </div>
          <Button
            variant={"ghost"}
            className="text-base font-normal max-w-[90px]"
          >
            <IoHelpCircleOutline className="h-5 w-5 mt-[2px]" />
            <p className="hidden md:block">Help</p>
          </Button>
        </MaxWidthWrapper>
      </header>
      <div className="w-full z-50 h-10 bg-black items-center flex justify-center text-white font-semibold sticky top-0">
        Holding your tickets for 15:00
      </div>
    </>
  );
};

export default Navbar;

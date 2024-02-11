import { CiCreditCard1 } from "react-icons/ci";
import { FaApplePay, FaGooglePay } from "react-icons/fa";
import {
  HiOutlineInformationCircle,
  HiInformationCircle,
} from "react-icons/hi";
import { PiPiggyBankFill, PiLockFill } from "react-icons/pi";
import { Icons } from "./Icons";
import Input from "./custom-ui/input";
import { Button } from "./ui/button";

const Payment = () => {
  return (
    <>
      <div className="space-y-6 pt-6">
        <h2 className="font-semibold text-2xl">Enter your details</h2>
        <p className="text-muted-foreground">
          We'll be sending your tickets to the details below. Booking for a
          friend? Add their details.
        </p>
      </div>

      <div className="mt-2 flex flex-col gap-2 space-y-4">
        <Input title="Full name" />

        <div className="md:flex md:gap-4 space-y-4 md:space-y-0">
          <Input title="Country code" />
          <Input title="Phone number" />
        </div>

        <div className="md:flex md:gap-4 space-y-4 md:space-y-0">
          <Input title="Email" />
          <Input title="Confirm email" />
        </div>
        <hr />
      </div>

      {/* Additional Information */}

      <div className="space-y-6 pt-6">
        <h2 className="font-semibold text-2xl">Additional information</h2>
        <p className="text-muted-foreground">
          We need a few more details to complete your reservation.
        </p>
      </div>

      <div className="mt-2 flex flex-col gap-2 space-y-4">
        <div className="md:flex gap-4 space-y-4 md:space-y-0">
          <Input title="Input label" />
          <Input title="Select" />
        </div>
        <Input title="Multiselect" />
        <hr />
      </div>

      {/* Payment select  */}

      <div className="space-y-6 pt-6">
        <h2 className="font-semibold text-2xl">Select your mode of payment</h2>
        <p className="text-muted-foreground">
          Payments with Tickete are secure and encrypted.
        </p>
      </div>

      <div className="py-10 border border-black rounded-md px-5 space-y-6">
        <div className=" font-semibold flex justify-between">
          <div className="flex gap-2">
            <CiCreditCard1 className=" rounded w-9 h-6 border text-slate-500" />
            Credit & debit card
          </div>
          <div className="bg-black w-6 h-6 rounded-full flex items-center justify-center">
            <div className="w-2 h-2 rounded-full bg-white" />
          </div>
        </div>

        <div className="flex gap-2">
          <Icons.visa className="h-5 w-9 border rounded" />
          <Icons.mastercard className="h-5 w-9 border rounded" />
          <Icons.dinnersclub className="h-5 w-9 border rounded" />
        </div>

        <div className="space-y-6">
          <div className="md:flex gap-4 space-y-4 md:space-y-0">
            <Input title="Name on card" />
            <Input title="Card number" />
          </div>
          <div className="md:flex gap-4 md:space-y-0">
            <Input title="Expiry date" />
            <Input title="<CVV/CVC" />
          </div>
        </div>

        <div className="space-y-6 flex justify-between items-baseline">
          <div className="space-y-4">
            <div className="rounded-full bg-[#299764] text-xs font-semibold h-6 w-32 md:hidden p-2  text-white gap-1 flex justify-center items-center">
              <PiPiggyBankFill className="mt-[1px]" />
              <p>You save price</p>
            </div>
            <h2 className="font-semibold text-lg">Total payable: $XXX</h2>
            <p className="font-semibold text-xs text-[#60646C] underline flex items-center gap-2">
              You will be charged in AED
              <span>
                <HiOutlineInformationCircle />
              </span>
            </p>
          </div>
          <div className=" hidden  rounded-full bg-[#299764] text-xs font-semibold h-6 p-2  text-white gap-1 md:flex justify-center items-center">
            <PiPiggyBankFill className="mt-[1px]" />
            <p>You save price</p>
          </div>
        </div>

        <div>
          <p className="text-xs text-muted-foreground md:flex space-x-2 gap-1">
            By clicking “confirm & pay”, you agree to
            <a
              href=""
              className="text-[#3A5CCC] underline decoration-slate-500"
            >
              Tickete’s general terms and conditions
            </a>
            and
            <a
              href=""
              className="text-[#3A5CCC] underline decoration-slate-500"
            >
              cancellation policy.
            </a>
          </p>
        </div>

        <Button className=" h-14 w-full md:w-[220px]  flex items-center gap-1 bg-black font-semibold text-lg">
          <PiLockFill className="w-[22px] h-[22px]" />
          Confirm & pay
        </Button>
      </div>
      <div className="text-[#8B8D98] font-semibold flex items-center h-[72px] rounded-lg border-2 bg-[#F9F9FB] justify-between px-6">
        <div className="flex gap-3 items-center">
          <FaApplePay className="w-[35px] h-5 bg-[#E4E4E9] rounded-[6px] text-[#8B8D98]" />
          <p>Coming soon</p>
        </div>
        <div className="border-2 bg-[#E4E4E9] w-6 h-6 rounded-full flex items-center justify-center"></div>
      </div>
      <div className="text-[#8B8D98] font-semibold flex items-center h-[72px] rounded-lg border-2 bg-[#F9F9FB] justify-between px-6">
        <div className="flex gap-3 items-center">
          <FaGooglePay className="w-[35px] h-5 bg-[#E4E4E9] rounded-[6px] text-[#8B8D98]" />
          <p>Coming soon</p>
        </div>
        <div className="border-2 bg-[#E4E4E9] w-6 h-6 rounded-full flex items-center justify-center"></div>
      </div>
      <hr className="hidden md:block" />

      <div className="space-y-4 py-6">
        <div className="md:hidden rounded-full bg-[#E9F9EE]  h-6 w-[120px] text-xs font-semibold text-[#299764] gap-1 justify-center flex items-center">
          <PiPiggyBankFill className="mt-[1px] w-4 h-4" />
          <p>You save price</p>
        </div>
        <h2 className="font-semibold text-2xl">Total Payable: $XXX</h2>
        <div className="border rounded-lg p-4 flex gap-2 ">
          <HiInformationCircle className=" text-black w-5 h-3 mt-1" />
          <div className="flex flex-col gap-1">
            <p className="font-semibold text-sm">You will be charged in AED</p>
            <p className="text-sm text-muted-foreground">
              The price shown here is in US Dollar (USD) as per the current
              conversion rate. You will be charged in United Arab Emirates
              Dirham (AED).
            </p>
          </div>
        </div>
        <hr />
      </div>
    </>
  );
};

export default Payment;

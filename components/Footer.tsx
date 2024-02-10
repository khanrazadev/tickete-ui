import { Icons } from "./Icons";
import MaxWidthWrapper from "./MaxWidthWrapper";

const Footer = () => {
  return (
    <div className=" bg-black h-[316px] flex flex-col justify-between">
      <MaxWidthWrapper className="h-full w-full p-4 flex items-center">
        <div className="h-10">
          <Icons.footerlogo />
        </div>
      </MaxWidthWrapper>
      <div className="border-t m-4 border-[#3C3F44] py-6 text-xs md:text-sm font-semibold">
        <MaxWidthWrapper className="text-[#ADB1B8] md:flex gap-6 m-4 break-words space-y-4 ">
          <p className="text-[#7D828A]">Made with ❤️</p>
          <ul className=" list-disc flex space-x-8">
            <li>Privacy policy</li>
            <li>Terms of usage</li>
            <li>Cancellation policy</li>
            <li>Sitemap</li>
          </ul>
        </MaxWidthWrapper>
      </div>
    </div>
  );
};

export default Footer;

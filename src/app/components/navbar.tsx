import Image from "next/image";
import Logo from "./images/logo";

export default function Navbar() {
  return (
    <div className="h-[60px] sm:h-[70px] md:h-[92px] flex items-center justify-between py-4 px-4 sm:px-12 md:px-[200px] bg-[#043873]">
      {/* Logo Section */}
      <div className="flex-shrink-0">
        <Logo />
      </div>

      {/* Navigation Links and Button */}
      <div className="hidden md:flex items-center gap-6 md:gap-[60px]">
        {/* Navigation Links */}
        <ul className="flex items-center gap-4 sm:gap-6 md:gap-[32px]">
          <li className="text-sm sm:text-base md:text-lg font-medium leading-tight text-white list-none">
            Products
          </li>
          <li className="text-sm sm:text-base md:text-lg font-medium leading-tight text-white list-none">
            Solutions
          </li>
          <li className="text-sm sm:text-base md:text-lg font-medium leading-tight text-white list-none">
            Resources
          </li>
          <li className="text-sm sm:text-base md:text-lg font-medium leading-tight text-white list-none">
            Pricing
          </li>
        </ul>

        {/* Login Button */}
        <button className="w-[100px] sm:w-[110px] md:w-[126px] h-[40px] sm:h-[50px] md:h-[60px] rounded-md md:rounded-lg font-medium bg-[#FFE492] text-[#043873] py-2 sm:py-3 md:py-4 px-4 sm:px-6 md:px-[40px] hover:bg-[#ffecb3] active:bg-[#dfc066]">
          Login
        </button>
      </div>

      {/* Mobile Hamburger Menu Placeholder */}
      <div className="md:hidden">
        <button className="text-white">
          <Image src="/hamburger-icon.png" alt="Menu" width={24} height={24} />
        </button>
      </div>
    </div>
  );
}

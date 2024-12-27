import Logo from "./images/logo";

export default function Footer() {
  return (
    <div className="h-auto sm:h-[400px] md:h-[461px] px-6 sm:px-16 md:px-[220px] pt-8 sm:pt-16 md:pt-[100px] pb-6 sm:pb-8 md:pb-[32px] bg-[#043873] flex flex-col items-center">
      <div className="w-full max-w-[1200px] flex flex-col gap-8 sm:gap-12 md:gap-[100px]">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 sm:gap-12 md:gap-[100px]">
          {/* Logo and Description */}
          <div className="w-full md:w-[295px] space-y-4">
            <Logo />
            <p className="text-sm sm:text-base md:text-[16px] leading-5 sm:leading-6 md:leading-[30px] text-[#F7F7EE] tracking-tight">
              Whitepace was created for the new ways we live and work. We make a
              better workspace around the world.
            </p>
          </div>

          {/* Product Links */}
          <div className="w-full md:w-[295px] flex flex-col space-y-2">
            <p className="text-sm sm:text-base md:text-[16px] font-bold leading-5 sm:leading-6 md:leading-[21.78px] text-white">
              Product
            </p>
            <p className="text-sm sm:text-base md:text-[16px] leading-5 sm:leading-6 md:leading-[20px] text-[#FFE492]">
              Overview
            </p>
            <p className="text-sm sm:text-base md:text-[16px] leading-5 sm:leading-6 md:leading-[20px] text-white">
              Pricing
            </p>
            <p className="text-sm sm:text-base md:text-[16px] leading-5 sm:leading-6 md:leading-[20px] text-white">
              Customer Stories
            </p>
          </div>

          {/* Resources Links */}
          <div className="w-full md:w-[295px] flex flex-col space-y-2">
            <p className="text-sm sm:text-base md:text-[16px] font-bold leading-5 sm:leading-6 md:leading-[21.78px] text-white">
              Resources
            </p>
            <p className="text-sm sm:text-base md:text-[16px] leading-5 sm:leading-6 md:leading-[20px] text-white">
              Blogs
            </p>
            <p className="text-sm sm:text-base md:text-[16px] leading-5 sm:leading-6 md:leading-[20px] text-white">
              Guides & tutorials
            </p>
            <p className="text-sm sm:text-base md:text-[16px] leading-5 sm:leading-6 md:leading-[20px] text-white">
              Help Center
            </p>
          </div>

          {/* Company Links */}
          <div className="w-full md:w-[295px] flex flex-col space-y-2">
            <p className="text-sm sm:text-base md:text-[16px] font-bold leading-5 sm:leading-6 md:leading-[21.78px] text-white">
              Company
            </p>
            <p className="text-sm sm:text-base md:text-[16px] leading-5 sm:leading-6 md:leading-[20px] text-white">
              About us
            </p>
            <p className="text-sm sm:text-base md:text-[16px] leading-5 sm:leading-6 md:leading-[20px] text-white">
              Careers
            </p>
            <p className="text-sm sm:text-base md:text-[16px] leading-5 sm:leading-6 md:leading-[20px] text-white">
              Media kit
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="text-center text-sm sm:text-[14px] md:text-[14px] leading-5 sm:leading-[20px] md:leading-[20px] tracking-tight text-white">
          ©2021 Whitepace LLC.
        </div>
      </div>
    </div>
  );
}

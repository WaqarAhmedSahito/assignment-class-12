import Image from "next/image";

export default function TryTaskey() {
  return (
    <div className="h-auto sm:h-[500px] md:h-[570px] py-[60px] sm:py-[100px] md:py-[140px] px-[20px] sm:px-[100px] md:px-[220px] bg-[#043873]">
      {/* Content Section */}
      <div className="flex items-center flex-col justify-center gap-[40px] sm:gap-[50px] md:gap-[60px]">
        <div className="w-full sm:w-[750px] md:w-[900px] text-center h-auto gap-[24px]">
          {/* Heading */}
          <h2 className="font-bold text-[30px] sm:text-[45px] md:text-[60px] leading-[40px] sm:leading-[60px] md:leading-[87px] tracking-[-2%] text-white">
            Your work, everywhere you are
          </h2>
          {/* Description */}
          <p className="text-[14px] sm:text-[16px] md:text-[18px] leading-[20px] sm:leading-[25px] md:leading-[30px] tracking-[2%] text-white">
            Access your notes from your computer, phone or tablet by
            synchronising with various services, including whitepace, Dropbox
            and OneDrive. The app is available on Windows, macOS, Linux, Android
            and iOS. A terminal app is also available!
          </p>
        </div>
        {/* Button */}
        <button className="bg-[#4F9CF9] mt-6 sm:mt-8 md:mt-9 flex items-center justify-center text-white active:bg-[#3068ad] w-[150px] sm:w-[171px] md:w-[190px] h-[50px] sm:h-[55px] md:h-[63px] rounded-[4px] sm:rounded-[5px] md:rounded-[6px] py-[10px] sm:py-[15px] md:py-[20px] px-[20px] sm:px-[30px] md:px-[40px] gap-[5px] sm:gap-[8px] md:gap-[10px]">
          Try Taskey
          <Image
            className="relative right-[-0.5rem]"
            src="/hero-btn-v2.png"
            alt="part one of arrow image on button"
            width={8}
            height={5}
          />
          <Image
            src="/hero-btn-v1.png"
            alt="part two of arrow image on button"
            width={5}
            height={5}
          />
        </button>
      </div>
    </div>
  );
}

import Image from "next/image";

export default function Hero() {
  return (
    <div className="h-auto sm:h-[600px] md:h-[700px] py-[60px] sm:py-[100px] md:py-[140px] px-[20px] sm:px-[50px] md:px-[100px] bg-[#043873] flex justify-center items-center">
      <div className="w-full sm:w-[550px] md:w-[650px] h-auto text-center sm:text-left">
        {/* Heading */}
        <h2 className="font-bold text-[40px] sm:text-[50px] md:text-[60px] text-white leading-[50px] sm:leading-[70px] md:leading-[77.45px] tracking-[-2%]">
          Get more done by white pace
        </h2>
        {/* Description */}
        <p className="mt-4 sm:mt-6 font-normal text-[16px] sm:text-[18px] md:text-[18px] leading-[24px] sm:leading-[30px] tracking-[-2%] text-white">
          Project management software that enables your teams to collaborate,
          plan, analyze and manage everyday tasks
        </p>
        {/* Button */}
        <button className="mt-8 sm:mt-10 md:mt-14 w-[180px] sm:w-[200px] md:w-[210px] h-[50px] sm:h-[55px] md:h-[63px] flex items-center justify-center rounded-[6px] sm:rounded-[8px] bg-[#4F9CF9] text-white text-[14px] sm:text-[16px] md:text-[16px] tracking-[-2%] leading-[23px] gap-[5px] active:bg-[#3068ad]">
          Try Whitepace free
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
      {/* Image section */}
      <div className="hidden sm:block md:w-[600px] md:h-[500px] bg-[#C4DEFD]"></div>
    </div>
  );
}

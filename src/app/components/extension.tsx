import Image from "next/image";
export default function UseExtension() {
  return (
    <div className="h-auto sm:h-[500px] md:h-[600px] flex flex-col md:flex-row items-center justify-center py-[60px] sm:py-[100px] md:py-[140px] px-[20px] sm:px-[100px] md:px-[220px] gap-[20px] sm:gap-[50px] md:gap-[98px] bg-[#043873]">
      <div className="w-full sm:w-[500px] md:w-[697px] h-auto gap-[20px] sm:gap-[40px] md:gap-[60px]">
        <h2 className="font-bold text-[30px] sm:text-[40px] md:text-[50px] leading-[40px] sm:leading-[60px] md:leading-[87.14px] tracking-[-2%] text-white">
          Use as Extension
        </h2>
        <p className="mt-4 sm:mt-6 text-[14px] sm:text-[16px] md:text-[18px] leading-[20px] sm:leading-[25px] md:leading-[30px] tracking-[-2%] text-white">
          Use the web clipper extension, available on Chrome and Firefox, to
          save web pages or take screenshots as notes.
        </p>
        <button className="bg-[#4F9CF9] mt-6 sm:mt-8 md:mt-10 flex items-center justify-center text-white active:bg-[#3068ad] w-[150px] sm:w-[171px] md:w-[171px] h-[50px] sm:h-[55px] md:h-[63px] rounded-[4px] sm:rounded-[5px] md:rounded-[6px] py-[10px] sm:py-[15px] md:py-[20px] px-[20px] sm:px-[30px] md:px-[40px] gap-[5px] sm:gap-[8px] md:gap-[10px]">
          Login
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
      <div className="w-full sm:w-[400px] md:w-[686px] h-[200px] sm:h-[300px] md:h-[375px] bg-[#C4DEFD]"></div>
    </div>
  );
}

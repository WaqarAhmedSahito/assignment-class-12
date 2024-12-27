
import Image from "next/image";
export default function Customise() {
  return (
    <div className="h-[612px] flex flex-col md:flex-row justify-center items-center py-[80px] sm:py-[100px] md:py-[140px] px-[40px] sm:px-[100px] md:px-[220px] gap-[20px] sm:gap-[50px] md:gap-[98px]">
      <div className="w-full sm:w-[500px] md:w-[750px] h-[300px] sm:h-[400px] md:h-[450px] bg-[#C4DEFD]"></div>
      <div className="w-full sm:w-[500px] md:w-[669px] h-auto">
        <h2 className="font-bold text-[30px] sm:text-[45px] md:text-[60px] leading-[40px] sm:leading-[65px] md:leading-[87.14px] tracking-[-2%] text-[#212529]">
          Customise it to your needs
        </h2>
        <p className="mt-4 sm:mt-6 text-[12px] sm:text-[14px] md:text-[16px] leading-[20px] sm:leading-[25px] md:leading-[30px] tracking-[-2%] text-[#212529]">
          Customise the app with plugins, custom themes and multiple text
          editors (Rich Text or Markdown). Or create your own scripts and
          plugins using the Extension API.
        </p>
        <button className="bg-[#4F9CF9] mt-6 sm:mt-9 flex items-center justify-center text-white active:bg-[#3068ad] w-[120px] sm:w-[150px] md:w-[171px] h-[50px] sm:h-[55px] md:h-[63px] rounded-[4px] sm:rounded-[5px] md:rounded-[6px] py-[10px] sm:py-[15px] md:py-[20px] px-[20px] sm:px-[30px] md:px-[40px] gap-[5px] sm:gap-[8px] md:gap-[10px]">
          Let&apos;s Go
          <Image
            className="relative right-[-0.75rem]"
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

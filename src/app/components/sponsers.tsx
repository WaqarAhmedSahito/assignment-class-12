import Image from "next/image";

export default function Sponsers() {
  return (
    <div className="h-auto flex items-center justify-center flex-col py-[60px] sm:py-[100px] md:py-[140px] px-[20px] sm:px-[100px] md:px-[220px] gap-[40px] sm:gap-[60px] md:gap-[100px]">
      {/* Section Heading */}
      <div className="font-bold text-[30px] sm:text-[45px] md:text-[60px] leading-[40px] sm:leading-[65px] md:leading-[87px] tracking-[-2%] text-center">
        Our sponsors
      </div>

      {/* Sponsor Logos */}
      <div className="flex justify-between items-center flex-wrap gap-4 sm:gap-6 md:gap-[50px]">
        <Image
          src="/Apple.png"
          alt="Apple logo"
          width={50}
          height={50}
          className="h-auto w-auto sm:w-[80px] md:w-[100px]"
        />
        <Image
          src="/Microsoft.png"
          alt="Microsoft logo"
          width={150}
          height={50}
          className="h-auto w-auto sm:w-[180px] md:w-[200px]"
        />
        <Image
          src="/Slack.png"
          alt="Slack logo"
          width={150}
          height={50}
          className="h-auto w-auto sm:w-[180px] md:w-[200px]"
        />
        <Image
          src="/Google.png"
          alt="Google logo"
          width={150}
          height={50}
          className="h-auto w-auto sm:w-[180px] md:w-[200px]"
        />
      </div>
    </div>
  );
}

import Image from "next/image";

export default function WorkManage() {
  return (
    <div className="h-auto sm:h-[1300px] md:h-[1488px] py-[60px] sm:py-[100px] md:py-[140px] px-[20px] sm:px-[50px] md:px-[120px] gap-[60px]">

      {/* Project Management Section */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-[60px] h-auto sm:h-[500px] md:h-[547px]">
        <div className="w-full sm:w-[650px] md:w-[700px] text-center md:text-left">
          <h2 className="font-bold text-[40px] sm:text-[50px] md:text-[72px] text-[#212529] leading-[50px] sm:leading-[60px] md:leading-[87.14px] tracking-[-2%]">
            Project Management
          </h2>
          <p className="mt-6 text-[16px] sm:text-[18px] md:text-[18px] leading-[24px] sm:leading-[30px] text-[#212529]">
            Images, videos, PDFs, and audio files are supported. Create math expressions and diagrams directly from the app. Take photos with the mobile app and save them to a note.
          </p>
          <button className="mt-8 sm:mt-10 md:mt-14 bg-[#4F9CF9] flex items-center justify-center text-white active:bg-[#3068ad] w-[200px] sm:w-[210px] md:w-[201px] h-[50px] sm:h-[55px] md:h-[63px] rounded-[6px] py-[15px] sm:py-[20px] px-[30px] sm:px-[40px] gap-[10px]">
            Get Started
            <Image
              className="relative right-[-0.75rem]"
              src="/hero-btn-v2.png"
              alt="arrow part one"
              width={8}
              height={5}
            />
            <Image
              src="/hero-btn-v1.png"
              alt="arrow part two"
              width={5}
              height={5}
            />
          </button>
        </div>
        <div className="hidden sm:block md:w-[748px] md:h-[500px] bg-[#C4DEFD]"></div>
      </div>

      {/* Work Together Section */}
      <div className="flex flex-col md:flex-row gap-[60px] justify-center items-center h-auto sm:h-[500px] md:h-[547px] mt-[60px] sm:mt-[80px] md:mt-[100px]">
        <div className="w-full sm:w-[550px] md:w-[600px] flex justify-center items-center">
          <Image
            src="/Work Together Image.png"
            alt="Work together image"
            width={550}
            height={500}
          />
        </div>
        <div className="w-full sm:w-[670px] md:w-[670px] pl-10 sm:pl-20 md:pl-10 text-center md:text-left">
          <h2 className="font-bold text-[40px] sm:text-[50px] md:text-[72px] text-[#212529] leading-[50px] sm:leading-[60px] md:leading-[87.14px] tracking-[-2%]">
            Work together
          </h2>
          <p className="mt-4 sm:mt-6 text-[16px] sm:text-[18px] md:text-[18px] leading-[24px] sm:leading-[30px] text-[#212529]">
            With whitepace, share your notes with your colleagues and collaborate on them. You can also publish a note to the internet and share the URL with others.
          </p>
          <button className="mt-8 sm:mt-10 md:mt-14 w-[186px] sm:w-[200px] md:w-[186px] flex justify-center items-center text-white active:bg-[#3068ad] bg-[#4F9CF9] h-[50px] sm:h-[55px] md:h-[63px] rounded-[6px] py-[15px] sm:py-[20px] px-[30px] sm:px-[40px] gap-[10px]">
            Try it now
            <Image
              className="relative right-[-0.75rem]"
              src="/hero-btn-v2.png"
              alt="arrow part one"
              width={8}
              height={5}
            />
            <Image
              src="/hero-btn-v1.png"
              alt="arrow part two"
              width={5}
              height={5}
            />
          </button>
        </div>
      </div>
    </div>
  );
}

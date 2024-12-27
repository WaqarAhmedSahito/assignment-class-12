import Image from "next/image";

export default function Logo() {
  return (
    <div>
      <div className="w-[191px]  h-[34px] flex justify-between">
        <Image className="pt-[2.5px]" src="/logo icon.png" alt="logo" width={37} height={29} />
        <p className="w-[144px] h-[34px] leading-[33.89px] text-[28px] font-bold  text-white ">whitepace</p>
      </div>
    </div>
  );
}

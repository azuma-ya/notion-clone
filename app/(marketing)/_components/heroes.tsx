import Image from "next/image";

const Heroes = () => {
  return (
    <div className="flex max-w-5xl flex-col items-center justify-center">
      <div className="flex items-center gap-x-4">
        <div className="relative size-[300px] sm:size-[350px] md:size-[400px]">
          <Image
            src="/vercel.svg"
            fill
            className="object-contain dark:invert"
            alt="Documents"
          />
        </div>
        <div className="relative hidden size-[400px] md:block">
          <Image
            src="/next.svg"
            fill
            className="object-contain dark:invert"
            alt="Documents"
          />
        </div>
      </div>
    </div>
  );
};

export default Heroes;

import { Poppins } from "next/font/google";
import Image from "next/image";

import { cn } from "@/lib/utils";

const font = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"],
});

const Logo = () => {
  return (
    <div className="hidden items-center gap-x-2 md:flex">
      <Image
        src="/next.svg"
        height="40"
        width="40"
        alt="logo"
        className="dark:invert"
      />
      <p className={cn("font-semibold", font.className)}>Azmotion</p>
    </div>
  );
};

export default Logo;

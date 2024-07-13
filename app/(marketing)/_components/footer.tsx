import { Button } from "@/components/ui/button";
import Logo from "./logo";

const Footer = () => {
  return (
    <div className="z-50 flex w-full items-center bg-background p-6 dark:bg-[#1f1f1f]">
      <Logo />
      <div className="flex w-full items-center justify-between gap-x-2 text-muted-foreground md:ml-auto md:justify-end">
        <Button variant="ghost" size="sm">
          Privasy Policy
        </Button>
        <Button variant="ghost" size="sm">
          Teams & Conditions
        </Button>
      </div>
    </div>
  );
};

export default Footer;

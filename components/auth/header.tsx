import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";

const poppin = Poppins({ subsets: ["latin"], weight: ["600"] });

interface HeaderProps {
  label: string;
}

export default function Header({ label }: HeaderProps) {
  return (
    <>
      <div className="flex flex-col w-full gap-y-4 items-center justify-center">
        <h1 className={cn("text-3xl font-semibold", poppin.className)}>
          &#128272; Auth
        </h1>
        <p className="text-muted-foreground text-sm">{label}</p>
      </div>
    </>
  );
}

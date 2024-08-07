import { LoginButton } from "@/components/auth/login-button";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";

const poppin = Poppins({ subsets: ["latin"], weight: ["600"] });
export default function Home() {
  return (
    <>
      <main className="flex h-full items-center justify-center bg-[radial-gradient(ellipse_At_top,_var(--tw-gradient-stops))] from-sky-400 to-blue-800">
        <div className="space-y-6 text-center">
          <h1
            className={cn(
              "text-6xl font-semibold text-white drop-shadow-md",
              poppin.className
            )}
          >
            &#128272; Auth
          </h1>
          <p className="text-white text-lg">A simple authentication service</p>
          <div className="">
            <LoginButton>
              <Button variant={"secondary"} size={"lg"}>
                Sign in
              </Button>
            </LoginButton>
          </div>
        </div>
      </main>
    </>
  );
}

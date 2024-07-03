import Image from "next/image";
import Link from "next/link";
import Socials from "./Socials";

const Header = () => {
  return (
    <header className="absolute z-30 w-full flex items-center px-16 xl:pl-0 xl:h-[90px]">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-between xl:flex-row gap-y-6 py-8">
          <Link href={"/"}>
            <Image
              src="/logo.svg"
              width={260}
              height={48}
              alt="logo"
              priority={true}
            />
          </Link>
          <Socials />
        </div>
      </div>
    </header>
  );
};

export default Header;

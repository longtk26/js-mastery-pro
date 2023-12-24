import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="w-full h-[98px] border-b-2 border-black-200 flex-center">
      <div className="flex-between mx-16 grow max-w-screen-2xl">
        <Link href="/">
          <Image src="/jsm-logo.svg" alt="logo" width={55} height={55} />
        </Link>
        <ul className="hidden md:flex-center gap-x-8">
          <li className="body-text text-gradient_blue-purple !font-bold">
            <Link
              href="https://www.jsmastery.pro/ultimate-next-course"
              target="_blank"
            >
              Next.js 13.4 Course
            </Link>
          </li>
          <li>
            <Link
              href="https://www.jsmastery.pro/full-stack-web-development-bootcamp"
              target="_blank"
              className="body-text font-normal text-white"
            >
              Masterclass
            </Link>
          </li>
        </ul>
        <Image
          src="/hamburger-menu.svg"
          alt="menu"
          width={30}
          height={30}
          className="cursor-pointer block md:hidden"
        />
      </div>
    </nav>
  );
};

export default Navbar;

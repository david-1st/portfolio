import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-around w-full max-h-fit h-20 pl-3 border-b-2  border-black">
      <Link href="/" title="There is no link">
        <Image
          src="/assets/youtube.png"
          width={38}
          height={38}
          alt="My youtube"
        />
      </Link>
      <Link href="//t.me/davidchap">
        <Image
          src="/assets/telegram.png"
          width={38}
          height={38}
          alt="My telegram"
        />
      </Link>
      <Link href="//github.com/david-1st">
        <Image
          src="/assets/github.png"
          width={38}
          height={38}
          alt="My telegram"
        />
      </Link>
    </nav>
  );
};

export default Navbar;

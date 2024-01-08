import Image from "next/image";
import Link from "next/link";

import logoPic from "./logo.png";
import { Button } from "../ui/button";

type LinksType = {
  label: string;
  href: string;
};

const links: LinksType[] = [
  { label: "Zwierzęta do adopcji", href: "/adoptuj" },
  { label: "FAQ", href: "/#faq" },
  { label: "Darowizny", href: "/#darowizny" },
  { label: "Kontakt", href: "/#kontakt" },
];

export const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-4 px-4 md:px-8 lg:px-12 xl:px-16 border-b border-slate-200 mb-8 shadow-md">
      <div>
        <Link href="/">
          <Image src={logoPic} width={50} height={50} alt="Logo stowarzyszenia przyjaciół zwierząt Reks w Malborku" />
        </Link>
      </div>

      <div className="flex space-x-4">
        <ul className="hidden md:block md:space-x-4">
          {links.map(({ label, href }, i) => (
            <Button asChild key={i} variant="ghost">
              <Link href={href}>{label}</Link>
            </Button>
          ))}
        </ul>
        <Button asChild>
          <Link
            href="https://www.ratujemyzwierzaki.pl/reksmalbork?fbclid=IwAR2ARsqD7Wc0JFI64rcZB5sH6SlBatL8XVKZXS5N9Dpvf0Jrd8PzWal6_fI"
            className="tracking-widest"
            target="_blank"
          >
            Zbiórka
          </Link>
        </Button>
      </div>
    </nav>
  );
};

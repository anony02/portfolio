import Image from "next/image";
import Link from "next/link";
import nextConfig from "../../next.config.mjs";
import { LinkType } from "@/data/types";

interface LinkListProps {
  links: LinkType[];
}

export default function LinkList({ links }: LinkListProps) {
  return (
    <ul className="flex items-center">
      {links.map((link) => (
        <li
          key={link.alt}
          className="mr-1.5 mt-2 p-2 dark:drop-shadow-[0_0_5px_#ffffffff] transition-transform transform hover:scale-150"
        >
          <Link href={link.href} target="_blank" rel="noopener noreferrer">
            <Image src={`${nextConfig.basePath}${link.src}`} alt={link.alt} width={link.width} height={link.height} />
          </Link>
        </li>
      ))}
    </ul>
  );
}

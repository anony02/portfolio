import Image from "next/image";
import Link from "next/link";
import nextConfig from "../../next.config.mjs";

interface LinkListProps {
  links: { href: string; src: string; alt: string; width: number; height: number }[];
}

export default function LinkList({ links }: LinkListProps) {
  return (
    <ul className="flex items-center">
      {links.map((link) => (
        <li key={link.alt} className="mr-1.5 mt-2 p-2 dark:drop-shadow-[0_0_5px_#ffffffff]">
          <Link href={link.href} target="_blank">
            <Image src={`${nextConfig.basePath}${link.src}`} alt={link.alt} width={link.width} height={link.height} />
          </Link>
        </li>
      ))}
    </ul>
  );
}

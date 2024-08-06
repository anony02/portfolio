import Image from "next/image";
import nextConfig from "../../next.config.mjs";
import Link from "next/link";
import { menus, skills, usedSkills, links } from "@/data/data";
import Header from "@/components/Header";

export default function Home() {
  return (
    <main className="min-h-screen min-w-[400px] max-w-5xl lg:p-24 p-12 space-y-16 flex flex-col items-center">
      <Header />
      <section id="aboutme" className="w-full">
        <h2 className="mb-2 text-lg font-bold">About me</h2>
        <p>안녕하세요! 프론트엔드 개발자 이도현입니다.</p>
        <p>사용자 경험 개선과 효율적인 코드를 목표로 하고 있습니다.</p>
      </section>
      <section id="skills" className="w-full">
        <h2 className="mb-2 text-lg font-bold">Skills</h2>
        <ul className="flex items-center">
          {skills.map((skill) => (
            <li key={skill.alt} className="mr-1.5 mt-2">
              <Image
                className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                src={`${nextConfig.basePath}${skill.src}`}
                alt={`${skill.alt} Logo`}
                width={skill.width}
                height={skill.height}
                priority
              />
            </li>
          ))}
        </ul>
      </section>
      <section id="projects" className="w-full">
        <h2 className="mb-2 text-lg font-bold">Projects</h2>
        <ol className="mb-32 grid lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-3 lg:text-left">
          <li className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
            <h3 className="mb-2 font-semibold">
              포트폴리오
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h3>
            <p className="m-0 max-w-[30ch] text-sm opacity-50">반응형 레이아웃으로 구현한 포트폴리오 웹사이트입니다.</p>
          </li>
          <li className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
            <h3 className="mb-2 font-semibold">
              쇼핑몰
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h3>
            <p className="m-0 max-w-[30ch] text-sm opacity-50">Fake API와 Mock 서버로 구현한 쇼핑몰 사이트입니다</p>
          </li>
          <li className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
            <h3 className="mb-2 font-semibold">
              여행 플래너
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h3>
            <p className="m-0 max-w-[30ch] text-sm opacity-50">
              여행 계획을 세우고 여행 정보를 탐색할 수 있는 여행 플래너 사이트입니다.
            </p>
            <ul className="flex">
              {usedSkills["여행 플래너"].map((skill) => (
                <li
                  key={skill}
                  className="rounded-full px-3 py-1 text-xs leading-5 bg-indigo-600/10 text-indigo-600 mr-1.5 mt-2"
                >
                  {skill}
                </li>
              ))}
            </ul>
            <ul className="flex items-center">
              {links["여행 플래너"].map((link) => (
                <li key={link.alt} className="mr-1.5 mt-2">
                  <Link href={link.href} target="_blank">
                    <Image
                      src={`${nextConfig.basePath}${link.src}`}
                      alt={link.alt}
                      width={link.width}
                      height={link.height}
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        </ol>
      </section>
    </main>
  );
}

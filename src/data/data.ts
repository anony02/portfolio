export const menus = ["About me", "Skills", "Projects"];

export const skills = [
  { src: "/next.svg", alt: "Next.js", width: 90, height: 18 },
  { src: "/react.svg", alt: "React", width: 60, height: 60 },
  { src: "/typescript.svg", alt: "Typescript", width: 60, height: 60 },
  { src: "/javascript.svg", alt: "Javascript", width: 60, height: 60 },
  { src: "/tailwind.svg", alt: "Tailwind", width: 60, height: 37 },
  { src: "/emotion.png", alt: "Emotion", width: 60, height: 60 },
  { src: "/html.svg", alt: "HTML", width: 60, height: 60 },
];

export const links = {
  "여행 플래너": [
    { href: "https://github.com/team-MiniJin/FE", src: "/github.svg", alt: "github", width: 25, height: 24 },
    {
      href: "https://www.notion.so/lyckabc/KORAVEL-58b9487a9ef7403183104cb77cf38656",
      src: "/notion.svg",
      alt: "notion",
      width: 30,
      height: 30,
    },
    { href: "https://fe-two-blond.vercel.app/", src: "/vercel.svg", alt: "vercel", width: 60, height: 14 },
  ],
  쇼핑몰: [
    {
      href: "https://github.com/anony02/Next.js-shoppingmall",
      src: "/github.svg",
      alt: "github",
      width: 25,
      height: 24,
    },
    { href: "https://reactproject-shoppingmall.vercel.app/", src: "/vercel.svg", alt: "vercel", width: 60, height: 14 },
  ],
  포트폴리오: [
    {
      href: "https://github.com/anony02/portfolio",
      src: "/github.svg",
      alt: "github",
      width: 25,
      height: 24,
    },
  ],
};

export const projects = [
  {
    title: "포트폴리오",
    description: "반응형 레이아웃으로 구현한 포트폴리오 웹사이트입니다.",
    skills: ["Next.js", "TypeScript", "Tailwind"],
    links: [
      {
        href: "https://github.com/anony02/portfolio",
        src: "/github.svg",
        alt: "github",
        width: 25,
        height: 24,
      },
    ],
  },
  {
    title: "쇼핑몰",
    description: "Fake API와 Mock 서버로 구현한 쇼핑몰 사이트입니다",
    skills: ["Next.js", "TypeScript", "Emotion"],
    links: [
      {
        href: "https://github.com/anony02/Next.js-shoppingmall",
        src: "/github.svg",
        alt: "github",
        width: 25,
        height: 24,
      },
      {
        href: "https://reactproject-shoppingmall.vercel.app/",
        src: "/vercel.svg",
        alt: "vercel",
        width: 60,
        height: 14,
      },
    ],
  },
  {
    title: "여행 플래너",
    description: "여행 계획을 세우고 여행 정보를 탐색할 수 있는 여행 플래너 사이트입니다.",
    skills: ["Next.js", "TypeScript", "Tailwind"],
    links: [
      { href: "https://github.com/team-MiniJin/FE", src: "/github.svg", alt: "github", width: 25, height: 24 },
      {
        href: "https://www.notion.so/lyckabc/KORAVEL-58b9487a9ef7403183104cb77cf38656",
        src: "/notion.svg",
        alt: "notion",
        width: 30,
        height: 30,
      },
      { href: "https://fe-two-blond.vercel.app/", src: "/vercel.svg", alt: "vercel", width: 60, height: 14 },
    ],
  },
];

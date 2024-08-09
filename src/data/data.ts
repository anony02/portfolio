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

export const projects = [
  {
    title: "포트폴리오",
    description: "반응형 레이아웃으로 구현한 포트폴리오 웹사이트입니다.",
    period: "2024-08-02 ~",
    participants: "1명(개인)",
    skills: ["Next.js", "TypeScript", "Tailwind CSS"],
    links: [
      {
        href: "https://github.com/anony02/portfolio",
        src: "/github.svg",
        alt: "github",
        width: 25,
        height: 24,
      },
      {
        title: "배포",
        href: "https://anony02.github.io/portfolio/",
        src: "/favicon.png",
        alt: "favicon",
        width: 28,
        height: 27,
      },
    ],
    details: {
      background:
        "기존에 존재하는 블로그나 프로그램을 사용하기 보다 커스텀 디자인을 사용해 개인 포트폴리오를 제작하고자 개발한 포트폴리오 웹사이트입니다. 자기 소개와 사용 기술, 프로젝트 정보를 기술했습니다. Next.js, TypeScript, Tailwind CSS를 이용해 반응형 웹과 애니메이션 효과를 구현했습니다.",
      features: [
        "dark 모드 on/off 기능",
        "화면 크기에 따른 레이아웃 변화",
        "텍스트 타이핑 애니메이션",
        "네이게이션을 이용한 스크롤 이벤트",
        "hover 시 효과",
        "스크롤 시 효과",
        "마우스 커서 이펙트",
        "모달 구현",
      ],
      developmentProcess:
        "Next.js와 TypeScript를 사용해 프로젝트의 기본 구조를 설정하고, Tailwind CSS로 스타일링을 진행했습니다. 반응형 디자인을 고려해 다양한 화면 크기에서 적절한 레이아웃이 나타나도록 했습니다. 개발과정에서 Git을 통해 버전 관리를 진행했고, 주요 기능 구현 및 버그 수정 후 단계적으로 배포를 진행했습니다.",
      roleAndContribution:
        "개인 프로젝트로 기획, 디자인 구상, 개발, 배포까지 모든 과정을 직접 수행했습니다. 특히 사용자 경험 개선을 위해 반응형 디자인과 애니메이션 효과 구현에 많은 시간을 투자했습니다.",
      result:
        "다양한 화면 크기에서 동작하며, 다크 모드와 애니메이션 효과 등 사용자의 눈길을 끄는 요소들을 구현했습니다.",
      improvements:
        "블로그처럼 사이트에서 입력, 수정, 삭제가 가능하게 구현해보면 더 좋을 것 같습니다. 이 경우, 사용자 별 권한 관리가 필요하고, 데이터를 저장하고 불러올 서버 기능이 필요합니다.",
    },
  },
  {
    title: "쇼핑몰",
    description: "Fake API와 Mock 서버로 구현한 쇼핑몰 사이트입니다.",
    period: "2024-07-16 ~ 2024-08-02",
    participants: "1명(개인)",
    skills: ["Next.js", "TypeScript", "Emotion CSS"],
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
    details: {
      background:
        "상품 정보를 제공하는 Fake API와 json server를 사용해 개발한 쇼핑몰 사이트입니다. 과거 React, JavaScript, CSS module로 API 호출과 장바구니 기능만 구현했던 개발했던 프로젝트를 Next.js, TypeScript, Emotion CSS로 마이그레이션 후 추가 기능을 구현했습니다.",
      features: [
        "회원가입, 회원탈퇴",
        "로그인, 로그아웃",
        "아이디 찾기, 임시 비밀번호 발급",
        "입력창 종류별 유효성 검사",
        "개인정보 수정",
        "로딩 시 화면 처리",
        "페이지네이션",
        "장바구니",
        "알림창",
        "상품 정렬",
        "상품 검색",
        "상품 카테고리별 분류",
      ],
      developmentProcess:
        "기존 프로젝트의 구조를 분석하고 Next.js와 TypeScript를 사용하여 새로운 프로젝트 구조를 설정했습니다. Emotion CSS를 사용하여 스타일링을 진행하며, 컴포넌트 기반의 스타일링 방식을 채택했습니다. tanstack query를 도입해 API 호출을 관리하고, 데이터의 캐싱과 상태 관리를 효율적으로 구현했습니다. 회원 관리 기능과 유효성 검사, 로딩 처리, 페이지네이션 등 추가 기능을 단계별로 구현하며 지속적으로 테스트를 통해 버그를 수정했습니다.",
      roleAndContribution:
        "개인 프로젝트로 기획, 디자인 구상, 개발, 배포까지 모든 과정을 직접 수행했습니다. 프로젝트 마이그레이션 과정에서 Next.js의 기능을 활용해 SSR(Server-Side Rendering)과 CSR(Client-Side Rendering)을 효과적으로 결합했으며, Emotion CSS를 사용해 재사용 가능한 스타일 컴포넌트를 작성했습니다. 또한, tanstack query를 활용해 API 호출의 효율성을 높이고, 로딩 처리와 에러 처리를 개선했습니다.",
      result:
        "마이그레이션과 기능 추가를 통해 완성된 쇼핑몰 사이트는 사용자 경험을 크게 개선했으며, 다양한 기능과 유효성 검사를 통해 안전하고 편리한 사용자 환경을 제공하고자 했습니다. 이번 프로젝트를 통해 Next.js와 TypeScript의 장점을 깊이 이해하게 되었으며, Emotion CSS를 사용해 스타일링의 유연성을 극대화할 수 있었습니다. 또한, tanstack query를 통해 효율적인 데이터 페칭과 상태 관리 기법을 익혔습니다. 전체적으로 더 나은 개발 환경과 사용자 경험을 제공하기 위한 다양한 기술적 접근 방식을 배웠습니다.",
      improvements:
        "실제 결제 기능과 더 복잡한 사용자 인증 시스템을 도입해 실서비스의 기능과 로직들을 구현해보면 좋을 것 같습니다.",
    },
  },
  {
    title: "TRAVEL (여행 플래너 사이트)",
    description: "여행 계획을 세우고 여행 정보를 탐색할 수 있는 여행 플래너 사이트입니다.",
    period: "2024-05-16 ~ 2024-06-27",
    participants: "6명(FE 2명, BE 4명)",
    skills: ["Next.js", "TypeScript", "Tailwind CSS"],
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
    details: {
      background:
        "여행 관련 정보를 제공하는 Tour API를 이용해 여행 정보를 탐색하고 여행 계획을 세울 수 있는 여행 플래너 사이트를 개발했습니다.",
      features: [
        "회원가입, 회원탈퇴, 로그인, 로그아웃, 아이디 찾기, 임시 비밀번호 발급",
        "입력창 종류별 유효성 검사",
        "개인정보 수정",
        "로딩 시 화면 처리",
        "무한 스크롤",
        "여행 일정 생성하기",
        "다가오는 여행 일정 보기",
        "다른 사용자들의 여행 일정 탐색",
        "여행 일정 스크랩",
        "여행 정보 탐색",
      ],
      developmentProcess:
        "기획, 와이어프레임 작성, 컨벤션 작성, 개발, 배포, BE와 통합을 진행했습니다. Figma를 이용해 담당 기능의 와이어프레임을 작성했으며 Next.js, TypeScript, Tailwind CSS로 개발을 진행했습니다. 폴더 구조는 FSD 아키텍쳐를 참고했으며, 변수/함수명 등 코드 관련 컨벤션, 커밋/PR 관련 컨벤션을 정하고 Git Flow 방식을 따라 개발을 진행했습니다.",
      roleAndContribution:
        "팀에서 FE 담당자로서 기획, 디자인 구상 및 와이어 프레임 작성, 개발과정을 담당했습니다. 기능적으로는 회원가입, 회원탈퇴, 로그인, 카카오 로그인, 로그아웃, 개인정보 찾기, 개인정보 수정, 마이페이지, 스크랩 목록, 여행정보 탐색 페이지를 담당했습니다.\nAPI 호출은 TanStack Query를 이용해 코드의 간결성, 데이터 캐싱, 서버 상태 관리 등의 측면을 개선했습니다.\n한국관광공사에서 제공하는 Tour API를 활용해 여행정보 탐색 페이지를 구현했고, 무한 스크롤 방식으로 데이터 호출을 구현했습니다. 사용자는 토글을 통해 상세 정보를 확인하고, 카카오맵 API와 연계해 여행지 위치와 길찾기 링크를 제공받을 수 있습니다.",
      result:
        "이번 프로젝트를 통해 협업 과정에서의 효과적인 커뮤니케이션과 컨벤션 설정의 중요성을 깨달았습니다. 또한, Next.js와 TypeScript, Tailwind CSS의 조합을 활용한 개발에서 성능 최적화와 사용자 경험 향상에 대해 배울 수 있었습니다. API 통합 및 관리에 있어서 TanStack Query를 활용한 서버 상태 관리 기법을 익혔습니다.",
      improvements:
        "글을 적고 소통할 수 있는 커뮤니티 게시판과 실시간 대화방 기능을 추가로 구현한다면 사용자들의 참여와 교류를 더욱 이끌어낼 수 있을 것 같습니다. 또한 더 복잡한 사용자 인증 시스템을 도입해 실서비스의 기능과 로직들을 구현해보면 좋을 것 같습니다.",
    },
  },
];

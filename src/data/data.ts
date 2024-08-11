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
    description: "반응형 레이아웃과 다양한 UI/UX 효과를 구현한 웹사이트",
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
        alt: "github page",
        width: 28,
        height: 27,
      },
    ],
    details: {
      background:
        "기존 블로그나 템플릿을 사용하는 대신, 커스텀 디자인을 통해 개인 포트폴리오 웹사이트를 제작했습니다. 자기 소개와 사용 기술, 프로젝트 정보를 기술했으며 Next.js, TypeScript, Tailwind CSS를 사용하여 반응형 웹과 다양한 애니메이션 효과를 구현했습니다.",
      features: [
        "dark 모드 on/off 기능",
        "화면 크기에 따른 레이아웃 변화",
        "텍스트 타이핑 애니메이션",
        "네이게이션을 이용한 스크롤 이벤트",
        "hover 및 스크롤 효과",
        "마우스 커서 이펙트",
        "모달 창 구현",
      ],
      process: [
        "기본 구조 설정: Next.js와 TypeScript를 이용해 프로젝트 구조를 설계 및 구성했습니다.",
        "스타일링: Tailwind CSS를 사용해 반응형 디자인과 커스텀 스타일링을 적용했습니다.",
        "기능 구현: 다양한 UI/UX 요소를 포함해 사용자 경험을 강화했습니다.",
        "버전 관리 및 배포: Git을 통해 버전관리를 진행했고 주요 기능 구현 및 버그 수정 후 단계적으로 배포를 진행했습니다.",
      ],
      contribution:
        "개인 프로젝트로 기획, 디자인, 개발, 배포까지 모든 과정을 직접 수행했습니다. 특히 사용자 경험 개선을 위한 반응형 디자인과 애니메이션 효과 구현에 중점을 두었습니다.",
      result:
        "다양한 화면 크기에서 동작하며, 다크 모드와 애니메이션 효과 등 사용자의 눈길을 끄는 요소들을 구현했습니다.",
      improvements:
        "블로그처럼 사용자가 직접 콘텐츠를 입력, 수정, 삭제가 가능하게 구현해보면 더 좋을 것 같습니다. 이 경우, 사용자 권한 관리와 데이터 저장 및 불러오기 기능을 갖춘 서버 기능이 필요합니다.",
    },
  },
  {
    title: "쇼핑몰",
    description: "Fake API와 Mock 서버 기반 쇼핑몰 웹사이트",
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
        "상품 정보를 제공하는 Fake API와 JSON Server를 활용해 개발한 쇼핑몰 웹사이트입니다. React, JavaScript, CSS Modules을 사용해 API 호출과 장바구니 기능만 구현했던 과거 프로젝트를 Next.js, TypeScript, Emotion CSS로 마이그레이션 후 다양한 추가 기능을 통해 사용자 경험을 개선했습니다.",
      features: [
        "회원관리 (회원가입, 로그인/로그아웃, 회원탈퇴, 아이디 찾기 및 임시 비밀번호 발급 기능 구현)",
        "입력창 종류별 유효성 검사",
        "개인정보 수정",
        "로딩 화면 처리",
        "페이지네이션",
        "장바구니",
        "알림창",
        "상품 정렬 및 검색 (카테고리별 상품 조회, 상품 검색, 상품 목록 정렬)",
      ],
      process: [
        "Yarn Berry 도입: npm 대신 yarn berry를 도입하여 의존성 관리의 효율성과 보안을 개선했습니다.",
        "Next.js 도입: Next.js의 파일 기반 라우팅을 활용해 직관적이고 유지보수하기 쉬운 라우팅 구조를 설계했습니다. 자동 코드 분할 기능을 통해 페이지 로딩 시간을 최소화하고, 정적 파일 제공 기능을 통해 최적화된 이미지를 제공했습니다.",
        "TypeScript 도입: JavaScript 대신 TypeScript를 사용해 코드의 타입 안전성을 확보하고, 코드의 가독성과 유지보수성을 향상시켰습니다. TypeScript의 정적 타입 검사 기능을 통해 개발 단계에서 오류를 조기에 발견하고, 더 안정적인 코드를 작성할 수 있었습니다.",
        "Emotion CSS 도입: Emotion CSS를 통해 스타일의 재사용성을 높이고 동적인 스타일을 구현했습니다.",
        "추가 기능 구현: 회원 관리 기능과 유효성 검사, 로딩 처리, 페이지네이션 등 추가 기능을 단계별로 구현하며 지속적으로 테스트를 통해 버그를 수정했습니다.",
      ],
      contribution:
        "개인 프로젝트로 기획, 디자인 구상, 개발, 배포까지 모든 과정을 직접 수행했습니다. 프로젝트 마이그레이션 과정에서 Yarn Berry를 도입해 의존성 관리의 효율성을 높이고 Next.js를 도입해 효율적인 CSR 환경을 구축했습니다. Emotion CSS를 사용하여 재사용 가능한 스타일을 구현하고 동적 스타일을 통한 사용자 상호작용을 처리했습니다. 또한, tanstack query를 활용해 API 호출의 효율성을 높이고, 로딩 처리와 에러 처리를 개선했습니다.",
      result:
        "프로젝트의 리팩토링과 기능 확장을 통해 더 빠르고 편리한 사용자 환경을 구현하고자 했습니다. 이번 프로젝트를 통해 Next.js와 TypeScript의 장점을 이해하게 되었으며, Emotion CSS를 사용해 스타일링의 유연성을 높일 수 있었습니다. 또한, tanstack query를 통해 효율적인 데이터 페칭과 상태 관리 기법을 익혔습니다. 전체적으로 더 나은 개발 환경과 사용자 경험을 제공하기 위한 다양한 기술적 접근 방식을 배웠습니다.",
      improvements:
        "실제 결제 기능과 더 복잡한 사용자 인증 시스템을 도입해 실서비스의 기능과 로직들을 구현해보면 좋을 것 같습니다.",
    },
  },
  {
    title: "TRAVEL (여행 플래너 사이트)",
    description: "여행 계획을 세우고 여행 정보를 탐색할 수 있는 여행 플래너 웹사이트",
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
        "여행 관련 정보를 제공하는 Tour API를 활용해 여행자들이 쉽게 여행 일정을 계획하고, 관련 정보를 탐색할 수 있는 플랫폼을 개발했습니다. 여행 일정을 수동으로 계획해야 하는 불편함을 해결하고, 여행 정보를 한 곳에서 탐색할 수 있는 기능을 제공하고자 했습니다.",
      features: [
        "회원가입, 회원탈퇴, 로그인, 로그아웃, 아이디 찾기, 임시 비밀번호 발급",
        "입력창 종류별 유효성 검사",
        "개인정보 수정",
        "로딩 화면 처리",
        "무한 스크롤",
        "여행 일정 생성하기",
        "다가오는 여행 일정 보기",
        "다른 사용자의 여행 일정 탐색 및 스크랩",
        "Tour API를 활용한 여행 정보 탐색",
      ],
      process: [
        "기획 및 설계: 프로젝트 초기 기획 단계에서 팀원들과 협업하여 기능 요구 사항을 도출하고, Figma를 사용해 와이어프레임을 작성했습니다. 폴더 구조는 FSD 아키텍처를 참고하여 설계했습니다.",
        "컨벤션 설정: 코드 품질을 유지하기 위해 변수명, 함수명, 커밋 메시지 등에 대한 컨벤션을 작성하고, Git Flow를 활용해 협업의 효율성을 높였습니다.",
        "개발 및 통합: Next.js의 기능을 활용해 개발환경과 로딩속도를 개선하고, TypeScript로 코드의 안정성을 강화했습니다. Tailwind CSS를 사용해 일관된 디자인을 유지하며, 빠르게 스타일링을 완료했습니다. 기능별 백엔드 담당자와 소통하며 서버와의 통합을 진행했습니다.",
      ],
      contribution:
        "팀에서 프론트엔드 담당자로서 기획, 디자인 구상, 와이어프레임 작성, 주요 기능 개발을 담당했습니다. 특히 회원 관리 기능, 마이페이지, 여행정보 탐색 페이지를 담당했습니다. API 호출과 관련된 코드의 간결성, 데이터 캐싱, 서버 상태 관리를 개선하고, 한국관광공사의 Tour API와 카카오맵 API를 활용해 사용자 경험을 개선하고자 했습니다. 무한 스크롤 기능과 상세 정보 토글 기능을 통해 사용자 편의성을 높였습니다.",
      result:
        "프로젝트를 통해 협업 과정에서의 효과적인 커뮤니케이션과 컨벤션 설정의 중요성을 깨달았습니다. 또한, Next.js와 TypeScript, Tailwind CSS의 조합을 활용한 개발에서 성능 최적화와 사용자 경험 향상에 대해 배울 수 있었습니다. TanStack Query를 활용한 서버 상태 관리 기법을 익혔습니다.",
      improvements:
        "커뮤니티 게시판과 실시간 대화방 기능을 추가로 구현한다면 사용자의 참여와 교류를 더욱 이끌어내고 플랫폼의 활용도를 높일 수 있을 것으로 생각됩니다. 또한 더 복잡한 사용자 인증 시스템을 도입해 보안을 강화하고 실서비스의 기능과 로직들을 구현해보면 좋을 것 같습니다.",
    },
  },
];

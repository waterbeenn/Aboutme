export const portfolioData = {
  profile: {
    name: "MIN SU BIN",
    nameKo: "민수빈",
    title: "Frontend Developer",
    dateOfBirth: "1996.01.20",
    tagline:
      "사용자 흐름을 집요하게 고민하고,\n경험을 개선해 나가는 \n프론트엔드 개발자입니다.",
    intro:
      "React, TypeScript, Next.js로 프로젝트를 만들면서 배우고 있으며, 프로젝트에서 성능 최적화와 접근성을 개선한 경험이 있습니다.\n이를 통해 작은 개선도 사용자 경험에 큰 영향을 미친다는 것을 알게됐으며, 더 나은 사용자 경험을 위해 치열하게 고민하는 개발자가 되기 위해 노력하고 있습니다.",
    email: "beenn09@naver.com",
    github: "https://github.com/waterbeenn",
    blog: "https://whatmattersmost.tistory.com/",
    linkedin: "https://www.linkedin.com/in/subin-min-baa3151b6/",
  },
  skills: {
    languages: ["JavaScript", "TypeScript", "Python", "Java"],
    frontend: [
      "Next.js / React",
      "React Native",
      "Sass",
      "Tailwind CSS",
      "Vite",
    ],
    backend: ["Node.js", "Express", "MySQL", "MongoDB"],
    tools: [
      "Git",
      "GitHub",
      "VS Code",
      "Figma",
      "MS Word",
      "MS Excel",
      "BurpSuite",
      "Vercel",
      "Render",
    ],
  },
  projects: [
    {
      id: 1,
      title: "국내 급등주 대시보드",
      description:
        "국내 급등주 TOP100 시세와 경제뉴스를 한 화면에서 확인할 수 있는 SPA입니다.",
      tags: [
        "React",
        "javascript",
        "typescript",
        "Express",
        "Vercel",
        "Render",
        "API",
      ],
      link: "https://geupdeung.vercel.app/",
      github: "https://github.com/waterbeenn/geupdeung",
      summary:
        "• 국내 주식 단타할 때 도움이 될 것 같아 개발\n• React 프론트엔드와 Express API 서버를 분리한 구조로 웹 서비스 구현 및 데이터 흐름 설계 \n• Axios 기반 비동기 HTTP 요청 구현 \n• React.lazy와 Suspense를 활용한 코드 스플리팅으로 초기 번들 크기를 줄여 렌더링 성능 개선 \n• helmet 미들웨어를 적용해 보안 헤더를 설정하고 웹 취약점 노출 최소화",
      why: "국내 주식에 관심을 가지던 와중, 하루만에 주가가 급등하는 주식들은 어떤 이유로 오르는지 궁금해서 시작한 프로젝트입니다. \n급등주를 확인하고 해당 종목명으로 검색된 뉴스 기사를 바로 볼 수 있으면 빠르게 이유를 파악할 수 있을 것이라고 생각했습니다.",
      achievements:
        "실제 API를 다루어본 경험이 없었기에, 평소에 필요했던 서비스를 직접 만들어보며 배울 수 있었습니다.\nReact와 Express를 활용하면서 클라이언트에서 API 요청부터 데이터 반환, 화면 렌더링까지의 전체 흐름을 체험할 수 있었습니다.\n\n또한 React.lazy와 Suspense를 적용해보면서 컴포넌트 단위로 분할하여 필요할 때에만 로드하는 것이 왜 중요한지 알게 됐습니다.\n 개발 초기에 필요한 데이터를 한 번에 로드한 것과, 컴포넌트를 분할 로드한 것의 렌더링 속도 차이를 직접 확인하면서, 성능 최적화가 실제 사용자 경험에 미치는 영향을 체감할 수 있었습니다.\n\n한편 미들웨어를 활용해 몇 가지 보안 문제를 해결할 수 있었습니다. \n먼저 express-rate-limit으로 요청 횟수를 제한해 반복적인 API 호출을 막고, helmet으로 보안 헤더를 자동으로 적용시켜 웹 취약점 노출을 최소화 할 수 있었습니다.",
    },
    {
      id: 2,
      title: "포트폴리오 웹사이트",
      description: "프로젝트 및 이력 사항 관리를 위한 웹페이지입니다.",
      tags: [
        "React",
        "Typescript",
        "Tailwind",
        "Responsive Web Design",
        "Vercel",
      ],
      link: "https://aboutminsubin.vercel.app/",
      github: "https://github.com/waterbeenn/Aboutme",
      summary:
        "• 프로젝트 및 이력 사항 관리를 위해 개발\n• React 프론트엔드와 Tailwind 기반의 SPA\n• PC·모바일·태블릿 최적화 반응형 디자인",
      why: "그동안의 프로젝트 경험과 커리어 이력을 확인할 수 있도록 만든 아카이빙 사이트입니다.\nLinkedIn 등 외부 플랫폼에서 유입된 채용담당자가 별도의 연락없이 이력서(PDF)를 다운로드 할 수 있도록 구성했습니다. ",
      achievements:
        "이 프로젝트에서는 이 페이지를 방문할 주요 사용자(채용담당자)의 플로우를 중점을 두었습니다.\n'소개 페이지'의 목적에 맞게 깔끔한 레이아웃과 높은 가독성을 위해 화려한 인터랙션은 지양했습니다. \n처음에는 챗봇 도입을 고려했지만 바쁜 채용담당자의 시간을 고려했을 때 비효율적이라고 생각하여 별도로 연락할 필요없이 바로 이력서를 다운받을 수 있도록 기능을 변경했습니다.",
    },
    {
      id: 3,
      title: "VIVIZIP(신한 스퀘어브릿지 청년 해커톤)",
      description:
        "유학생·1인 가구를 위한 AI 서류 검토 기반 부동산 계약 지원 앱입니다.",
      tags: [
        "React Native",
        "Expo",
        "Typescript",
        "Tailwind (NativeWind)",
        "Zustand",
      ],
      link: "https://www.youtube.com/shorts/WxynvALhA4s",
      github: "https://github.com/vivizip/vivizip_FrontEnd",
      summary:
        "• 등기부등본/건축물대장 등 부동산 서류를 촬영하면 AI가 위험요소를 분석해주는 서류 검토 기능 개발\n" +
        "• 계약 전·중·후 3단계로 이어지는 세로 타임라인 체크리스트 UI 구현\n" +
        "• 카카오 소셜 로그인, JWT 자동 재발급 API 연결\n" +
        "• Zustand로 탭/스택 간 화면 상태 공유",
      why:
        "타지에서 첫 자취를 시작하는 유학생들이 등기부등본이나 계약서 같은 어려운 법률 서류를 스스로 해석하지 못해 전세 사기 등 위험에 노출되는 문제를 해결하기 위해 시작한 프로젝트입니다.\n" +
        "단순 정보 제공을 넘어, 서류를 촬영하는 것만으로 위험 요소를 짚어주고 계약 전/중/후 전 과정을 체크리스트로 안내하는 것을 목표로 했습니다.",
      achievements:
        "계약 전·중·후 공통 서류 화면을 컴포넌트화하여 UI 재사용성을 높이고, 다양한 서류의 데이터 구조를 지원하도록 구현했습니다.\n" +
        "여러 탭·스택 네비게이션에서 공유되는 데이터를 Zustand 스토어 분리를 통해 효율적으로 관리했습니다.\n" +
        "401 응답이 동시에 발생할 때 토큰 재발급 API가 중복 호출되는 문제를 Promise 공유 방식으로 해결하고, 재발급 실패 시 세션을 정리해 로그인 화면으로 전환되는 인증 플로우를 구현했습니다.\n",
    },
    {
      id: 4,
      title: "Hompany",
      description:
        "집 주소와 채용공고 링크만 입력하면 회사까지의 통근 거리와 대중교통 경로를 자동으로 계산해주는 서비스입니다.",
      tags: [
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "cheerio",
        "Kakao Maps API",
        "ODsay API",
        "Vercel",
      ],
      link: "https://hompany.vercel.app/",
      github: "https://github.com/waterbeenn/hompany",
      summary:
        "• 채용 공고에 여러 곳 지원할 때 회사 위치를 하나하나 검색해 통근 거리를 확인하는 번거로움을 줄이기 위해 개발\n• Next.js App Router로 프론트엔드와 백엔드를 한 프로젝트에서 구현, 크롤링·외부 API 키를 다루는 로직을 서버 사이드로 분리\n• cheerio로 채용 사이트가 SEO용으로 노출하는 schema.org JobPosting JSON-LD를 파싱해 회사명·주소 추출\n• 카카오 지오코딩 API와 ODsay 대중교통 API를 연동해 최단 시간 경로·소요시간·이동수단을 계산\n• 카카오맵 JS SDK로 집·회사 위치와 승하차역·환승 정보를 지도와 타임라인으로 시각화",
      why: "채용 공고 여러 곳에 지원할 때마다 회사 위치를 하나하나 검색해서 통근 거리를 가늠하는 과정이 번거로워서 시작한 프로젝트입니다.\n채용공고 링크만 붙여넣으면 거리와 실제 대중교통 경로까지 한 번에 보여주면, 지원할 공고를 고를 때 더 빠르게 판단할 수 있을 것이라고 생각했습니다.",
      achievements:
        "채용 사이트마다 마크업 구조가 완전히 달라서, 같은 방식(정적 HTML 크롤링)이 어떤 사이트에는 통하고 어떤 사이트에는 전혀 안 통하는지 직접 조사하며 SSR과 클라이언트 렌더링의 차이, 그리고 schema.org JobPosting 같은 구조화 데이터 표준의 존재를 체감할 수 있었습니다.\n\n카카오맵 JS SDK와 ODsay API를 실제로 붙이면서, 키 값 자체보다 Referer 기반 도메인 인증이 진짜 보안 경계라는 걸 디버깅을 통해 이해했습니다. 로컬(localhost)에서는 되던 것이 배포 후에는 안 되는 상황을 겪으며, 환경마다 도메인 등록을 다시 맞춰줘야 하는 이유도 몸으로 배웠습니다.\n\n또한 '최단 거리'와 '최단 시간'처럼 비슷해 보이지만 다른 개념을 명확히 구분하지 않으면 화면에 서로 연결되지 않는 숫자를 보여주게 된다는 것을 실제 버그로 겪으면서, 데이터의 의미를 정확히 따져가며 구현하는 습관의 중요성을 다시 확인했습니다.",
    },
  ],
  career: [
    {
      id: 1,
      company: "인더포레스트",
      period: "2023.05 - 2025.06",
      projectSummary:
        "웹/앱 취약점 진단 및 보고, 개발자와의 협업을 통한 서비스 보안 개선",
      role: "보안 컨설턴트",
      tasks: [
        {
          title: "A 고객사 상주 취약점 점검 TF (Purple 팀)",
          period: "2024.03 - 2025.06",
          summary:
            "Web/App 포함 사내 서비스 취약점 진단업무 수행\n2024년 - 18개 서비스 취약점 점검 후 결과 보고서 작성 (Web 16건, Mobile 2건) | 총 61개 취약점 발견\n2025.02 ~ 프로젝트 리더(PL)로서 일정 관리, 작업 분배 및 팀 협업 조율 담당",
        },
        {
          title: "B 고객사 모의해킹 단기 프로젝트",
          period: "2024.01",
          summary:
            "Gray Box 모의해킹 메인 진행 및 보고\nAdmin 대시보드 페이지 침투 후 파일 업로드 취약점 발견",
        },
        {
          title: "A 고객사 상시 도메인 취약점 점검",
          period: "2023.05 - 2024.03",
          summary:
            "Web/App 취약점 진단 및 보고\n10개 이상 서비스 취약점 진단 후 보고",
        },
      ],
    },
  ],
  education: [
    {
      id: "1",
      name: "[이젠아카데미DX교육센터] 자바(JAVA)를 활용한 안드로이드 앱개발",
      period: "2018.04 ~ 2018.10",
      description: "",
    },
    {
      id: "2",
      name: "세종사이버대대학 정보보호학과",
      period: "2019.03 ~ 2022.08",
      description: "",
    },
    {
      id: "3",
      name: "[WISET] 사이버 보안 분야 실무인재 양성과정 (2차 실무 과정)",
      period: "2023.02 ~ 2023.03",
      description:
        "한국여성과학기술인육성재단에서 주관하는 사이버 보안 분야 실무인재 양성과정(2차 실무과정)을 수료",
    },
    {
      id: "4",
      name: "[이젠아카데미DX교육센터] UX/UI디자인 웹 프론트엔드개발 부트캠프(생성형AI 활용/피그마)",
      period: "2025.10. ~ 2026.03",
      description: "",
    },
  ],
};

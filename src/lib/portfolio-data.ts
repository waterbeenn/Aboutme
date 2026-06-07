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
    frontend: ["Next.js / React", "Sass", "Tailwind CSS", "Vite"],
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
      tags: ["React", "API Integration", "Responsive Design"],
      link: "https://example-weather.com",
      github: "https://github.com/yourname/weather",
      summary:
        "• 프로젝트 및 이력 사항 관리를 위해 개발\n• React 프론트엔드와 Tailwind 기반의 SPA\n• PC·모바일·태블릿 최적화 반응형 디자인",
      why: "그동안의 프로젝트 경험과 커리어 이력을 확인할 수 있도록 만든 아카이빙 사이트입니다.\nLinkedIn 등 외부 플랫폼에서 유입된 채용담당자가 별도의 연락없이 이력서(PDF)를 다운로드 할 수 있도록 구성했습니다. ",
      achievements:
        "이 프로젝트에서는 이 페이지를 방문할 주요 사용자(채용담당자)의 플로우를 중점을 두었습니다.\n'소개 페이지'의 목적에 맞게 깔끔한 레이아웃과 높은 가독성을 위해 화려한 인터랙션은 지양했습니다. \n처음에는 챗봇 도입을 고려했지만 바쁜 채용담당자의 시간을 고려했을 때 비효율적이라고 생각해 별도로 연락할 필요없이 바로 이력서를 다운받을 수 있으면 편할 것이라 생각해 이력서 다운로드로 기능을 변경했습니다.",
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

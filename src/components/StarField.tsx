import { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";

interface Star {
  el: HTMLDivElement;
  initialY: number;
  speed: number;
}

const PASTEL_COLORS = [
  // 핑크-보라-파란색 조합
  ["#FFB3D9", "#DDA0DD", "#87CEEB"],
  ["#FFB6C1", "#DA70D6", "#B0E0E6"],
  ["#FFB3D9", "#BA55D3", "#87CEEB"],
  ["#FFC0CB", "#DDA0DD", "#ADD8E6"],
  ["#FFB6D9", "#EE82EE", "#87CEEB"],
  ["#FFAFC0", "#DA70D6", "#B0E0E6"],
  ["#FFB3D9", "#D8BFD8", "#87CEEB"],
  ["#FFC0CB", "#BA55D3", "#ADD8E6"],
];

export default function StarField() {
  const containerRef = useRef<HTMLDivElement>(null);
  const starsRef = useRef<Star[]>([]);
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // 1. LENIS 초기화 (부드러운 스크롤)
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    lenisRef.current = lenis;

    // RAF 루프
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // 2. 별 생성
    container.innerHTML = "";
    const starCount = 80;
    const stars: Star[] = [];

    for (let i = 0; i < starCount; i++) {
      const star = document.createElement("div");
      star.className = "star-particle";

      // 랜덤 초기 위치
      const x = Math.random() * 100;
      const y = Math.random() * 100;

      // 30% 확률로 정적 별 (먼 배경)
      const isStatic = Math.random() < 0.3;
      const z = isStatic ? 0 : 0.2 + Math.random() * 0.6; // 속도 계수
      const size = isStatic ? 1 + Math.random() : 1 + Math.random() * 2;

      // 스타일 설정
      star.style.position = "absolute";
      star.style.left = x + "%";
      star.style.top = y + "%";
      star.style.width = size + "px";
      star.style.height = size + "px";
      star.style.borderRadius = "50%";

      // Float 애니메이션용 CSS 변수
      (star as any).style.setProperty("--initial-top", y + "%");
      (star as any).style.setProperty("--initial-left", x + "%");

      // 파스텔 색상 그라데이션
      const colors = PASTEL_COLORS[Math.floor(Math.random() * PASTEL_COLORS.length)];
      const angle = Math.random() * 360;
      star.style.background = `linear-gradient(${angle}deg, ${colors[0]}, ${colors[1]}, ${colors[2]})`;

      star.style.opacity = "0.8";
      star.style.boxShadow = `0 0 ${size * 2}px rgba(255, 255, 255, 0.6)`;
      star.style.willChange = "transform, top";
      star.style.filter = "drop-shadow(0 0 3px rgba(255, 255, 255, 0.4))";

      // Twinkle + Float 애니메이션 설정
      const twinkleDuration = 2 + Math.random() * 4;
      const twinKleDelay = Math.random() * 5;
      const floatDuration = 6 + Math.random() * 8; // 떠다니기 duration
      const floatDelay = Math.random() * 10;

      star.style.animation = `
        twinkle-star ${twinkleDuration}s infinite ease-in-out,
        float-star ${floatDuration}s infinite ease-in-out
      `;
      star.style.animationDelay = `${twinKleDelay}s, ${floatDelay}s`;

      container.appendChild(star);
      stars.push({ el: star, initialY: y, speed: z });
    }

    starsRef.current = stars;

    // 3. Lenis 스크롤 이벤트 연동
    lenis.on("scroll", ({ scroll, velocity }: any) => {
      // 속도에 따른 스트레칭 계산
      const stretch = Math.max(1, Math.min(1 + Math.abs(velocity) * 0.15, 4));

      stars.forEach((star) => {
        // 정적 별은 움직이지 않음
        if (star.speed === 0) {
          star.el.style.transform = "scaleY(1)";
          return;
        }

        // 무한 루프 위치 계산
        let pos = (star.initialY - scroll * star.speed * 0.05) % 100;
        if (pos < 0) pos += 100;

        star.el.style.top = pos + "%";
        // Y축 스케일로 워프 효과 생성
        star.el.style.transform = `scaleY(${stretch})`;
      });
    });

    // 정리
    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      style={{
        background:
          "radial-gradient(1200px 800px at 80% 10%, rgba(124, 58, 237, .15), transparent 60%), radial-gradient(1000px 700px at 10% 90%, rgba(6, 182, 212, .12), transparent 55%)",
      }}
    >
      {/* CSS 애니메이션 정의 */}
      <style>{`
        @keyframes twinkle-star {
          0%, 100% {
            opacity: 0.3;
            filter: drop-shadow(0 0 2px rgba(255, 255, 255, 0.2));
          }
          50% {
            opacity: 1;
            filter: drop-shadow(0 0 6px rgba(255, 255, 255, 0.6));
          }
        }

        @keyframes float-star {
          0% {
            top: calc(var(--initial-top) + 0px) !important;
            left: calc(var(--initial-left) + 0px) !important;
          }
          25% {
            top: calc(var(--initial-top) - 20px) !important;
            left: calc(var(--initial-left) + 15px) !important;
          }
          50% {
            top: calc(var(--initial-top) - 35px) !important;
            left: calc(var(--initial-left) - 10px) !important;
          }
          75% {
            top: calc(var(--initial-top) - 18px) !important;
            left: calc(var(--initial-left) - 18px) !important;
          }
          100% {
            top: calc(var(--initial-top) + 0px) !important;
            left: calc(var(--initial-left) + 0px) !important;
          }
        }
      `}</style>
    </div>
  );
}

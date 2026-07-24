import { portfolioData } from "../lib/portfolio-data";

export default function Hero() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20 hero-container mt-15">
      <div style={{ flex: 1 }}>
        {/* Intro Text */}
        <div className="space-y-6">
          <h2 className="hero-tagline font-poppins font-bold text-gray-900 whitespace-pre-wrap">
            {portfolioData.profile.tagline}
          </h2>
          <p className="hero-intro text-gray-700 leading-relaxed whitespace-pre-wrap">
            {portfolioData.profile.intro}
          </p>
          <button
            onClick={() => {
              const element = document.getElementById("projects");
              if (element) {
                const header = document.querySelector("header");
                const headerHeight = header ? header.offsetHeight : 80;
                const elementTop =
                  element.getBoundingClientRect().top + window.scrollY;
                window.scrollTo({
                  top: elementTop - headerHeight,
                  behavior: "smooth",
                });
              }
            }}
            className="px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg font-poppins font-semibold transition-all duration-300 hover:opacity-80"
          >
            프로젝트 보기
          </button>
        </div>
      </div>

      {/* Hero Image */}
      <div style={{ flex: 1, display: "flex", justifyContent: "center" }}>
        <div style={{ width: "100%", height: "400px" }}>
          <img
            src="/hero.png"
            alt="Hero"
            style={{
              width: "100%",
              height: "100%",
              borderRadius: "1rem",
              objectFit: "cover",
            }}
          />
        </div>
      </div>
    </section>
  );
}

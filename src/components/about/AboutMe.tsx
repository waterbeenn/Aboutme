import { useState, useRef } from "react";
import { createPortal } from "react-dom";
import { User, Calendar, Mail, Globe } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { portfolioData } from "../lib/portfolio-data";

interface AboutCardProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}

function AboutCard({ icon, label, value, href }: AboutCardProps) {
  const [showTooltip, setShowTooltip] = useState(false);
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLAnchorElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    setTooltipPos({ x: e.clientX, y: e.clientY });
  };

  const content = (
    <div className="flex flex-col items-center gap-3 h-full">
      <div className="text-purple-600">{icon}</div>
      <div className="text-center flex-1 flex flex-col justify-center">
        <p className="text-xs text-gray-500 uppercase tracking-widest font-semibold">
          {label}
        </p>
        <p className="text-sm font-medium text-gray-900 mt-1">{value}</p>
      </div>
    </div>
  );

  if (href) {
    return (
      <>
        <a
          ref={cardRef}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
          className="p-6 bg-white rounded-xl border border-purple-200 shadow-sm hover:bg-gray-50 transition-colors duration-200 cursor-pointer"
        >
          {content}
        </a>

        {/* Click Tooltip - portal로 body에 직접 렌더링 */}
        {showTooltip &&
          createPortal(
            <div
              className="pointer-events-none text-xs font-bold whitespace-nowrap"
              style={{
                position: "fixed",
                left: `${tooltipPos.x + 8}px`,
                top: `${tooltipPos.y - 20}px`,
                zIndex: 9999,
                color: "#9333EA",
                textShadow: "0 0 4px rgba(255, 255, 255, 0.8)",
                animation: "fadeIn 0.2s ease-out",
              }}
            >
              Click!
            </div>,
            document.body,
          )}
      </>
    );
  }

  return (
    <div className="p-6 bg-white rounded-xl border border-purple-200 shadow-sm">
      {content}
    </div>
  );
}

export default function AboutMe() {
  const { nameKo, dateOfBirth, email, github, blog, linkedin } =
    portfolioData.profile;

  return (
    <section id="about" className="max-w-4xl mx-auto px-6 py-16">
      <h3 className="text-3xl font-poppins font-bold text-gray-900 mb-12 text-center">
        About Me
      </h3>
      <div className="grid grid-cols-3 gap-6">
        <AboutCard icon={<User size={32} />} label="Name" value={nameKo} />
        <AboutCard
          icon={<Calendar size={32} />}
          label="Date of Birth"
          value={dateOfBirth}
        />
        <AboutCard
          icon={<Mail size={32} />}
          label="Email"
          value={email}
          href={`mailto:${email}`}
        />
        <AboutCard
          icon={<FaGithub size={32} />}
          label="GitHub"
          value="@waterbeenn"
          href={github}
        />
        <AboutCard
          icon={<Globe size={32} />}
          label="Blog"
          value="whatmattersmost"
          href={blog}
        />
        <AboutCard
          icon={<FaLinkedin size={32} />}
          label="LinkedIn"
          value="Subin Min"
          href={linkedin}
        />
      </div>
    </section>
  );
}

import { useState, useRef } from "react";
import { createPortal } from "react-dom";

interface ProjectItemProps {
  project: {
    id: number;
    title: string;
    description: string;
    tags: string[];
    link: string;
    github: string;
    summary: string;
    why: string;
    achievements: string;
  };
}

export default function ProjectItem({ project }: ProjectItemProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });
  const contentRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    setTooltipPos({ x: e.clientX, y: e.clientY });
  };

  return (
    <div
      onClick={() => setIsExpanded(!isExpanded)}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
      className="relative bg-white/40 backdrop-blur-sm border border-white/30 rounded-xl overflow-hidden transition-all duration-500 cursor-pointer hover:bg-white/10"
      style={{
        height: isExpanded && contentRef.current ? "auto" : undefined,
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-xl opacity-0 transition-opacity duration-300"></div>

      {/* Click Tooltip - portal로 body에 직접 렌더링 */}
      {showTooltip &&
        !isExpanded &&
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
      <div className="relative z-10 p-6">
        {/* Header - Always Visible */}
        <h4 className="text-xl font-poppins font-bold text-gray-900 mb-2">
          {project.title}
        </h4>
        <p className="text-gray-600 mb-4 text-sm leading-relaxed whitespace-pre-line">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-gradient-to-r from-pink-300/40 to-cyan-300/40 rounded-full text-xs font-medium text-gray-700"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Expanded Content */}
        <div
          ref={contentRef}
          className={`overflow-hidden transition-all duration-500 ${
            isExpanded ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="border-t border-white/20 pt-4 mt-4 space-y-4 mb-5">
            {/* Summary Section */}
            <div>
              <h5 className="text-m font-poppins font-bold text-gray-900 mb-2">
                Summary
              </h5>
              <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">
                {project.summary}
              </p>
            </div>

            {/* Why Section */}
            <div>
              <h5 className="text-m font-poppins font-bold text-gray-900 mb-2">
                Background
              </h5>
              <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">
                {project.why}
              </p>
            </div>

            {/* Achievements Section */}
            <div>
              <h5 className="text-m font-poppins font-bold text-gray-900 mb-2">
                Meaning
              </h5>
              <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">
                {project.achievements}
              </p>
            </div>
          </div>
        </div>

        {/* Links - Always Visible */}
        <div className="flex gap-3 mt-4">
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="text-purple-600 font-semibold text-sm"
            >
              라이브 보기 →
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="text-blue-600 font-semibold text-sm"
            >
              Github →
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

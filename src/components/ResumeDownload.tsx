import { useState } from "react";
import { FileDown } from "lucide-react";

export default function ResumeDownload() {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <div className="relative flex flex-col items-end">
        {/* 말풍선 툴팁 - 버튼 상단 우측 정렬 */}
        {showTooltip && (
          <div className="absolute bottom-full mb-4 right-0">
            <div className="relative">
              {/* 그라데이션 테두리 래퍼 */}
              <div className="p-[1.5px] bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl shadow-lg">
                <div className="bg-gradient-to-br from-slate-50 via-purple-50 to-blue-50 px-4 py-2.5 rounded-[14px]">
                  <p className="text-gray-800 text-sm font-medium whitespace-nowrap">
                    이력서 다운로드 하기!
                  </p>
                </div>
              </div>

              {/* 꼬리 - 바깥쪽 (그라데이션 테두리 색) */}
              <div
                className="absolute -bottom-[8px] right-5 w-0 h-0"
                style={{
                  borderLeft: "8px solid transparent",
                  borderRight: "8px solid transparent",
                  borderTop: "9px solid #9333ea",
                }}
              />
              {/* 꼬리 - 안쪽 (배경색으로 덮어서 테두리만 남김) */}
              <div
                className="absolute -bottom-[6px] right-[22px] w-0 h-0"
                style={{
                  borderLeft: "6px solid transparent",
                  borderRight: "6px solid transparent",
                  borderTop: "7px solid #f1effe",
                }}
              />
            </div>
          </div>
        )}

        {/* 다운로드 버튼 */}
        <a
          href="/minsubin_resume.pdf"
          download="민수빈_프론트엔드 직무_이력서.pdf"
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
          className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-purple-500/40 hover:scale-110 transition-all duration-300"
        >
          <FileDown className="w-6 h-6" />
        </a>
      </div>
    </div>
  );
}

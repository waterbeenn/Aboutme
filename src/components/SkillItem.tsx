interface SkillItemProps {
  skill: string;
}

export default function SkillItem({ skill }: SkillItemProps) {
  return (
    <span className="px-4 py-2 bg-gradient-to-r from-purple-400/30 to-blue-400/30 border border-purple-300/50 rounded-full text-sm font-medium text-gray-700 transition-all duration-300 cursor-default backdrop-blur-sm">
      {skill}
    </span>
  );
}

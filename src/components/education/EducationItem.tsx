interface EducationItemProps {
  name: string;
  period: string;
  description: string;
}

export default function EducationItem({
  name,
  period,
  description,
}: EducationItemProps) {
  return (
    <div className="border-l-4 border-purple-600 pl-6 py-4">
      <h4 className="text-lg font-poppins font-bold text-gray-900">
        {name}
      </h4>
      <p className="text-sm text-purple-600 font-medium mb-2">{period}</p>
      <p className="text-gray-700 text-sm leading-relaxed">
        {description}
      </p>
    </div>
  );
}

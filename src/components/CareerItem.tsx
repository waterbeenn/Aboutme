interface Task {
  title: string;
  period: string;
  summary: string;
}

interface CareerItemProps {
  company: string;
  period: string;
  projectSummary: string;
  role: string;
  tasks: Task[];
}

export default function CareerItem({
  company,
  period,
  projectSummary,
  role,
  tasks,
}: CareerItemProps) {
  return (
    <div className="border-l-4 border-purple-600 pl-6 py-6">
      {/* Company and Period */}
      <h4 className="text-lg font-poppins font-bold text-gray-900 mb-1">
        {company}
      </h4>
      <p className="text-sm text-purple-600 font-medium mb-2">{period}</p>

      {/* Project Summary */}
      <p className="text-sm text-gray-600 mb-4 whitespace-pre-line">{projectSummary}</p>

      {/* Role Badge */}
      <div className="mb-4">
        <span className="inline-block bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs font-medium">
          {role}
        </span>
      </div>

      {/* Separator */}
      <div className="h-px bg-gray-300 my-4"></div>

      {/* Tasks */}
      <div className="space-y-3">
        {tasks.map((task, index) => (
          <div key={index}>
            <p className="text-sm font-medium text-gray-900 mb-1">
              <span className="text-purple-600 mr-2">•</span>
              {task.title}
              <span className="text-gray-500 ml-2">| {task.period}</span>
            </p>
            <p className="text-sm text-gray-700 ml-4 leading-relaxed whitespace-pre-line">
              {task.summary}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

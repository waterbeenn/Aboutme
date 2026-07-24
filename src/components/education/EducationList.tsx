import EducationItem from "./EducationItem";
import { portfolioData } from "../lib/portfolio-data";

export default function EducationList() {
  return (
    <section id="education" className="max-w-4xl mx-auto px-6 py-16">
      <h3 className="text-3xl font-poppins font-bold text-gray-900 mb-12 text-center">
        Education
      </h3>
      <div className="space-y-8">
        {portfolioData.education
          .slice()
          .reverse()
          .map((edu) => (
            <EducationItem
              key={edu.id}
              name={edu.name}
              period={edu.period}
              description={edu.description}
            />
          ))}
      </div>
    </section>
  );
}

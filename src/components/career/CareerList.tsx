import CareerItem from './CareerItem';
import { portfolioData } from '../lib/portfolio-data';

interface Task {
  title: string;
  period: string;
  summary: string;
}



export default function CareerList() {
  return (
    <section id="career" className="max-w-4xl mx-auto px-6 py-16">
      <h3 className="text-3xl font-poppins font-bold text-gray-900 mb-12 text-center">
        Career
      </h3>
      <div className="space-y-8">
        {portfolioData.career.slice().reverse().map((career) => (
          <CareerItem
            key={career.id}
            company={career.company}
            period={career.period}
            projectSummary={career.projectSummary}
            role={career.role}
            tasks={career.tasks as Task[]}
          />
        ))}
      </div>
    </section>
  );
}

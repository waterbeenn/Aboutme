import SkillItem from './SkillItem';
import { portfolioData } from '../../lib/portfolio-data';

export default function SkillsList() {
  return (
    <section id="skills" className="max-w-4xl mx-auto px-6 py-16">
      <h3 className="text-3xl font-poppins font-bold text-gray-900 mb-12 text-center">
        Skills
      </h3>
      <div className="space-y-8">
        {Object.entries(portfolioData.skills).map(([category, skills]) => (
          <div key={category}>
            <h4 className="text-lg font-poppins font-semibold text-gray-700 mb-4 capitalize">
              {category === 'languages' && 'Languages'}
              {category === 'frontend' && 'Frontend'}
              {category === 'backend' && 'Backend'}
              {category === 'tools' && 'Tools'}
            </h4>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <SkillItem key={skill} skill={skill} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

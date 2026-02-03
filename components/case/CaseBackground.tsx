/**
 * COMPONENTE: CaseBackground
 * About the project/company + My Role section
 */

import { Container } from "@/components/ui/Container";
import { Section } from "@/components/layout/Section";
import { CaseBackground as CaseBackgroundType } from "@/types";

interface CaseBackgroundProps {
  background: CaseBackgroundType;
}

export function CaseBackground({ background }: CaseBackgroundProps) {
  const { aboutProject, myRole } = background;

  return (
    <Section spacing="md" background="white">
      <Container size="md">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          {/* About the Project */}
          <div>
            <h3 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-4">
              {aboutProject.title}
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              {aboutProject.description}
            </p>

            {aboutProject.stats.length > 0 && (
              <div className="grid grid-cols-3 gap-4">
                {aboutProject.stats.map((stat, i) => (
                  <div key={i}>
                    <div className="text-2xl font-black text-gray-900">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-500 font-medium">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* My Role */}
          <div>
            <h3 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-4">
              {myRole.title}
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              {myRole.description}
            </p>

            <ul className="space-y-2 mb-6">
              {myRole.responsibilities.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2 text-sm text-gray-600"
                >
                  <span className="text-gray-500 mt-0.5">&#8226;</span>
                  {item}
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-4 text-sm text-gray-500">
              <div>
                <span className="font-bold text-gray-700">Team:</span>{" "}
                {myRole.team}
              </div>
              <div>
                <span className="font-bold text-gray-700">Timeline:</span>{" "}
                {myRole.timeline}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

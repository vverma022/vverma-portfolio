import React from "react";
import { Navigation } from "../components/nav";
import { Skills } from "./skills";
import { skills } from "content/skills/skills-list";

export default function SkillsPage() {
  return (
    <div className="relative pb-16">
    <Navigation />
    <div className="px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
      <div className="max-w-2xl mx-auto lg:mx-0">
        <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
          Skills
        </h2>
        <p className="mt-4 text-zinc-400">
          A showcase of technologies I work with and their key features.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-3 md:grid-cols-2">
        {skills.map((skill) => (
          <Skills key={skill.title} skill={skill} />
        ))}
      </div>
    </div>
  </div>
  );
}

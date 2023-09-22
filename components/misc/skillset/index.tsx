"use client";

import { is } from "date-fns/locale";
import { useState, useEffect, use } from "react";
import Skills from "./skills.json";

type TSkill = {
  id: string;
  displayName: string;
  category: string;
  level: number;
};

function SkillBar({ skill }: { skill: TSkill }) {
  const [width, setWidth] = useState(0);
  useEffect(() => {
    setWidth(skill.level * 10);
  }, []);

  return (
    <div className="flex w-full flex-row">
      <div className="w-1/4 text-sm">{skill.displayName}</div>
      <div className="w-3/4">
        <div className="border-1 h-4 w-full rounded-full border border-neutral-700">
          <div
            className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-green-400 transition-all duration-500 ease-in-out"
            style={{ width: `${width}%` }}
          />
        </div>
      </div>
    </div>
  );
}

export function SkillsetDiagram() {
  return (
    <div className="flex flex-wrap gap-y-2">
      {Skills.sort((a, b) => b.level - a.level).map((skill) => {
        return <SkillBar skill={skill} />;
      })}
    </div>
  );
}

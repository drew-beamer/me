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
    <div className="flex flex-row w-full">
      <div className="w-1/4 text-sm">{skill.displayName}</div>
      <div className="w-3/4">
        <div className="w-full h-4 border border-neutral-700 border-1 rounded-full">
          <div
            className="h-full bg-gradient-to-r from-cyan-400 to-green-400 rounded-full transition-all duration-500 ease-in-out"
            style={{ width: `${width}%` }}
          />
        </div>
      </div>
    </div>
  );
}

export function SkillsetDiagram() {
  return (
    <div className="flex gap-y-2 flex-wrap">
      {Skills.sort((a, b) => b.level - a.level).map((skill) => {
        return <SkillBar skill={skill} />;
      })}
    </div>
  );
}

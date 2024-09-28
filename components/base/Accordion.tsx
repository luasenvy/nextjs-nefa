"use client";

import ChevronLeftRounded from "@mui/icons-material/ChevronLeftRounded";
import { useState } from "react";

export interface AccordionType {
  title: string;
  description: string;
}

interface AccordionProps {
  accordion: AccordionType;
}

export default function Accordion({ accordion }: AccordionProps) {
  const [selected, setSelected] = useState<boolean>(false);
  return (
    <li className="relative border-b-2 border-gray-200">
      <button
        type="button"
        className="w-full py-4 text-left"
        onClick={() => setSelected((prev) => !prev)}
      >
        <div className="flex items-center justify-between">
          <span className="font-medium">{accordion.title}</span>
          <ChevronLeftRounded
            className="transition-transform"
            style={{ transform: `rotate(${selected ? 90 : 270}deg)` }}
          />
        </div>
      </button>

      {selected && (
        <div className="relative overflow-hidden transition-all duration-700">
          <div className="py-2">
            <p className="text-sm text-gray-700 tracking-wide leading-relaxed">
              {accordion.description}
            </p>
          </div>
        </div>
      )}
    </li>
  );
}

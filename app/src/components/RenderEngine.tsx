// RenderEngine.tsx
import React from "react";
import { CustomTextField } from "./ui/CustomTextField";
import { Dropdown } from "./ui/Dropdown";
import { GridSelect } from "./ui/GridSelect";
import { Question } from "./onboarding/types";

// Define the renderer map
const renderMap: Record<string, any> = {
  text: CustomTextField,
  email: CustomTextField,
  phone: CustomTextField,
  money: CustomTextField,
  number: CustomTextField,
  dropdown: Dropdown,
  gridSelect: GridSelect,
};

type RenderEngineProps = {
  question: Question;
  value: string;
  onChange: (val: string) => void;
};

export function RenderEngine({ question, value, onChange }: RenderEngineProps) {
  const Component = renderMap[question.type];
  if (!Component) return null;

  return (
    <Component
      label={question.title}
      value={value}
      onChange={onChange}
      type={question.type} // Add the type prop for CustomTextField
      {...("options" in question ? { options: question.options } : {})}
      {...("multiple" in question ? { multiple: question.multiple } : {})}
    />
  );
}

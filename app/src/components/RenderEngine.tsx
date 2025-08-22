/* eslint-disable @typescript-eslint/no-explicit-any */

import React from "react";
import { CustomTextField } from "./ui/CustomTextField";
import { Dropdown } from "./ui/Dropdown";
import { GridSelect } from "./ui/GridSelect";
import { Question } from "./onboarding/types";
import { CustomCheckbox } from "./ui/CustomCheckbox";

// Define the renderer map
const renderMap: Record<string, any> = {
  text: CustomTextField,
  email: CustomTextField,
  phone: CustomTextField,
  money: CustomTextField,
  number: CustomTextField,
  dropdown: Dropdown,
  gridSelect: GridSelect,
  dynamicText: CustomTextField,
  checkbox: CustomCheckbox,
};

type RenderEngineProps = {
  question: Question;
  value: string | string[] | boolean; // Adjusted to handle different value types
  onChange: (val: string) => void;
};

export function RenderEngine({ question, value, onChange }: RenderEngineProps) {
  const Component = renderMap[question.type];
  if (!Component) return null;

  const handleChange = (val: string | boolean) => {
    if (typeof val === "boolean") {
      onChange(val ? "true" : ""); // Convert boolean to string
    } else {
      onChange(val);
    }
  };

  // Convert string value to boolean for checkbox
  const componentValue = question.type === 'checkbox' ? value === 'true' : value;

  return (
    <Component
      label={question.title}
      value={componentValue}
      onChange={handleChange}
      type={question.type}
      {...("options" in question ? { options: question.options } : {})}
      {...("multiple" in question ? { multiple: question.multiple } : {})}
    />
  );
}

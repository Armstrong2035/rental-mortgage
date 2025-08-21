// src/components/dashboard/types.ts

export type BaseQuestion = {
  key: string;
  title?: string;
  required?: boolean;
};

// Static text/number/email/money questions
export type TextQuestion = BaseQuestion & {
  type: "text" | "money" | "email" | "phone" | "number";
};

// Dropdown with fixed options
export type DropdownQuestion = BaseQuestion & {
  type: "dropdown";
  options: string[] | object[];
  multiple?: boolean;
};

// Grid select with images/icons
export type GridSelectOption = {
  label: string;
  value: string;
  iconUrl?: string;
  imageUrl?: string;
  description?: string;
};

export type GridSelectQuestion = BaseQuestion & {
  type: "gridSelect";
  options: GridSelectOption[];
  multiple?: boolean;
};

// Dynamic API-backed questions
export type DynamicTextQuestion = BaseQuestion & {
  type: "dynamicText";
  endpoint?: string;
  required?: boolean;
};

export type DynamicDropdownQuestion = BaseQuestion & {
  type: "dynamicDropdown";
  endpoint: string;
  multiple?: boolean;
};

// Union of all question types
export type Question =
  | TextQuestion
  | DropdownQuestion
  | GridSelectQuestion
  | DynamicTextQuestion
  | DynamicDropdownQuestion;

// Onboarding step
export type OnboardingProps = {
  title: string;
  description: string;
  questions: Question[];
};

/*
My dynamic types (populated by API calls): 
1. DynamicDropdown 
2. DynamicText
*/

type BaseQuestion = {
  title?: string;
};
type TextQuestion = BaseQuestion & {
  type: "text" | "dropdown" | "money" | "email" | "phone" | "number";
};

type GridSelectOption = {
  label: string;
  value: string;
  iconUrl?: string;
  imageUrl?: string;
  description?: string;
};

type GridSelectQuestion = BaseQuestion & {
  type: "gridSelect";
  options: GridSelectOption[];
  multiple?: boolean; // allow multi-select?
};

type StringOption = string;
type ObjectOption = object;

type DropdownQuestion = BaseQuestion & {
  type: "dropdown";
  options: StringOption[] | ObjectOption[];
  multiple?: boolean; // allow multi-select?
};

export type Question = TextQuestion | DropdownQuestion | GridSelectQuestion;

type BaseOnboardingData = {
  title: string;
  description: string;
};

export type OnboardingProps = BaseOnboardingData & {
  questions: Question[];
};

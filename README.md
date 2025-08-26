## Schema-Driven Onboarding Form System

This project features an impressive schema-driven design for the onboarding flow. Instead of hardcoding each form step and field, the onboarding process is defined by a single configuration object ([src/components/onboarding/onboardingData.ts](src/components/onboarding/onboardingData.ts)), which describes all steps, questions, and their types.

### How It Works

- **Step & Question Schema:**  
  The onboarding steps are defined as an array of objects, each representing a step with a title, description, and a list of questions.  
  Each question specifies its type (`text`, `dropdown`, `gridSelect`, `checkbox`, etc.), key, title, and other relevant properties.

  See [`onboardingSteps`](src/components/onboarding/onboardingData.ts) for the full schema.

- **Type Safety:**  
  The question types and step structure are enforced via TypeScript types in [`types.ts`](src/components/onboarding/types.ts), ensuring consistency and reducing runtime errors.

- **Dynamic Rendering:**  
  The [`RenderEngine`](src/components/RenderEngine.tsx) component receives a question object and dynamically selects the appropriate UI component to render (e.g., text field, dropdown, grid select, checkbox).  
  This means adding new question types or steps only requires updating the schema, not the rendering logic.

- **Multi-Step Navigation:**  
  The onboarding flow is managed by [`Onboarding.tsx`](src/components/onboarding/Onboarding.tsx), which tracks the current step, validates required fields, and persists form data in localStorage.

- **Extensibility:**  
  To add new steps or question types, simply update the schema and (if needed) extend the renderer map in [`RenderEngine.tsx`](src/components/RenderEngine.tsx).

### Benefits

- **Maintainability:**  
  All form logic is centralized in the schema, making updates and changes straightforward.

- **Reusability:**  
  The same rendering engine and question types can be reused for other forms (e.g., user profile, property details).

- **Scalability:**  
  New steps, fields, and input types can be added with minimal code changes.

### Example

A sample step from [`onboardingSteps`](src/components/onboarding/onboardingData.ts):

```ts
{
  title: "Tenant Details",
  description: "Please enter your personal information.",
  questions: [
    { title: "Full Name", key: "fullName", type: "text" },
    { title: "Email Address", key: "emailAddress", type: "email" },
    { title: "Phone Number", key: "phoneNumber", type: "phone" },
    {
      title: "Employment Status",
      key: "employmentStatus",
      type: "dropdown",
      options: ["Employed", "Between Jobs", "Business Owner / Freelancer"],
    },
    // ...
  ],
}
```

This schema is passed to the [`Step`](src/components/onboarding/step/Step.tsx) and [`RenderEngine`](src/components/RenderEngine.tsx) components, which handle rendering and user interaction.

---

**In summary:**  
The onboarding system is highly flexible, maintainable, and extensible thanks to its schema-driven architecture. All form logic is declarative, making it easy to adapt to new requirements.

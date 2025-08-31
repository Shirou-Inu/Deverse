export const Tags = {
  React: "React",
  ML: "Machine Learning",
  Simulation: "Simulation",
} as const;

export type Tag = (typeof Tags)[keyof typeof Tags];
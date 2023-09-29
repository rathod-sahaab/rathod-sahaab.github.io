export const TECHNOLOGY_MAP = {
  all: "All",
  cpp: "C/C++",
  frontend: "Frontend",
  backend: "Backend",
  js: "JavaScript",
  react: "ReactJS",
  ts: "TypeScript",
  nodejs: "NodeJS",
  dart: "Dart Lang",
  gtkmm: "GTKmm",
  pug: "Pug/Jade",
  rust: "Rust",
} as const;

export type ITechnologyTag = keyof typeof TECHNOLOGY_MAP;

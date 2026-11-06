export type LessonSection = {
  heading: string;
  paragraphs: string[];
  callout?: string;
};

export type QuizQuestion = {
  question: string;
  options: string[];
  answer: number;
  explanation: string;
};

export type Lesson = {
  id: string;
  number: number;
  moduleId: string;
  title: string;
  eyebrow: string;
  duration: number;
  description: string;
  objectives: string[];
  sections: LessonSection[];
  example: { title: string; body: string };
  distinction: string;
  source: { label: string; url: string };
  furtherReading?: { label: string; url: string };
  lab?: "surplus" | "circuit" | "reproduction" | "profit";
  quiz: QuizQuestion[];
};

export type CourseModule = {
  id: string;
  index: string;
  title: string;
  subtitle: string;
  description: string;
};

export const modules: CourseModule[] = [
  { id: "foundations", index: "I", title: "Ways of seeing", subtitle: "Method, history & class", description: "Build the vocabulary and historical method needed before opening Capital." },
  { id: "value", index: "II", title: "The world of commodities", subtitle: "Value, money & fetishism", description: "Follow Marx’s movement from the everyday commodity to the social relations hidden inside it." },
  { id: "production", index: "III", title: "Inside production", subtitle: "Labour-power & surplus value", description: "Enter the workplace to examine labour-power, the working day, technology, and exploitation." },
  { id: "accumulation", index: "IV", title: "Accumulation & history", subtitle: "Wages, reproduction & dispossession", description: "Connect the individual workplace to accumulation, class reproduction, and capitalist history." },
  { id: "circulation", index: "V", title: "The system in motion", subtitle: "Circulation, profit & prices", description: "Move through Volumes II and III: circuits, turnover, social reproduction, and prices of production." },
  { id: "legacies", index: "VI", title: "Contradictions & legacies", subtitle: "Crisis, politics & open debates", description: "Finish with crisis theory, class politics, later Marxist questions, and major criticisms." },
];

import { foundationLessons } from "./lessons-foundations";
import { productionLessons } from "./lessons-production";
import { systemLessons } from "./lessons-system";

export const lessons: Lesson[] = [...foundationLessons, ...productionLessons, ...systemLessons];

export function getLesson(id?: string) {
  return lessons.find((lesson) => lesson.id === id);
}

export function getModule(id: string) {
  return modules.find((module) => module.id === id);
}

export function getModuleLessons(id: string) {
  return lessons.filter((lesson) => lesson.moduleId === id);
}

import { Project } from "./project.model"

export interface Task {
  id?: number;
  title: string;
  isAchieved: boolean;
  deadLine: Date;
  priority: number;
  description: string;
  project: Project;
}

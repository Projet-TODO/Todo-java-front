import { Project } from "./project.model"

export interface Task {
  id_task?: number;
  title_task: string;
  achieved_task: boolean;
  deadline_task: Date;
  priority_task: number;
  description_task: string;
  project: Project;
}

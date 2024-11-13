import { Project } from "./project.model"

export interface Task {
  id?: bigint
  title: string;
  isAchieved: boolean;
  deadLine: Date;
  priority: number;
  description: string;
}

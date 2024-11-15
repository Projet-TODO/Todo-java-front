import { Task } from "./task.model"
export interface Project {
  id?: number;
  name_project: string;
  tasks: Task[];
  date_project: Date;
  id_users: number;
}

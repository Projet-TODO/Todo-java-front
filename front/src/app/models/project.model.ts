import { Task } from "./task.model"
import { User } from "./user.model"

export interface Project {
  id?: number;
  name_project: string;
  tasks: Task[];
  date_project: Date;
  user: User;
}

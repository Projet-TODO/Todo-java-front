import { Task } from "./task.model"
import { Users } from "./users.model";
export interface Project {
  id?: number;
  name_project: string;
  tasks: Task[];
  date_project: Date;
  user: Users;
}

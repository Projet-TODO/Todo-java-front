import { Task } from "./task.model"
import { User } from "./user.model"

export interface Project {
  id?: bigint
  title: string;
  tasks: Task[];
  date: Date;
  user: User;
}

import { Injectable } from "@angular/core"
import { Observable } from "rxjs"
import { HttpClient } from "@angular/common/http"
import { Project } from "models/project.model"
import { environment } from "../../environments/environment";
import { Task } from "models/task.model";

@Injectable({
  providedIn: "root",
})
export class ProjectDetailsService {
  constructor(private http: HttpClient) {
  }

  private projectUrl = `${environment.API_URL}`;

  findByUser(id: number): Observable<Project[]> {
    const url = `${this.projectUrl}/project/user/${id}`;
    console.log(url);
    return this.http.get<Project[]>(url);
  }

  patchTask(task: Task): Observable<Task> {
    const url = `${this.projectUrl}/tasks/${task.id_task}`;
    return this.http.patch<Task>(url, task);
  }

  saveTask(task: Task): Observable<Task> {
    const url = `${this.projectUrl}/tasks`;
    const reponse = this.http.post<Task>(url, task);
    return reponse;
  }

  deleteTask(task: Task): Observable<Task> {
    const url = `${this.projectUrl}/tasks/${task.id_task}`;
    return this.http.delete<Task>(url);
  }

  getProjectById(id: number): Observable<Project> {
    const url = `${this.projectUrl}/project/${id}`;
    return this.http.get<Project>(url);
  }

}

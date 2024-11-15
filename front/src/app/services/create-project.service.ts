import { Injectable } from "@angular/core"
import { Observable } from "rxjs"
import { HttpClient } from "@angular/common/http"
import { environment } from "../../environments/environment";
import { Project } from "models/project.model";

@Injectable({
  providedIn: "root",
})
export class CreateProjectService {
  constructor(private http: HttpClient) {}

  private projectUrl = `${environment.API_URL}`;

  generateTasks(project: any, consignes: string): Observable<any> {
    const url = `${this.projectUrl}/ai`;
    const response = this.http.get(url, {
      params: {
        project: JSON.stringify(project),
        consignes: consignes
      },
    });
    return response;
  }

  saveProject(project: Project): Observable<Project> {
    const url = `${this.projectUrl}/project`;
    const reponse = this.http.post<Project>(url, project);
    return reponse;
  }

  saveTask(task: Task): Observable<Task> {
    const url = `${this.projectUrl}/tasks`;
    const reponse = this.http.post<Task>(url, task);
    return reponse;
  }
}

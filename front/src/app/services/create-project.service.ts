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

  saveProject(project: Project): void {
    const url = `${this.projectUrl}/project`;
    this.http.post(url, project).subscribe();
  }

  saveTask(task: Task): void {
    const url = `${this.projectUrl}/tasks`;
    this.http.post(url, task).subscribe();
  }
}

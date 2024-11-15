import { Injectable } from "@angular/core"
import { Observable } from "rxjs"
import { HttpClient } from "@angular/common/http"
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: "root",
})
export class CreateProjectService {
  constructor(private http: HttpClient) {}

  private projectUrl = `${environment.API_URL}`;

  generateTasks(project: any): Observable<any> {
    const url = `${this.projectUrl}/ai`;
    return this.http.get(url, {
      params: { project: JSON.stringify(project) },
    });
  }
}

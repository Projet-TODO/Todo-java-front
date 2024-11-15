import { Injectable } from "@angular/core"
import { Observable } from "rxjs"
import { HttpClient } from "@angular/common/http"
import { Project } from "models/project.model"
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: "root",
})
export class ProjectDetailsService {
  constructor(private http: HttpClient) {
  }

  private projectUrl = `${environment.API_URL}/project`;

  findByUser(id: number): Observable<Project[]> {
    const url = `${this.projectUrl}/user/${id}`;
    console.log(url);
    return this.http.get<Project[]>(url);
  }

}

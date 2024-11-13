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

  findAll(): Observable<Project[]> {
    console.log(this.projectUrl)
    const project = this.http.get<Project[]>(this.projectUrl)
    console.log(project)
    return project
  }

}

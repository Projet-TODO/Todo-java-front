import { Injectable } from "@angular/core"
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router"
import { Project } from "models/project.model"
import { Observable } from "rxjs"
import { ProjectDetailsService } from "services/project-details.service"


@Injectable({
  providedIn: "root",
})
export class ProjectResolver implements Resolve<Project[]> {
  constructor(private projectService: ProjectDetailsService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Project[]> {
    return this.projectService.findAll()
  }
}

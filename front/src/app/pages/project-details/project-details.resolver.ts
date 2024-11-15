import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Project } from "models/project.model";
import { Task } from "models/task.model";
import { Observable, of } from "rxjs";
import { ProjectDetailsService } from "services/project-details.service";
import { SharedDataService } from "services/shared-data.service";

@Injectable({
  providedIn: "root",
})
export class ProjectResolver implements Resolve<Project[]> {
  constructor(private projectService: ProjectDetailsService, private dataService: SharedDataService ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Project[]> {
    const user = JSON.parse(localStorage.getItem('user') || '{}');

    if (Object.keys(user).length !== 0) {
      return this.projectService.findByUser(user.id_users);
    } else {
      const projectDetails = this.dataService.getProjectDetails();
      const tasks: Task[] = this.dataService.getGeneratedTasks();

      const project: Project = { name_project: projectDetails.name_project, date_project: new Date(projectDetails.date_project), user: user, tasks: tasks };
      return of([project]);
    }
  }
}

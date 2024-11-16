import { Component, OnInit } from "@angular/core"
import { Router } from "@angular/router";
import { CreateProjectService } from "services/create-project.service";
import { SharedDataService } from "services/shared-data.service";
import { Project } from "models/project.model";
import { ProjectDetails } from "models/projectDetails.model";
import { tap } from "rxjs";


@Component({
  selector: "epf-create-project",
  templateUrl: "./create-project.component.html",
  styleUrls: ["./create-project.component.scss"],
})
export class CreateProjectComponent implements OnInit {
  projectTitle: string = '';
  projectDescription: string = "";
  projectEndDate: string = "";

  constructor(
    private sharedDataService: SharedDataService,
    private projectService: CreateProjectService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.projectTitle = this.sharedDataService.getProjectTitle();
  }

  async submitProject(): Promise<void> {
    if (!this.projectTitle || !this.projectEndDate) {
      alert("Veuillez remplir tous les champs requis.");
      return;
    }

    const user = JSON.parse(localStorage.getItem('user') || '{}');
    const formattedDate = this.formatDateToBackend(new Date(this.projectEndDate));
    const projectDetails: ProjectDetails = {
      tasks: [],
      name_project: this.projectTitle,
      date_project: formattedDate,
    };

    this.sharedDataService.setLoadingState(true);

    try {
      const response = await this.projectService.generateTasks(projectDetails, this.projectDescription).toPromise();
      this.sharedDataService.setLoadingState(false);

      if (Object.keys(user).length !== 0) {
        const project: Project = {
          name_project: this.projectTitle,
          date_project: new Date(this.projectEndDate),
          user: user,
          tasks: []
        };

        this.projectService.saveProject(project)
          .pipe(
            tap((savedProject: Project) => {
              for (let task of response) {
                task.project = savedProject;
                this.projectService.saveTask(task).subscribe();
              }
            }),
            tap(() => {
              this.router.navigate(['/projects']);
            })
          )
          .subscribe();
      } else {
        this.sharedDataService.setGeneratedTasks(response);
        this.sharedDataService.setProjectDetails(projectDetails);
        this.router.navigate(['/projects']);
      }
    } catch (error) {
      this.sharedDataService.setLoadingState(false);
      alert("Une erreur est survenue lors de la génération des tâches.");
      console.error(error);
    }
  }

  formatDateToBackend(date: Date): string {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');

    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
  }
}

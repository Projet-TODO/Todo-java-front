import { Component, OnInit } from "@angular/core"
import { Router } from "@angular/router";
import { CreateProjectService } from "services/create-project.service";
import { SharedDataService } from "services/shared-data.service";
import { Project } from "models/project.model";
import { User } from "models/user.model";

@Component({
  selector: "epf-create-project",
  templateUrl: "./create-project.component.html",
  styleUrls: ["./create-project.component.scss"],
})
export class CreateProjectComponent implements OnInit {
  projectTitle: string = '';
  projectDescription: string = "";
  projectEndDate: string = "";

  connected: boolean = true;

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

    const formattedDate = this.formatDateToBackend(new Date(this.projectEndDate));
    const projectDetails = {
      tasks: [],
      name_project: this.projectTitle,
      date_project: formattedDate,
    };

    this.sharedDataService.setLoadingState(true);

    try {
      const response = await this.projectService.generateTasks(projectDetails, this.projectDescription).toPromise();
      this.sharedDataService.setLoadingState(false);

      if (this.connected) {
        const user: User = { id_users: 1, first_name_users: 'John', email: 'john.doe@example.com', last_name_users: 'Doe', password_users: 'password1' };
        localStorage.setItem('user', JSON.stringify(user));
        if (user.id_users !== undefined) {
          const project : Project = { name_project: this.projectTitle, date_project: new Date(this.projectEndDate), id_users: user.id_users, tasks: [] };
          this.projectService.saveProject(project);
        }

        // this.projectService.saveProject(project);
        // for (let task of response) {
        //   this.projectService.saveTask(task);
        // }
        console.log("OK !!");
      } else {
        this.sharedDataService.setGeneratedTasks(response);
        this.sharedDataService.setProjectDetails(projectDetails);
        console.log(response);
      }
      // this.router.navigate(['/projects']);
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

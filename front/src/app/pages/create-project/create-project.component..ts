import { Component, OnInit } from "@angular/core"
import { Router } from "@angular/router";
import { CreateProjectService } from "services/create-project.service";
import { SharedDataService } from "services/shared-data.service";

@Component({
  selector: "epf-create-project",
  templateUrl: "./create-project.component.html",
  styleUrls: ["./create-project.component.scss"],
})
export class CreateProjectComponent implements OnInit {
  projectTitle: string = '';
  projectDescription: string = "";
  projectEndDate: string = "";
  generatedTasks: any[] = [];

  constructor(
    private sharedDataService: SharedDataService,
    private projectService: CreateProjectService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.projectTitle = this.sharedDataService.getProjectTitle();
  }

  submitProject(): void {
    if (!this.projectTitle || !this.projectEndDate) {
      alert("Veuillez remplir tous les champs requis.");
      return;
    }

    const projectDetails = {
      name_project: this.projectTitle,
      // description_project: this.projectDescription,
      date_project: this.projectEndDate.split("T")[0],
    };

    this.sharedDataService.setLoadingState(true);

    this.projectService.generateTasks(projectDetails).subscribe({
      next: (response) => {
        this.generatedTasks = response.tasks;
        console.log("Tâches générées :", this.generatedTasks);
        this.router.navigate(["/projects"]);
      },
      error: (err) => {
        console.error("Erreur lors de l'appel à l'IA :", err);
        this.sharedDataService.setLoadingState(false);
      },
      complete: () => {
        this.sharedDataService.setLoadingState(false);
      },
    });
  }

  // submitProject(): void {
  //   this.sharedDataService.setLoadingState(true);
  //   setTimeout(() => {
  //     this.sharedDataService.setLoadingState(false);
  //     this.router.navigate(['/projects']);
  //   }, 15000);
  // }
}

import { Component, OnInit } from "@angular/core"
import { Router } from "@angular/router";
import { SharedDataService } from "services/shared-data.service";

@Component({
  selector: "epf-create-project",
  templateUrl: "./create-project.component.html",
  styleUrls: ["./create-project.component.scss"],
})
export class CreateProjectComponent implements OnInit {
  projectTitle: string = '';

  constructor(
    private sharedDataService: SharedDataService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.projectTitle = this.sharedDataService.getProjectTitle();
  }

  submitProject(): void {
    this.sharedDataService.setLoadingState(true);
    setTimeout(() => {
      this.sharedDataService.setLoadingState(false);
      this.router.navigate(['/projects']);
    }, 15000);
  }
}

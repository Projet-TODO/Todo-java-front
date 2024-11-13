import { Component, OnInit } from "@angular/core"
import { Router } from "@angular/router";
import { SharedDataService } from "services/shared-data.service";

@Component({
  selector: "epf-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  projectTitle: string = '';

  constructor(private router: Router, private sharedDataService: SharedDataService) { }

  ngOnInit(): void { }

  navigateToCreateProject(): void {
    this.sharedDataService.setProjectTitle(this.projectTitle);
    this.router.navigate(['/create-project']);
  }
}

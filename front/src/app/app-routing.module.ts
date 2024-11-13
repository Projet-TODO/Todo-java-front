import { NgModule } from "@angular/core"
import { RouterModule, Routes } from "@angular/router"
import { CreateProjectComponent } from "pages/create-project/create-project.component."
import { HomeComponent } from "pages/home/home.component"
import { ProjectDetailsComponent } from "pages/project-details/project-details.component"
import { ProjectResolver } from "pages/project-details/project-details.resolver"

const routes: Routes = [
  { path: "", component: HomeComponent },
  {
    path: "projects",
    component: ProjectDetailsComponent,
    resolve: {
      projects: ProjectResolver,
    },
  },
  {
    path: "create-project",
    component: CreateProjectComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}

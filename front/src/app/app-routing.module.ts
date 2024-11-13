import { NgModule } from "@angular/core"
import { RouterModule, Routes } from "@angular/router"
import { CreateProjectComponent } from "pages/create-project/create-project.component."
import { HomeComponent } from "pages/home/home.component"
import { ProjectDetailsComponent } from "pages/project-details/project-details.component"

const routes: Routes = [
  { path: "", component: HomeComponent },
  {
    path: "projects",
    component: ProjectDetailsComponent
  },
  {
    path: "create-project",
    component: CreateProjectComponent
  }
  // {
  //   path: "majors",
  //   component: MajorsComponent,
  //   resolve: {
  //     majors: MajorsResolver,
  //   },
  // },
  // {
  //   path: "major-students/:id",
  //   component: MajorStudentsComponent,
  //   resolve: {
  //     studentsFromMajor: MajorStudentsResolver,
  //   },
  // },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}

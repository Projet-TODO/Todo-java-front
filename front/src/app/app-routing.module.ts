import { NgModule } from "@angular/core"
import { RouterModule, Routes } from "@angular/router"
import { HomeComponent } from "home/home.component"
import { ProjectDetailsComponent } from "project-details/project-details.component"

const routes: Routes = [
  { path: "", component: HomeComponent },
  {
    path: "projects",
    component: ProjectDetailsComponent
  },
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

import { NgModule } from "@angular/core"
import { BrowserModule } from "@angular/platform-browser"

import { AppRoutingModule } from "app-routing.module"
import { AppComponent } from "app.component"

import { HomeComponent } from "pages/home/home.component"
import { CreateProjectComponent } from "pages/create-project/create-project.component."
import { ProjectDetailsComponent } from './pages/project-details/project-details.component';

import { NavbarComponent } from "components/navbar/navbar.component"
import { FooterComponent } from "components/footer/footer.component";
import { SignupDialogComponent } from './components/signup-dialog/signup-dialog.component';
import { SigninDialogComponent } from './components/signin-dialog/signin-dialog.component';
import { TaskItemCompnent } from './components/task-item/task-item.component';

import { BrowserAnimationsModule } from "@angular/platform-browser/animations"
import { MatListModule } from "@angular/material/list"
import { FormsModule } from "@angular/forms"
import { MatIconModule } from "@angular/material/icon"
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from "@angular/common/http"
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { CreateProjectService } from "services/create-project.service"
import { ProjectDetailsService } from "services/project-details.service"
import { SharedDataService } from "services/shared-data.service"


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    SignupDialogComponent,
    SigninDialogComponent,
    ProjectDetailsComponent,
    TaskItemCompnent,
    CreateProjectComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatListModule,
    FormsModule,
    MatIconModule,
    MatButtonModule,
    HttpClientModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatMenuModule
  ],
  exports: [
    TaskItemCompnent,
  ],
  providers: [CreateProjectService, ProjectDetailsService, SharedDataService],
  bootstrap: [AppComponent],
  entryComponents: [SignupDialogComponent, SigninDialogComponent]
})
export class AppModule {
}

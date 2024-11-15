import { Injectable } from "@angular/core";
import { BehaviorSubject } from 'rxjs';
import { Task } from "../models/task.model";
import { ProjectDetails } from "models/projectDetails.model";

@Injectable({
  providedIn: "root",
})
export class SharedDataService {
  private projectTitle: string = '';

  private isLoadingSubject = new BehaviorSubject<boolean>(false);
  isLoading$ = this.isLoadingSubject.asObservable();

  private generatedTasks: Task[] = [];
  private projectDetails: ProjectDetails = { name_project: '', tasks: [], date_project: '' };

  setProjectTitle(title: string) {
    this.projectTitle = title;
  }

  getProjectTitle(): string {
    return this.projectTitle;
  }

  setGeneratedTasks(tasks: Task[]) {
    this.generatedTasks = tasks;
  }

  getGeneratedTasks(): Task[] {
    return this.generatedTasks;
  }

  setProjectDetails(details: ProjectDetails) {
    this.projectDetails = details;
  }

  getProjectDetails(): ProjectDetails {
    return this.projectDetails;
  }

  setLoadingState(isLoading: boolean) {
    this.isLoadingSubject.next(isLoading);
  }
}

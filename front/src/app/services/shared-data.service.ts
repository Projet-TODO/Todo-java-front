import { Injectable } from "@angular/core";
import { BehaviorSubject } from 'rxjs';
import { Task } from "../models/task.model";

@Injectable({
  providedIn: "root",
})
export class SharedDataService {
  private projectTitle: string = '';

  private isLoadingSubject = new BehaviorSubject<boolean>(false);
  isLoading$ = this.isLoadingSubject.asObservable();

  private generatedTasks: Task[] = [];
  private projectDetails: {} = {};

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

  setProjectDetails(details: {}) {
    this.projectDetails = details;
  }

  getProjectDetails(): {} {
    return this.projectDetails;
  }

  setLoadingState(isLoading: boolean) {
    this.isLoadingSubject.next(isLoading);
  }
}

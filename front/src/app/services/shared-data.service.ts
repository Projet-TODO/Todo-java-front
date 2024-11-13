import { Injectable } from "@angular/core";
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: "root",
})
export class SharedDataService {
  private projectTitle: string = '';
  private isLoadingSubject = new BehaviorSubject<boolean>(false);
  isLoading$ = this.isLoadingSubject.asObservable();

  setProjectTitle(title: string) {
    this.projectTitle = title;
  }

  getProjectTitle(): string {
    return this.projectTitle;
  }

  setLoadingState(isLoading: boolean) {
    this.isLoadingSubject.next(isLoading);
  }
}

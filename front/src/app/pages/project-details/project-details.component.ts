import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Project } from 'models/project.model';
import { Task } from 'models/task.model';
import { map, Observable } from 'rxjs';
import { ProjectDetailsService } from 'services/project-details.service';

@Component({
  selector: 'epf-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss']
})
export class ProjectDetailsComponent implements OnInit {
  projects$: Observable<Project[]> = this._route.data.pipe(map((data) => data["projects"]))
  projects: Project[] = [];
  selectedProject: Project | null = null;
  newTaskTitle: string = '';

  constructor(private router: Router, private _route: ActivatedRoute, private projectDetailsService: ProjectDetailsService) {
    this.projects$.subscribe((projects) => {
      this.projects = projects

    })
  }

  ngOnInit(): void {}


  addProject(): void {
    this.router.navigate(['/create-project']);
  }

  selectProject(project: Project): void {
    this.selectedProject = project;
  }

  addTask(): void {
    if (this.selectedProject && this.newTaskTitle.trim()) {
      const newTask: Task = {
        title_task: this.newTaskTitle,
        achieved_task: false,
        deadline_task: new Date(),
        priority_task: 1,
        description_task: '',
        project: this.selectedProject,
      };

      this.projectDetailsService.saveTask(newTask).subscribe();
      this.selectedProject.tasks.push(newTask);
      this.newTaskTitle = '';
    }
  }

  deleteTask(task: Task): void {
    if (this.selectedProject) {
      const index = this.selectedProject.tasks.findIndex(t => t.id_task === task.id_task);
      if (index !== -1) {
        this.projectDetailsService.deleteTask(task).subscribe();
        this.selectedProject.tasks.splice(index, 1);
      }
    }
  }

  updateTask(updatedTask: Task): void {
    if (this.selectedProject) {
      const index = this.selectedProject.tasks.findIndex(t => t.id_task === updatedTask.id_task);
      if (index !== -1) {
        let projectID: number = 0;
        if (updatedTask.project.name_project !== undefined) {
          projectID = updatedTask.project.id_project || 0;
        } else {
          projectID = Number(updatedTask.project);
        }

        this.projectDetailsService.getProjectById(projectID).subscribe((project) => {
          updatedTask.project = project;
          this.projectDetailsService.patchTask(updatedTask).subscribe(
            (task) => {
              if (this.selectedProject && this.selectedProject.tasks) {
                this.selectedProject.tasks[index] = task;
              }
            }
          );
        });
      }
    }
  }
}

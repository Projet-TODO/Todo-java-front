import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Project } from 'models/project.model';
import { Task } from 'models/task.model';
import { User } from 'models/user.model';
import { map, Observable } from 'rxjs';

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

  constructor(private router: Router, private _route: ActivatedRoute) {
    this.projects$.subscribe((projects) => {
      this.projects = projects
      console.log(this.projects)
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
        title: this.newTaskTitle,
        isAchieved: false,
        deadLine: new Date(),
        priority: 1,
        description: '',
        project: this.selectedProject,
      };

      this.selectedProject.tasks.push(newTask);
      this.newTaskTitle = '';
    }
  }

  deleteTask(task: Task): void {
    if (this.selectedProject) {
      const index = this.selectedProject.tasks.findIndex(t => t.id === task.id);
      if (index !== -1) {
        this.selectedProject.tasks.splice(index, 1);
      }
    }
  }

  updateTask(updatedTask: Task): void {
    if (this.selectedProject) {
      const index = this.selectedProject.tasks.findIndex(t => t.id === updatedTask.id);
      if (index !== -1) {
        this.selectedProject.tasks[index] = updatedTask;
      }
    }
  }
}

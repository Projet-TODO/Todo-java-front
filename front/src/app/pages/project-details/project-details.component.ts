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
    })

    // const user1: User = { id: 1n, firstname: 'Alice', email: 'alice@example.com', lastname: 'Doe', password: '123456' };
    // const user2: User = { id: 2n, firstname: 'Bob', email: 'bob@example.com', lastname: 'Dylan', password: '123456' };

    // this.projects = [
    //   {
    //     id: 1n,
    //     title: 'Projet 1',
    //     date: new Date('2024-01-01'),
    //     user: user1,
    //     tasks: [
    //       {
    //         id: 1n,
    //         title: 'Tâche 1',
    //         isAchieved: false,
    //         deadLine: new Date('2024-01-10'),
    //         priority: 1,
    //         description: 'Description de la tâche 1 du Projet 1',
    //       },
    //       {
    //         id: 2n,
    //         title: 'Tâche 2',
    //         isAchieved: true,
    //         deadLine: new Date('2024-01-15'),
    //         priority: 2,
    //         description: 'Description de la tâche 2 du Projet 1',
    //       }
    //     ]
    //   },
    //   {
    //     id: 2n,
    //     title: 'Projet 2',
    //     date: new Date('2024-02-01'),
    //     user: user2,
    //     tasks: [
    //       {
    //         id: 3n,
    //         title: 'Tâche 1',
    //         isAchieved: true,
    //         deadLine: new Date('2024-02-10'),
    //         priority: 1,
    //         description: 'Description de la tâche 1 du Projet 2',
    //       },
    //       {
    //         id: 4n,
    //         title: 'Tâche 2',
    //         isAchieved: false,
    //         deadLine: new Date('2024-02-20'),
    //         priority: 3,
    //         description: 'Description de la tâche 2 du Projet 2',
    //       },
    //       {
    //         id: 5n,
    //         title: 'Tâche 3',
    //         isAchieved: false,
    //         deadLine: new Date('2024-02-20'),
    //         priority: 3,
    //         description: 'Description de la tâche 3 du Projet 2',
    //       },
    //       {
    //         id: 6n,
    //         title: 'Tâche 4',
    //         isAchieved: false,
    //         deadLine: new Date('2024-02-20'),
    //         priority: 3,
    //         description: 'Description de la tâche 4 du Projet 2',
    //       },
    //       {
    //         id: 7n,
    //         title: 'Tâche 5',
    //         isAchieved: false,
    //         deadLine: new Date('2024-02-20'),
    //         priority: 3,
    //         description: 'Description de la tâche 5 du Projet 2',
    //       }
    //     ]
    //   }
    // ];
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
        id: BigInt(this.selectedProject.tasks.length + 1),
        title: this.newTaskTitle,
        isAchieved: false,
        deadLine: new Date(),
        priority: 1,
        description: ''
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

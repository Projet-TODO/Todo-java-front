import { Component, OnInit } from '@angular/core';
import { Project } from 'models/project.model';
import { Task } from 'models/task.model';
import { User } from 'models/user.model';

@Component({
  selector: 'epf-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss']
})
export class ProjectDetailsComponent implements OnInit {

  projects: Project[] = [];
  selectedProject: Project | null = null;

  constructor() {
    const user1: User = { id: 1n, firstname: 'Alice', email: 'alice@example.com', lastname: 'Doe', password: '123456' };
    const user2: User = { id: 2n, firstname: 'Bob', email: 'bob@example.com', lastname: 'Dylan', password: '123456' };

    this.projects = [
      {
        id: 1n,
        title: 'Projet 1',
        date: new Date('2024-01-01'),
        user: user1,
        tasks: [
          {
            id: 1n,
            title: 'Tâche 1',
            isAchieved: false,
            deadLine: new Date('2024-01-10'),
            priority: 1,
            description: 'Description de la tâche 1 du Projet 1',
          },
          {
            id: 2n,
            title: 'Tâche 2',
            isAchieved: true,
            deadLine: new Date('2024-01-15'),
            priority: 2,
            description: 'Description de la tâche 2 du Projet 1',
          }
        ]
      },
      {
        id: 2n,
        title: 'Projet 2',
        date: new Date('2024-02-01'),
        user: user2,
        tasks: [
          {
            id: 3n,
            title: 'Tâche 1',
            isAchieved: true,
            deadLine: new Date('2024-02-10'),
            priority: 1,
            description: 'Description de la tâche 1 du Projet 2',
          },
          {
            id: 4n,
            title: 'Tâche 2',
            isAchieved: false,
            deadLine: new Date('2024-02-20'),
            priority: 3,
            description: 'Description de la tâche 2 du Projet 2',
          }
        ]
      }
    ];
  }

  ngOnInit(): void {

  }


  addProject(): void {
    console.log('Ajouter un projet');
  }


  selectProject(project: Project): void {
    this.selectedProject = project;
  }


  viewProject(project: Project): void {
    this.selectedProject = project;
  }
}

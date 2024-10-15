import { Component, Input, OnInit } from '@angular/core';
import { Task } from '../../models/task.model';

@Component({
  selector: 'task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss']
})
export class TaskItemCompnent implements OnInit {
  @Input() task!: Task;

  constructor() {
  }

  ngOnInit(): void {
  }

  editTask(task: Task): void {
    console.log('Modifier la tâche:', task.title);
  }

  deleteTask(task: Task): void {
    console.log('Supprimer la tâche:', task.title);
  }

  toggleTaskStatus(task: Task): void {
    console.log('Changer le statut de la tâche:', task.title);
    task.isAchieved = !task.isAchieved;
  }

}

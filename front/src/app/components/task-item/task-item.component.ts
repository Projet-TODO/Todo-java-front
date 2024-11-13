import { Component, Input, OnInit } from '@angular/core';
import { Task } from '../../models/task.model';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss'],
  animations: [
    trigger('dropdownAnimation', [
      transition(':enter', [
        style({ height: 0, opacity: 0 }),
        animate('0.3s ease-out', style({ height: '*', opacity: 1 }))
      ]),
      transition(':leave', [
        animate('0.3s ease-in', style({ height: 0, opacity: 0 }))
      ])
    ])
  ]
})
export class TaskItemCompnent implements OnInit {
  @Input() task!: Task;
  isDropdownOpen = false;

  constructor() {
  }

  ngOnInit(): void {
  }

  toggleDropdown(): void {
    this.isDropdownOpen = !this.isDropdownOpen;
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

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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
  @Output() delete = new EventEmitter<Task>();
  @Output() update = new EventEmitter<Task>();

  isDropdownOpen = false;
  isEditing = false;
  editedTask: Task = { ...this.task };

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

  deleteTask(): void {
    this.delete.emit(this.task);
  }

  toggleTaskStatus(task: Task): void {
    task.isAchieved = !task.isAchieved;
  }

  startEdit(): void {
    this.isEditing = true;
    this.editedTask = { ...this.task };
    console.log('Modifier la tâche:', this.task);
  }

  saveEdit(): void {
    this.task = { ...this.editedTask };
    console.log('Sauvegarder la tâche:', this.editedTask);
    this.isEditing = false;
    this.update.emit(this.task);
  }

  cancelEdit(): void {
    this.isEditing = false;
    this.editedTask = { ...this.task };
  }

}

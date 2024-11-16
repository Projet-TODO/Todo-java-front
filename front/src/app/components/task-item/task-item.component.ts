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

  deleteTask(): void {
    this.delete.emit(this.task);
  }

  toggleTaskStatus(task: Task): void {
    task.achieved_task = !task.achieved_task;
  }

  startEdit(): void {
    this.isEditing = true;
    this.editedTask = { ...this.task };
  }

  saveEdit(): void {
    this.editedTask.priority_task = Number(this.editedTask.priority_task)
    this.task = { ...this.editedTask };
    console.log("task", this.task, "edited", this.editedTask);
    this.isEditing = false;
    this.update.emit(this.task);
  }

  cancelEdit(): void {
    this.isEditing = false;
    this.editedTask = { ...this.task };
  }
  getPriorityLabel(priority: number): string {
    console.log("priority", priority);
    switch ( priority) {
      case 1:
        return 'Haute';
      case 2:
        return 'Moyenne';
      case 3:
        return 'Basse';
      default:
        return '';
    }

  }
}

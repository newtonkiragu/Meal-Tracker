import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <div class="container">
    <h1>My Meal Tracker</h1>
    <p>A website that keeps track of your daily Dietary cnsumption</p>
    <h1>Edit Task</h1>
    <div *ngIf="selectedTask">
    <div>
    <label>Enter Task Description:</label>
    <input [(ngModel)]="selectedTask.description">
    </div>
    <div>
    <label>Enter Task ID:</label>
    <input [(ngModel)]="selectedTask.id">
    <button (click)="finishedEditing()">Done</button>
    </div>
    </div>
    <div *ngFor="let currentTask of tasks">
      <h3>{{ currentTask.description }}</h3>
      <button (click)="showDetails(currentTask)">Edit</button>
    </div>
  </div>
  `
})

export class AppComponent {
  public tasks: Task[] = [
      new Task("Create To-Do List app.", 0),
      new Task("Learn Kung Fu.", 1),
      new Task("Rewatch all the Lord of the Rings movies.", 2),
      new Task("Do the laundry.", 3)
  ];
  selectedTask: Task = null;
  showDetails(clickedTask: Task) {
    this.selectedTask = clickedTask;
  }
  finishedEditing() {
    this.selectedTask = null;
  }
}

export class Task {
  public done: boolean = false;
  constructor(public description: string, public id: number) {   }
}

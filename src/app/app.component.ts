import { Component } from '@angular/core';
import { Task } from './models/task.models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  masterTaskList: Task[] =[
    new Task("Wash car", "1"),
    new Task("Cook dinner", "3"),
    new Task("Watch movie", "2")
  ];
  selectedTask: Task = null;

  editTask(clickedTask){
    this.selectedTask =  clickedTask;
  }

  finishedEditing(){
    this.selectedTask = null;
  }

  addTask(newTask: Task) {
    this.masterTaskList.push(newTask);
  }

}

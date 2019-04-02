import { Component } from '@angular/core';
import { Task } from './models/task.models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userName: string = "User";
  tasks: Task[] =[new Task("Wash car", 1), new Task("Cook dinner", 3), new Task("Watch movie", 2)];
  selectedTask: Task = null;

  editTask(clickedTask){
    this.selectedTask =  clickedTask;
    console.log(this.tasks);
  }

  finishedEditing(){
    this.selectedTask = null;
  }

  priorityColor(currentTask){
    if(currentTask.priority == 3){
      return "bg-danger";
    } else if(currentTask.priority == 2){
      return "bg-warning";
    }else{
      return "bg-info";
    }
  }

}

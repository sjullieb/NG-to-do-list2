import { Component } from '@angular/core';
import { Task } from './models/task.models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tasks: Task[] =[new Task("Wash car", "Medium"), new Task("Cook dinner", "Low"), new Task("Watch movie", "High")];


}

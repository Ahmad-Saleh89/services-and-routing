import { Component, OnInit } from '@angular/core';
import { InteractionService } from '../interaction.service';

@Component({
  selector: 'app-student-1',
  templateUrl: './student-1.component.html',
  styleUrls: ['./student-1.component.css']
})
export class Student1Component implements OnInit {

  message = '';

  constructor(private interactionService: InteractionService) { }

  ngOnInit() {
    this.interactionService.teacherMsg$.subscribe(msg => this.message = msg);
  }

  greetTeacher() {
    this.interactionService.sendStudentMsg("You are a great teacher!");
  }

}
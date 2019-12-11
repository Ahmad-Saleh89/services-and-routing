import { Component, OnInit } from '@angular/core';
import { InteractionService } from '../interaction.service';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {

  greeting = '';

  constructor(private interactionService: InteractionService) { }

  ngOnInit() {
    this.interactionService.studentMsg$.subscribe(msg => this.greeting = msg);
  }

  greetStudent(){
    this.interactionService.sendTeacherMsg('Good Morning Students');
  }

  appriciateStudent() {
    this.interactionService.sendTeacherMsg('Well Done!');
  }

}
import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';

@Injectable()
export class InteractionService {

  private teacherMsgSource = new Subject<string>();
  // Expose the subject as an observable
  teacherMsg$ = this.teacherMsgSource.asObservable();

  // Another way to do it using BehaviorSubject
  private studentMsgSource = new BehaviorSubject<string>("Thank you teacher!");
  studentMsg$ = this.studentMsgSource.asObservable();

  constructor() { }

  sendTeacherMsg(message: string) {
    this.teacherMsgSource.next(message);
  }

  sendStudentMsg(message: string) {
    this.studentMsgSource.next(message);
  }
}
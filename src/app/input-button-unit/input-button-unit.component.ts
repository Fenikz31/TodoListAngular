import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-button-unit',
  template: `
  <input class="todo-input" #inputelementRef
         [value]="title"
         (keyup.enter)="submitValue($event.target.value)"
         placeholder="Set your next task....!">
  <button class="btn" (click)="submitValue(inputelementRef.value)">Save</button>
  `,
  styleUrls: ['./input-button-unit.component.css']
})
export class InputButtonUnitComponent implements OnInit {

  @Output() submit: EventEmitter<string> = new EventEmitter();
  title = ``;

  constructor() {
   }

  ngOnInit() {
  }

  submitValue(newTitle: string) {
    this.submit.emit(newTitle);
  }

}

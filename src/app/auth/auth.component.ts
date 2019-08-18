import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-auth',
  template: `
    <div class="todo-auth">
    
      <button
        *ngIf="!authService.isLoggedIn"
        (click)="authService.login()"
        class="btn">Log In</button>
      <ng-template [ngIf]="authService.isLoggedIn">
        <img [src]="authService.userProfile?.picture" />{{authService.userProfile?.name}}
        <button
          (click)="authService.logout()"
          class="btn btn-red">Log Out</button>
      </ng-template>
    </div>
  `,
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  constructor(public authService: AuthService) { }

  ngOnInit() {
  }

}

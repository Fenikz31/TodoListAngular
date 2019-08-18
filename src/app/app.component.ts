import { Component } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  template:
    `<span>
      <h1 class="app-title">
        Welcome to {{title}}!
      </h1>

      <app-auth></app-auth>
    </span>
     <app-list-manager></app-list-manager>
    `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'To Do List';
  constructor(private authService: AuthService) {
    this.authService.handleLoginCallback();
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <div class="navbar is-dark"> 
      <div class="navbar-brand">
        <a class="navbar-item">
          <img src="assets/img/game-console.png" alt="" class="custom">
        </a>
      </div>

      <div class="navbar-menu">
        <div class="navbar-start">
          <a class="navbar-item" routerLink="/">HOME</a>
          <a class="navbar-item" routerLink="/contact">CONTACT</a>
          <a class="navbar-item" routerLink="/users">USER</a>
        </div>
      </div>
    </div>
  `,
  styles: [
  ]
})
export class HeaderComponent {

}

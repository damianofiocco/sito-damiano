import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  Ciao, sono il tuo nuovo sito! 🌍
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  title = 'sito-damiano';
}

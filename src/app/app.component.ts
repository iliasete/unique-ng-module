import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <ul>
      <li><a routerLink="/">Home</a></li>
      <li><a routerLink="/pageA">PageA</a></li>
      <li><a routerLink="/pageB">PageB</a></li>
      <li><a routerLink="/pageC">PageC</a></li>
    </ul>
    
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  title = 'unique-ng-module';
}

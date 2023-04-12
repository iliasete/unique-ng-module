import { Component } from '@angular/core';

@Component({
  selector: 'app-page-a',
  template: `
    <p>
      page-a works!
    </p>

    <app-component1></app-component1>

    <app-component2></app-component2>
    
    <app-component3></app-component3>
  `,
  styles: [
  ]
})
export class PageAComponent {

}

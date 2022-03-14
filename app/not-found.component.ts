import { Component } from "@angular/core";

@Component({
  selector: 'not-fund',
  template: `
    <div>
      NOT FOUND, <a routerLink="/">go home?</a>
    </div>
  `
})

export class NotFoundComponent {}
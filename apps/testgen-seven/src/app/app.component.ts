import { Component } from '@angular/core';

@Component({
  selector: 'testgen-seven-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  sideNavOpen = false;
  title = 'testgen-seven';

  sideNavToggle(): void {
    this.sideNavOpen = !this.sideNavOpen;
  }
}

import {Component} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  public isOnHome;
  public docked = 'docked';

  constructor(
    private router: Router
  ) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.isOnHome = event.url === '/';
      }
    });
    window.addEventListener('scroll', this.scrollEvent, true);

  }

  scrollEvent = (event: any): void => {
    if (document.documentElement.scrollTop < 1) {
      this.docked = 'docked';
    } else {
      this.docked = 'not-docked';
    }
  }
}

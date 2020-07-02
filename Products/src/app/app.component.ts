import { Component, HostListener } from '@angular/core';
import { fadeAnimation } from './animations';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations : [
    fadeAnimation
  ]
})
export class AppComponent {
  title = 'Products';

  ngOnInit() {

  }

  ngOnChange() {
  }

  @HostListener('window:scroll', ['$event'])
  toggleNavbarScroll($event): void {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      document.querySelector("#mainNav").classList.add('navbar-scrolled');
    } else {
      document.querySelector("#mainNav").classList.remove('navbar-scrolled');
    }
  }




}

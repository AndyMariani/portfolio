import { HostListener } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  // Event parallax
  @HostListener('window:scroll', ['$event']) // for window scroll events
  onScroll(event: any): void {
    let fond = document.getElementById('fond');
    let nuage1 = document.getElementById('n1');
    let nuage2 = document.getElementById('n2');
    let nuage3 = document.getElementById('n3');
    let fusee = document.getElementById('fusee');

    window.addEventListener('scroll', function () {
      const value = window.scrollY;
      fond.style.top = value * 0.5 + 'px';
      nuage1.style.bottom = value * 0.7 + 'px';
      nuage2.style.top = value * 0.7 + 'px';
      nuage3.style.left = value * 0.8 + 'px';
      fusee.style.top = -value * 0.2 + 'px';
      fusee.style.left = -value * 0.2 + 'px';
    });
  }

  @HostListener('window:mousemove', ['$event'])
  mouseMouve(event: any): void {
    window.addEventListener('mousemove', (event)=> {

      let lune = document.getElementById('lune_full');
      let etoile = document.getElementById('etoile_full');

      const speed_lune = +lune.getAttribute('data-speed');
      const speed_etoile = +etoile.getAttribute('data-speed');

      const x_lune = (window.innerWidth - event.pageX*speed_lune)/100;
      const y_lune = (window.innerWidth - event.pageY*speed_lune)/100;

      const x_etoile = (window.innerWidth - event.pageX*speed_etoile)/100;
      const y_etoile = (window.innerWidth - event.pageY*speed_etoile)/100;

      lune.style.transform = `translateX(${x_lune}px) translateY(${y_lune}px)`;
      etoile.style.transform = `translateX(${x_etoile}px) translateY(${y_etoile}px)`;
    });
  }
}

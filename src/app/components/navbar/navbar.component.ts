import { GoaulaService } from './../../services/goaula.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  constructor(public goaulaService: GoaulaService) { }

  ngOnInit() {
  }

}

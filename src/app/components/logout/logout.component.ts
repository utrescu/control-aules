import { Component, OnInit } from '@angular/core';
import { GoaulaService } from '../../services/goaula.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html'
})
export class LogoutComponent implements OnInit {

  constructor(private goaulaService: GoaulaService) { }

  ngOnInit() {
    this.goaulaService.logout();
  }

}

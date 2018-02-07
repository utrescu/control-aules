import { Component, OnInit } from '@angular/core';
import { GoaulaService } from '../../services/goaula.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-llista',
  templateUrl: './llista.component.html'
})
export class LlistaComponent implements OnInit {

  aules: string[];
  message: string;

  constructor(private goaulaService: GoaulaService,
    private router: Router) { }

  ngOnInit() {
    this.goaulaService.getClasses().subscribe(
      response => {
        console.log(response['aules']);
        this.aules = response['aules'];
      },
      error => {
        console.log(error);
        this.message = error.message;
      }
    );
  }

  veureClasse(idx: number) {
    this.router.navigate(['/aules', idx ]);
  }

}

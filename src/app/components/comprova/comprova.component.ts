import { Component, OnInit } from '@angular/core';
import { GoaulaService } from '../../services/goaula.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-comprova',
  templateUrl: './comprova.component.html'
})
export class ComprovaComponent implements OnInit {

  classe: string;
  ordinadors: string[];
  message: string;
  loading = true;

  constructor(private goaulaService: GoaulaService,
    private _activatedRoute: ActivatedRoute) {
    _activatedRoute.params.subscribe(params => {
      this.classe = params['id'];
    });
  }

  ngOnInit() {
    this.goaulaService.getClasse(this.classe).subscribe(
      response => {
        console.log(response);
        this.loading = false;
        this.ordinadors = response['EnMarxa'];
      },
      error => {
        console.log('FALLADA', error.message);
        this.message = error.message;
      }
    );
  }

}

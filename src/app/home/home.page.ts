import { Component } from '@angular/core';
import { ExamenService } from '../examen.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {
  quote: any = [];

  constructor(private examenService: ExamenService, private router: Router) { }

  ngOnInit() {
    this.examenService.getQuote().subscribe((data) => {
      this.quote = data;
    });

  }

}

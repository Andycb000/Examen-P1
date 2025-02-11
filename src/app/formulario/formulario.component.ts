import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { IonContent } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss'],
  imports: [CommonModule, NgFor]
})
export class FormularioComponent {

  items: { name: string, date: string, productor: string, studio: string, mainc: string }[] = [];

  constructor(public navCtrl: NavController) { }

  addItem(name: string, date: string, productor: string, studio: string, mainc: string): void {
    if (name.trim() && date.trim() && productor.trim() && studio.trim() && mainc.trim()) {
      this.items.push({
        name: name.trim(),
        date: date.trim(),
        productor: productor.trim(),
        studio: studio.trim(),
        mainc: mainc.trim()
      });
    } else {
      alert('Todas las casillas deben de ser llenadas');
    }
  }
}
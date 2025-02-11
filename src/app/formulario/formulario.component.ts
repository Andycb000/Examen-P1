import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { IonContent } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss'],
})
export class FormularioComponent {

  items: { name: string, date: string, productor: string, studio: string, mainCharacter: string }[] = [];

  constructor(public navCtrl: NavController) { }

  addItem(name: string, date: string, productor: string, studio: string, mainCharacter: string): void {
    if (name.trim() && date.trim() && productor.trim() && studio.trim() && mainCharacter.trim()) {
      this.items.push({
        name: name.trim(),
        date: date.trim(),
        productor: productor.trim(),
        studio: studio.trim(),
        mainCharacter: mainCharacter.trim()
      });
    } else {
      alert('Todas las casillas deben de ser llenadas');
    }
  }
}
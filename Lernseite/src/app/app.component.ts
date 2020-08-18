import { Component } from '@angular/core';
import { Time } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'RuBLernseite';
  differenz: string;
  klausur = new Date('September 10, 2020 12:0:00');
  constructor() {
    this.zeitBerechnen();
  }
  zeitBerechnen() {
    const jetzt = new Date().getTime();
    let diff = Math.round((this.klausur.getTime() - jetzt) / 1000);
    const d = Math.floor(diff / (24 * 60 * 60));
    diff = diff - d * 24 * 60 * 60;
    const h = Math.floor(diff / (60 * 60));
    diff = diff - h * 60 * 60;
    const m = Math.floor(diff / 60);
    diff = diff - m * 60;
    const s = diff;
    this.differenz =
      d + ' Tage, ' + h + ' Stunden, ' + m + ' Minuten, ' + s + ' Sekunden';
  }
}

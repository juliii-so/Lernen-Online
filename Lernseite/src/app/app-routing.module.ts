import { SpickzettelComponent } from './auswahl/spickzettel/spickzettel.component';
import { VonNeumannComponent } from './inhalte/von-neumann/von-neumann.component';

import { SynchronisationComponent } from './inhalte/synchronisation/synchronisation.component';
import { ProzesseComponent } from './inhalte/prozesse/prozesse.component';
import { SpeicherComponent } from './inhalte/speicher/speicher.component';
import { DateisystemeComponent } from './inhalte/dateisysteme/dateisysteme.component';
import { SchaltungssyntheseComponent } from './inhalte/schaltungssynthese/schaltungssynthese.component';
import { CodierungComponent } from './inhalte/codierung/codierung.component';
import { LinuxComponent } from './inhalte/linux/linux.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  {
    path: 'Linux',
    component: LinuxComponent,
  },
  {
    path: 'Codierung',
    component: CodierungComponent,
  },
  {
    path: 'Schaltungssynthese',
    component: SchaltungssyntheseComponent,
  },
  {
    path: 'VonNeumann',
    component: VonNeumannComponent,
  },
  {
    path: 'Dateisysteme',
    component: DateisystemeComponent,
  },
  {
    path: 'Speicher',
    component: SpeicherComponent,
  },
  {
    path: 'Prozesse',
    component: ProzesseComponent,
  },
  {
    path: 'Synchronisation',
    component: SynchronisationComponent,
  },
  {
    path: 'Spickzettel',
    component: SpickzettelComponent,
  },
];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

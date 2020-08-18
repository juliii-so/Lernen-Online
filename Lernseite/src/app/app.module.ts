import { SpickzettelComponent } from './auswahl/spickzettel/spickzettel.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LinuxComponent } from './inhalte/linux/linux.component';
import { CodierungComponent } from './inhalte/codierung/codierung.component';
import { SchaltungssyntheseComponent } from './inhalte/schaltungssynthese/schaltungssynthese.component';
import { DateisystemeComponent } from './inhalte/dateisysteme/dateisysteme.component';
import { SpeicherComponent } from './inhalte/speicher/speicher.component';
import { ProzesseComponent } from './inhalte/prozesse/prozesse.component';
import { SynchronisationComponent } from './inhalte/synchronisation/synchronisation.component';
import { VonNeumannComponent } from './inhalte/von-neumann/von-neumann.component';

import { AuswahlComponent } from './auswahl/auswahl.component';

@NgModule({
  declarations: [
    AppComponent,
    LinuxComponent,
    CodierungComponent,
    SchaltungssyntheseComponent,
    DateisystemeComponent,
    SpeicherComponent,
    ProzesseComponent,
    SynchronisationComponent,
    VonNeumannComponent,
    SpickzettelComponent,
    AuswahlComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

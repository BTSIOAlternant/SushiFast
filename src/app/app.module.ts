import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { PlateauxComponent } from './component/plateaux/plateaux.component';
import { PanierComponent } from './component/panier/panier.component';
import { CommandesComponent } from './component/commandes/commandes.component';
import { RgpdComponent } from './component/rgpd/rgpd.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PlateauxComponent,
    PanierComponent,
    CommandesComponent,
    RgpdComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

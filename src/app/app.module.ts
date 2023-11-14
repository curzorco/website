import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
// Transloco
import { TranslocoRootModule } from './transloco-root.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WebsiteModule } from './website/website.module';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    TranslocoRootModule,
    AppRoutingModule,
    WebsiteModule // Se importa el Modulo para que archivos de Rutas funcionen
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

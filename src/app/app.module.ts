import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { VentasComponent } from './ventas/ventas.component';
import { PagosComponent } from './pagos/pagos.component';

@NgModule({
  declarations: [
    AppComponent,VentasComponent,PagosComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

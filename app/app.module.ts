import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PassengerDashboardModule } from './passenger-dashboard/passenger-dashboard.module';

import { AppComponent } from './app.component';

@NgModule ({
  declarations: [
    AppComponent //Registrar nuestro componente en el modulo
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    PassengerDashboardModule
  ],
  bootstrap: [AppComponent]
})

export class AppModule {}
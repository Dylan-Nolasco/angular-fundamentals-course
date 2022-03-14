import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PassengerDashboardModule } from './passenger-dashboard/passenger-dashboard.module';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import { NotFoundComponent } from './not-found.component';

const routes: Routes = [
  // { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: '', redirectTo: 'passengers', pathMatch: 'full'},
  { path: '**', component: NotFoundComponent } //for any route that doesn't exist in the app we're gonna use this component
]

@NgModule ({
  declarations: [
    AppComponent, //Registrar nuestro componente en el modulo
    HomeComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    PassengerDashboardModule,
    RouterModule.forRoot(routes, { useHash: true  })
  ],
  bootstrap: [AppComponent]
})

export class AppModule {}
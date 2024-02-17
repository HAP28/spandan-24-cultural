import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgParticlesModule } from "ng-particles";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { NavbarComponent } from './navbar/navbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { BodyComponent } from './body/body.component';
import { EventsComponent } from './events/events.component';
import { ContactComponent } from './contact/contact.component';
import { GalleryComponent } from './gallery/gallery.component';
// import { SportsComponent } from './sports/sports.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

@NgModule({
  declarations: [
    AppComponent, NavbarComponent, BodyComponent, EventsComponent, ContactComponent, GalleryComponent, PagenotfoundComponent
  ],
  imports: [
    BrowserModule, FlexLayoutModule, NgParticlesModule,
    AppRoutingModule, MatToolbarModule, MatButtonModule, MatIconModule, MatSidenavModule, MatCardModule, MatChipsModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyComponent } from './body/body.component';
import { ContactComponent } from './contact/contact.component';
import { GalleryComponent } from './gallery/gallery.component';
import { EventsComponent } from './events/events.component';
// import { SportsComponent } from './sports/sports.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const routes: Routes = [
  { path: '', component: BodyComponent }, { path: 'contact', component: ContactComponent }, { path: 'gallery', component: GalleryComponent }, { path: 'events', component: EventsComponent }, { path: '**', component: PagenotfoundComponent}

];
// { path: 'sports', component: SportsComponent },
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

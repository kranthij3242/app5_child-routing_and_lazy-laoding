import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';
import { ContactoneComponent } from './contactone/contactone.component';
import { ContacttwoComponent } from './contacttwo/contacttwo.component';
import { ObjectnotfoundComponent } from './objectnotfound/objectnotfound.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ServicesComponent,
    ContactComponent,
    ContactoneComponent,
    ContacttwoComponent,
    ObjectnotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

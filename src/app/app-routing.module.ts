import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LazyservicesModule} from './lazyservices.module';

import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {ServicesComponent} from './services/services.component';
import {ContactComponent} from './contact/contact.component';
import {ContactoneComponent} from './contactone/contactone.component';
import {ContacttwoComponent} from './contacttwo/contacttwo.component';
import {ObjectnotfoundComponent} from './objectnotfound/objectnotfound.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'my-home',component:HomeComponent},
  {path:'about-me',component:AboutComponent},
  {path:'my-services',component:ServicesComponent},
  {path:'contact-me',component:ContactComponent,
  children:[
    {path:'contact-one',component:ContactoneComponent},
    {path:'contact-two',component:ContacttwoComponent},
  ]
},
{path:'lazy-services-mod',loadChildren:'./lazyservices.module#LazyservicesModule'},
{path:'**',component:ObjectnotfoundComponent}//wild card entry
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

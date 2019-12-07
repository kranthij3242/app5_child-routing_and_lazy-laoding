import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { LazyserviceparentComponent } from './lazyserviceparent/lazyserviceparent.component';
import { LazyservicechildComponent } from './lazyservicechild/lazyservicechild.component';

const routes:Routes=[
{path:'lazy-service-parent',component:LazyserviceparentComponent}
]

@NgModule({
  declarations: [LazyserviceparentComponent, LazyservicechildComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class LazyservicesModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CamprevPage } from './camprev.page';

const routes: Routes = [
  {
    path: '',
    component: CamprevPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CamprevPageRoutingModule {}

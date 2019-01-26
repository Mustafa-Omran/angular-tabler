import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RtlModeComponent } from './rtl-mode.component';

const routes: Routes = [
  {
    path: '', component: RtlModeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RtlModeRoutingModule { }

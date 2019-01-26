import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RtlModeRoutingModule } from './rtl-mode-routing.module';
import { RtlModeComponent } from './rtl-mode.component';

@NgModule({
  declarations: [RtlModeComponent],
  imports: [
    CommonModule,
    RtlModeRoutingModule
  ]
})
export class RtlModeModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './../components/layouts/header/header.component';
import { FooterComponent } from './../components/layouts/footer/footer.component';
import { NavBarComponent } from './../components/layouts/nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    NavBarComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    NavBarComponent,
  ]
})
export class SharedModule { }

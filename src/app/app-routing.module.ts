import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { ContainerComponent } from './components/layouts/container/container.component';

const routes: Routes = [
  {
    path: '',
    component: ContainerComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
      },
      {
        path:'forms',
        loadChildren:'./components/pages/forms/forms.module#FormsModule'
      },
      {
        path:'buttons',
        loadChildren:'./components/pages/buttons/buttons.module#ButtonsModule'
      },
      {
        path:'cards',
        loadChildren:'./components/pages/cards/cards.module#CardsModule'
      },
      {
        path:'colors',
        loadChildren:'./components/pages/colors/colors.module#ColorsModule'
      },
      {
        path:'gallery',
        loadChildren:'./components/pages/gallery/gallery.module#GalleryModule'
      },
      {
        path:'login-register',
        loadChildren:'./components/pages/login-register/login-register.module#LoginRegisterModule'
      },
      {
        path:'rtl',
        loadChildren:'./components/pages/rtl-mode/rtl-mode.module#RtlModeModule'
      },
      {
        path:'tags',
        loadChildren:'./components/pages/tags/tags.module#TagsModule'
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface Path {
  title: string,
  path: string,
  children?: any,
  icon: string
}

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  paths: Path[] = [
    {
      title: 'Forms',
      path: 'forms',
      icon: 'fa fa-crop',
      children: []
    },
    {
      title: 'Pages',
      path: 'home',
      icon: 'fa fa-apple',
      children: [
        {
          title: 'Tags',
          path: 'tags',
        },
        {
          title: 'Buttons',
          path: 'buttons',
        },
        {
          title: 'Cards',
          path: 'cards',
        },
        {
          title: 'Colors',
          path: 'colors',
        },
      ]
    },
    {
      title: 'RTL Mode',
      path: 'rtl',
      icon: 'fa fa-file',
      children: []
    },
    {
      title: 'Login / Register',
      path: 'login-register',
      icon: 'fa fa-bell',
      children: []
    },
    {
      title: 'Gallery',
      path: 'gallery',
      icon: 'fa fa-list',
      children: []
    },
  ];
  constructor(private router: Router) { }

  ngOnInit() {
  }

  /**
   * nav to path
   * 
   * 
   * @param path 
   */
  nav(path: string) {
    this.router.navigate(['' + path + '']);
  }
}

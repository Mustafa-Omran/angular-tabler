import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface Path {
  title: string,
  path: string,
  children?: any
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
      children: []
    },
    {
      title: 'Pages',
      path: '',
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
      children: []
    },
    {
      title: 'Login / Register',
      path: 'login-register',
      children: []
    },
    {
      title: 'Gallery',
      path: 'gallery',
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

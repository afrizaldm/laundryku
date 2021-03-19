import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(
    public router: Router,
  ) {}

  akun() {
    this.router.navigateByUrl('akun')
  }
  
  setting() {
    this.router.navigateByUrl('akun')
  }
  
  about() {
    this.router.navigateByUrl('about')
  }

  logout() {
    this.router.navigateByUrl('login')
  }

}

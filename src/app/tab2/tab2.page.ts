import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  status: number = 1

  items: Array<any> = [
    {date: '17 Maret 2021', nota: 'N00123', total: '3 KG', address: 'Jl. Thamrin 35 A'},
    {date: '17 Maret 2021', nota: 'N00123', total: '3 KG', address: 'Jl. Thamrin 35 A'},
    {date: '17 Maret 2021', nota: 'N00123', total: '3 KG', address: 'Jl. Thamrin 35 A'},
  ]

  constructor() {}

  segmentChanged(ev: any) {}

}

import { Component, OnInit } from '@angular/core';

@Component({
// Element selector
//  selector: 'app-servers',
// Attribute selector     
//  selector: '[app-servers]',
// CSS selector    
  selector: '.app-servers',    
  template: `
        <app-server></app-server>
        <app-server></app-server>`,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

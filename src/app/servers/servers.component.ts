import { Component, OnInit } from '@angular/core';

@Component({
// Element selector
//  selector: 'app-servers',
// Attribute selector     
//  selector: '[app-servers]',
// CSS selector    
  selector: '.app-servers',    
//  template: `
//        <app-server></app-server>
//        <app-server></app-server>`,
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
    
  allowNewServer = false;
  serverCreationStatus = 'No server was created !' 
  counter = 0;    
  serverName = "";  

  constructor() {
    // function(){}  === () => {}  
    setTimeout(() => {
        this.allowNewServer = true;
    },2000)    
  }

  ngOnInit() {
  }
    
  onCreateServer(){
    this.serverCreationStatus = 'Server was created';    
  }  

  onUpdateServerName(event: Event){
    this.counter++;
    this.serverName = (<HTMLInputElement>event.target).value;      
// Same result 
//    this.serverName = event.target.value;      
    console.log(event);  
  }  

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  //templateUrl: './servers.component.html',
  template:`
    <app-server></app-server>
    <app-server></app-server>`, 
    // must have a template at all times
    // '...' for single line html code
    // `...` for multi lines html code
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

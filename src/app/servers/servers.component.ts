import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-servers',
    //selector: '[app-servers]', 
    // .... select by attribute
    
    //selector: '.app-servers', 
    // .... select by class
    
  templateUrl: './servers.component.html',
  /*template:`
    <p>
      servers works!
    </p>
    <app-server></app-server>
    <app-server></app-server>`, */
    // must have a template at all times
    // '...' for single line html code
    // `...` for multi lines html code
  //styleUrls: ['./servers.component.css']
    styles:[`
        p {
            color: green;
        }
    `]
})
export class ServersComponent implements OnInit {
    allowNewServer = false;

  constructor() {
    setTimeout(() => {
        this.allowNewServer = true;
    }, 2000);
      //ES6 arrow function: () => {}
      // same as function (){}
  }

  ngOnInit() {
  }

}

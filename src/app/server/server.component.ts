/* a componetent is just a typescript class 
 so Angular is able to instantiat it 
 and building objects aupon the class blue print */

// to tell Angular that the class is a component
// we will use a class decorator  

import { Component } from '@angular/core';
// this import to import the component decorator
// import { files } from 'backage'
// core is angular backage

// decorator always defined by @ sing in the begining
@Component({
    // first we need to pass js objects
    // to configure it and the class metadata
    
    selector: 'app-server',
    /* (string) the html tag which will be used 
        in other components templates
        using app- to make sure it won't override
        an original html tag'*/
    
    templateUrl: './server.component.html'
    /* refer to an external template file
        using a relative path */
})
 

 export class ServerComponent {
     //these data could take them for ex by http request
     /*serverId = 10;
     serverStatus = 'offline';*/
     
     // can assign the type too
     serverId: number = 10;
     serverStatus: string = 'offline';
     
     getserverStatus(){
         return this.serverStatus;
     }
 }
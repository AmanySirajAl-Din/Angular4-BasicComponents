 import { BrowserModule } from '@angular/platform-browser';

// import NgModule decorator
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

// has to import the ServerComponent before addin it
import { ServerComponent } from './server/server.component';

// this is the NgModule decorator
@NgModule({
  declarations: [
    AppComponent,
    ServerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule      
  ],
  providers: [],
  bootstrap: [AppComponent]
    /* which component  this tells Angular which component 
    should be aware of at the point of time 
    that the whole app starts */
})
export class AppModule { }

    
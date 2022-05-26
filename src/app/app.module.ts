import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { MatCardModule } from '@angular/material/card';
import { GenieButtonComponent } from './genie-button/genie-button.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports:      [ BrowserModule, FormsModule, MatCardModule, MatButtonModule ],
  declarations: [ AppComponent, HelloComponent, GenieButtonComponent ],
  bootstrap:    [ AppComponent ],
  exports: [ GenieButtonComponent ]
})
export class AppModule { }

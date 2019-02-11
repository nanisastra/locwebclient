import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatToolbarModule, MatFormFieldModule,  MatInputModule, MatButtonModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents
  ],
  imports: [
    FormsModule,
    BrowserModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

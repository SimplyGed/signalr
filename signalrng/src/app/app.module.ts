import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MatProgressBarModule, MatButtonModule } from '@angular/material';

import { SignalRService } from './services/signalr.service';
import { AppRoutes } from './app.routing';
import { AppComponent } from './app.component';
import { ProgressComponent } from './progress/progress.component';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    ProgressComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutes,
    MatProgressBarModule,
    MatButtonModule
  ],
  providers: [
    SignalRService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Component, OnInit, NgZone } from '@angular/core';
import { SignalRService } from '../services/signalr.service';
import { Observable } from 'rxjs/Observable';
import { Http, Headers, RequestOptionsArgs } from '@angular/http';
import { environment } from '../../environments/environment';

import { Progress } from './progress';

@Component({
  selector: 'sngr-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})
export class ProgressComponent implements OnInit {
  public currentProgress: Progress;

  private connectionId: string;

  constructor(private signalr: SignalRService, private http: Http) {
    this.currentProgress = new Progress("Awaiting data...", 0);
  }

  ngOnInit() {
    this.subscribeToEvents();
  }

  public sendMessage(): void {
    this.currentProgress = new Progress("Awaiting data...", -1);
    
    if(this.signalr.connectionExists === true) {
      this.http.post(environment.server + 'api/values?clientId=' + this.connectionId, {})
        .subscribe(
        (resp: any) => console.log('done'),
        (error: any) => console.log(error)
        );
    }
  }

  private subscribeToEvents(): void {
    this.signalr.connect();

    this.signalr.connectionEstablished.subscribe((id: string) => {
      this.connectionId = id;

      this.signalr.messageReceived.subscribe((m: Progress) => {
        this.currentProgress = m;
      })
    });
  }
}

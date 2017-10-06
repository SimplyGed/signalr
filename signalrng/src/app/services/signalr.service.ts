import { Injectable, EventEmitter } from '@angular/core';
import { HubConnection } from '@aspnet/signalr-client';
import { environment } from '../../environments/environment';

import { Progress } from '../progress/progress';

@Injectable()
export class SignalRService {
    private connection: HubConnection;

    public messageReceived = new EventEmitter<Progress>();
    public connectionEstablished = new EventEmitter<string>();
    public connectionExists = false;

    constructor() {
    }

    public connect(): void {
        this.connection = new HubConnection(environment.server + 'progress');

        this.registerOnServerEvents();
        this.startConnection();
    }

    public disconnect(): void {
        this.stopConnection();
    }

    public register(): Promise<any> {
        return this.connection.invoke('register');
    }

    private stopConnection(): void {
        this.connection.stop();
    }

    private startConnection(): void {
        this.connection.start()
            .then(() => {
                console.log('connection started');
                this.connectionExists = true;

                this.register().then((connectionId:string) => {
                    this.connectionEstablished.emit(connectionId);
                });

            })
            .catch((err: any) => {
                console.log('Error while starting connection');
                console.log(err);
            });
    }

    private registerOnServerEvents(): void {
        this.connection.on('sendProgress', (data: Progress) => {
            console.log('data received');
            this.messageReceived.emit(data);
        });
    }
}
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName = 'Server_1';
  serverCreated = false;

  constructor() {

    setTimeout(() => {
      this.allowNewServer = true;
      }, 2000);

  }

  ngOnInit(): void {
  }

  onServerCreate(): void {
    this.serverCreationStatus = 'Server ' + this.serverName + ' created!';
    this.serverCreated = true;
  }

  onUpdateServerName(event: Event): void {

    this.serverName = (event.target as HTMLInputElement).value;
    this.allowNewServer = true;

  }
}

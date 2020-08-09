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

  constructor() {

    setTimeout(() => {
      this.allowNewServer = true;
      }, 20000);

  }

  ngOnInit(): void {
  }

  onServerCreate(): void {
    this.serverCreationStatus = 'Server was created!';
  }

  onUpdateServerName(event: Event): void {

    this.serverName = (event.target as HTMLInputElement).value;
  }
}

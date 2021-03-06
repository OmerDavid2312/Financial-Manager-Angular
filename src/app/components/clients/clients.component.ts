import { Client } from './../../models/Client';
import { ClientService } from './../../services/client.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
  clients : Client[];
  totalOwed:number;
  constructor(private clientService : ClientService) { }

  ngOnInit() {
    //get clients Data Obj and loop with with subscribe
    this.clientService.getClients().subscribe(clients=>{
      this.clients = clients;
      this.getTotalOwed();
      
    });
    
    
  }

  getTotalOwed(){
    this.totalOwed =this.clients.reduce((total,client)=>{
     return total +client.balance;
    },0);
    

  }
    

}

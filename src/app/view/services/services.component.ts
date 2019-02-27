import { Component, OnInit } from '@angular/core';
import { SERVICES } from 'src/app/models/service-list';
import { Service } from 'src/app/models/service';


@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styles: [`
  #serviceNav>.btn{
    padding: 2rem;
    margin: 1rem 1rem 0 0rem;
    font-size:2rem;
  }`]
})
export class ServicesComponent {

  services = SERVICES;
  selectedService: Service;

  constructor() { }
  
  onSelect(service: Service): void {
    this.selectedService = service;
    
  }
}

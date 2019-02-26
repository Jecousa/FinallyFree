import { Component, OnInit } from '@angular/core';
import { SERVICES } from 'src/app/models/service-list';
import { Service } from 'src/app/models/service';


@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styles: []
})
export class ServicesComponent {

  services = SERVICES;
  selectedService: Service;

  constructor() { }
  
  onSelect(service: Service): void {
    this.selectedService = service;
    
  }
}

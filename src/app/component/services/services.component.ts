import { Component, OnInit, Input } from '@angular/core';
import { Service } from 'src/app/models/service';

@Component({
  selector: 'app-services-detail',
  templateUrl: './services.component.html',
  styles: []
})
export class ServicesDetailComponent implements OnInit {

  @Input() service: Service;

  constructor() { }

  ngOnInit() {
  }

}

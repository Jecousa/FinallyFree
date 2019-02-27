import { Component, OnInit, Input } from '@angular/core';
import { Service } from 'src/app/models/service';

@Component({
  selector: 'app-services-detail',
  templateUrl: './services.component.html',
  styles: [`
    i{
      font-size: 4rem;
    }
    ul{
      list-style-type: none;
    }
    #serviceDetailBody{
      margin-top: 2rem;
    }
    #serviceDetailUser{
      margin-top: 1rem;
    }
    .service{
      font-weight:bold;
    }
    .user{
      font-style: italic;
    }
    #serviceDetailOrder>.btn{
      margin: 2rem 0 0 0;
      padding: 1rem;
      font-size: 1.5rem;
    }
    .techName{
      font-weight:bold;
    }
 
  `]
})
export class ServicesDetailComponent implements OnInit {

  @Input() service: Service;

  constructor() { }

  ngOnInit() {
  }

}

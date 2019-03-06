import { Component, OnInit, Input } from '@angular/core';
import { Service } from 'src/app/models/service';

@Component({
  selector: 'app-services-detail',
  templateUrl: './services.component.html',
  styles: [`
    img{
      height: 20rem;
      width: 17rem;
    }
    i{
      font-size: 4rem;
    }
    ul{
      list-style-type: none;
    }
    #serviceDetailBody{
      margin-top: 2rem;
      background-color:#dddddd;
      padding: 2rem;
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
      margin: 3rem 0 2rem 0;
      padding: 1rem;
      font-size: 1.5rem;
      background-color: #9eb5b3;
    }
    .techName{
      font-weight:bold;
    }
    .serviceDescription{
      padding: 2rem 0 0 0;
      font-size: 1.75rem;
    }
  `]
})
export class ServicesDetailComponent implements OnInit {

  @Input() service: Service;

  constructor() { }

  ngOnInit() {
  }

}

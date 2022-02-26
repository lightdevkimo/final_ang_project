import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { concat } from 'rxjs';

import { cities } from '../_models/user.model';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.scss']
})
export class ListingComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getcities();

  }
  gov: cities[]=[];
  cities: cities[]=[];


  getcities(){
    this.http.get('http://127.0.0.1:8000/api/cities').subscribe(data =>{

      for (let i = 0; i < data['data'].length; i++) {
        this.gov[i]=(data['data'][i]);
      }
    });


  }


  choosegov(event: any){
    this.http.get('http://127.0.0.1:8000/api/findcities/'.concat(event.target.value)).subscribe(data =>{
      for (let i = 0; i < data['data'].length; i++) {
        this.cities[i]=(data['data'][i]);
        console.log(this.cities[i]);
      }
    });
  }

}


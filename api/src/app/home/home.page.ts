import { Component } from '@angular/core';
import { NasaService } from '../nasa.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {
  imagedata:any;
  constructor(private nasaservice: NasaService) {}
  ngOnInit(){
    this.nasaservice.getimageoftheday().subscribe((data)=>{
      this.imagedata = data;
    });
  }
}

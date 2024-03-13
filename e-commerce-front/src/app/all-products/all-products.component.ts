import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {
  // property
  allProduct:any=[]

  constructor(private api:ApiService){}

  ngOnInit(): void {
    this.getAllProductapi()
  }

  getAllProductapi(){
    this.api.getAllProducts().subscribe({
      next:(res:any)=>{
        console.log(res); 
        this.allProduct=res      
      },
      error:(err:any)=>{
        console.log(err);        
      }
    })
  }

}

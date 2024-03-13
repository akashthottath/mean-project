import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  SERVER_URL='http://localhost:3000'

  constructor(private http:HttpClient) { }

  // api call to get all products from database
  getAllProducts(){
    return this.http.get(`${this.SERVER_URL}/products/all`)
  }

  // api call to get a single product
  viewAproduct=(id:any)=>{
    return this.http.get(`${this.SERVER_URL}/product/view/${id}`)
  }
  

  // api call for register
  registerApi=(user:any)=>{
    return this.http.post(`${this.SERVER_URL}/user/register`,user)
  }

  // api call for login
  loginApi=(user:any)=>{
    return this.http.post(`${this.SERVER_URL}/user/login`,user)
  }


}

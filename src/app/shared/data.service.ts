import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private products = [
    {
      id: 1,
      name:'egg', 
      category:'Food', 
      description:'Lorem egg',
      price: 2.50
    },
    {
      id: 2, 
      name:'coca-cola', 
      category:'Drink', 
      description:'Lorem coca', 
      price: 20
    }
  ];

  getAllProducts(){
     return this.products;
  }

  getProductById(id){
    return this.products.filter((product) => product.id == id);
  }
}

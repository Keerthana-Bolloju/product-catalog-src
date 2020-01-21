import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/Model/ProductDetail.model';
import { Subscription } from 'rxjs';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  
  public product:Product[]
  public length:number
  public sortString:String = 'general'
  currentTab:string = 'all';
  public subscription:Subscription

  constructor(private _PRODUCT_SERVICE: ProductService) { }
  ngOnInit() {
    this.products()
  }
  products(){
    this.subscription = this._PRODUCT_SERVICE.getProducts().subscribe(
      data => {
        let keys = Object.keys(data)
        let arr = []
        for (let i in keys) {
          let key = keys[i]
          arr.push(data[key])
          this.product = arr
          this.length = this.product.length
        }
      }
    )
  }

  allProducts(tab:string){
    this.currentTab = tab
  }
  byGeneral(tab:string){
    this.currentTab = tab    
  }
  byOthers(tab:string){
    this.currentTab = tab
  }
 
  drop(event: CdkDragDrop<Product[]>) {
    moveItemInArray(this.product, event.previousIndex, event.currentIndex);
  }
  
  ngOnDestroy() {
    if(this.subscription){
      this.subscription.unsubscribe()
    }
  }

}

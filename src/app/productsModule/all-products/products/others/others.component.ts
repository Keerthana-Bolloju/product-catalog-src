import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Product } from 'src/app/Model/ProductDetail.model';
import { ProductService } from 'src/app/services/product.service';
import { Subscription } from 'rxjs';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-others',
  templateUrl: './others.component.html',
  styleUrls: ['./others.component.scss']
})
export class OthersComponent implements OnInit, OnDestroy {
  public product: Product[];
  public subscription: Subscription;
  public length:number;
  constructor(private _PRODUCT_SERVICE: ProductService) { }
  ngOnInit() {
    this.subscription = this._PRODUCT_SERVICE.getProducts().subscribe(
      data => {
        let keys = Object.keys(data)
        let arr = []
        for (let i in keys) {
          let key = keys[i]
          arr.push(data[key])
          this.product = arr
          this.product = this.product.filter(res => {
            return res.hub.toLocaleLowerCase() != 'general'
          })          
          this.length = this.product.length
        }
      }
    )
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

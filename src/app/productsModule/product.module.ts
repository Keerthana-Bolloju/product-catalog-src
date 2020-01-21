import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { AllProductsComponent } from './all-products/all-products.component';
import { ProductsComponent } from './all-products/products/products.component';
import { ProductComponent } from './all-products/products/product/product.component';
import { ProductService } from '../services/product.service';
import { GeneralComponent } from './all-products/products/general/general.component';
import { OthersComponent } from './all-products/products/others/others.component';
import { ShortTextPipe } from '../pipes/shortText.pipe';

const productRoutes: Routes = [
  { path: '', component: AllProductsComponent },
  { path: 'all/products', component: AllProductsComponent },
]

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    DragDropModule,
    RouterModule.forChild(productRoutes),
  ],
  declarations: [
    AllProductsComponent,
    ProductsComponent,
    ProductComponent,
    GeneralComponent,
    OthersComponent,
    ShortTextPipe
  ],
  providers: [ProductService],
})
export class ProductModule { }

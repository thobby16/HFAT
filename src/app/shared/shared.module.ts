import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './loader/loader.component';
import { AlertComponent } from './alert/alert.component';
import { ServicesModule } from 'src/services/services.module';
import { ProductCardComponent } from './product-card/product-card.component';



@NgModule({
  declarations: [AlertComponent, LoaderComponent, ProductCardComponent],
  imports: [
    CommonModule,
    ServicesModule
  ],
  exports: [AlertComponent, LoaderComponent, ProductCardComponent]
})
export class SharedModule { }

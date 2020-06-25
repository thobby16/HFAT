import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './loader/loader.component';
import { AlertComponent } from './alert/alert.component';
import { ServicesModule } from 'src/services/services.module';



@NgModule({
  declarations: [AlertComponent, LoaderComponent],
  imports: [
    CommonModule,
    ServicesModule
  ],
  exports: [AlertComponent, LoaderComponent]
})
export class SharedModule { }

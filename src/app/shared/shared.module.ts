import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RtNavbarComponent } from './rt-navbar/rt-navbar.component';
import { RtFooterComponent } from './rt-footer/rt-footer.component';
import { CustomMaterialModule } from '../core/custom-material.module';

@NgModule({
  declarations: [RtNavbarComponent, RtFooterComponent],
  imports: [
    CommonModule,
    CustomMaterialModule
  ],
  exports: [
    RtNavbarComponent,
    RtFooterComponent
  ]
})
export class SharedModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RtNavbarComponent } from './rt-navbar/rt-navbar.component';
import { RtFooterComponent } from './rt-footer/rt-footer.component';



@NgModule({
  declarations: [RtNavbarComponent, RtFooterComponent],
  imports: [
    CommonModule
  ],
  exports: [
    RtNavbarComponent,
    RtFooterComponent
  ]
})
export class SharedModule { }

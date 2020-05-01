import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { AsideComponent } from './aside/aside.component';
import { FooterComponent } from './footer/footer.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [HeaderComponent, NavComponent, AsideComponent, FooterComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [HeaderComponent, NavComponent, AsideComponent, FooterComponent]
})
export class LayoutModule { }

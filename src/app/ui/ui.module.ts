import { NgModule, Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { IssuanceManComponent } from './issuance-man/issuance-man.component';
import {RouterModule, Routes} from '@angular/router';
import { ManagementComponent } from './management/management.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot([
    {path: 'issueman', component: IssuanceManComponent},
    {path: 'management', component: ManagementComponent}
    ])
  ],
  declarations: [LayoutComponent, HeaderComponent, FooterComponent, IssuanceManComponent, ManagementComponent],
  exports: [LayoutComponent]

})
export class UiModule { }

import { NgModule, Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { IssuanceManComponent } from './issuance-man/issuance-man.component';
import {RouterModule, Routes, ActivatedRoute, ParamMap} from '@angular/router';
import { ManagementComponent } from './management/management.component';
import { IssuevizComponent } from './issueviz/issueviz.component';
import { switchMap } from 'rxjs/operators';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot([
    {path: 'issueman', component: IssuanceManComponent},
    {path: 'management', component: ManagementComponent},
    {path: 'issueviz/:id', component: IssuevizComponent}
    ])
  ],
  declarations: [LayoutComponent, HeaderComponent, FooterComponent, IssuanceManComponent, ManagementComponent, IssuevizComponent],
  exports: [LayoutComponent]

})
export class UiModule { }

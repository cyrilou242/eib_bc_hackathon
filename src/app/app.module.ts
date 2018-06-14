import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UiModule } from './ui/ui.module';
import { IssuanceManComponent } from './ui/issuance-man/issuance-man.component';
import { ManagementComponent } from './ui/management/management.component';
import {RouterModule, Routes} from '@angular/router';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    UiModule,
    RouterModule.forRoot([
    {path: 'creation', component: IssuanceManComponent},
    {path: 'management', component: ManagementComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

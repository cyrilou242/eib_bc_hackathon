import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UiModule } from './ui/ui.module';
import { IssuanceManComponent } from './ui/issuance-man/issuance-man.component';
import { ManagementComponent } from './ui/management/management.component';
import { IssuevizComponent } from './ui/issueviz/issueviz.component';
import { ScriptHackComponent } from '.ui//scripthack/scripthack.component';
import {RouterModule, Routes, ActivatedRoute, ParamMap} from '@angular/router';
import { switchMap } from 'rxjs/operators';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    UiModule,
    RouterModule.forRoot([
    {path: 'creation', component: IssuanceManComponent},
    {path: 'management', component: ManagementComponent},
    {path: 'issueviz/:id', component: IssuevizComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

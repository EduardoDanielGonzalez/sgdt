import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppNavComponent } from './app-nav/app-nav.component';
import { EnlacesUiComponent } from './components/enlaces/enlaces-ui/enlaces-ui.component';
import { EnlacesListComponent } from './components/enlaces/enlaces-list/enlaces-list.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { EnlacesNavComponent } from './components/enlaces/enlaces-nav/enlaces-nav.component';
import { AutofocusDirective } from './directives/autofocus.directive';
import { NextTabDirective } from './directives/next-tab.directive';
import { EnlacesAddComponent } from './components/enlaces/enlaces-add/enlaces-add.component';
import { EnlacesEditComponent } from './components/enlaces/enlaces-edit/enlaces-edit.component';
import { EnlacesDelComponent } from './components/enlaces/enlaces-del/enlaces-del.component';
import { CuentajpmsUiComponent } from './components/cuentajpms/cuentajpms-ui/cuentajpms-ui.component';
import { CuentajpmsListComponent } from './components/cuentajpms/cuentajpms-list/cuentajpms-list.component';
import { CuentajpmsNavComponent } from './components/cuentajpms/cuentajpms-nav/cuentajpms-nav.component';
import { CuentajpmsAddComponent } from './components/cuentajpms/cuentajpms-add/cuentajpms-add.component';
import { CuentajpmsEditComponent } from './components/cuentajpms/cuentajpms-edit/cuentajpms-edit.component';
import { CuentajpmsDelComponent } from './components/cuentajpms/cuentajpms-del/cuentajpms-del.component';
import { ChequesUiComponent } from './components/cheques/cheques-ui/cheques-ui.component';
import { ChequesListComponent } from './components/cheques/cheques-list/cheques-list.component';
import { ChequesNavComponent } from './components/cheques/cheques-nav/cheques-nav.component';
import { ChequesAddComponent } from './components/cheques/cheques-add/cheques-add.component';
import { ChequesEditComponent } from './components/cheques/cheques-edit/cheques-edit.component';
import { ChequesDelComponent } from './components/cheques/cheques-del/cheques-del.component';

@NgModule({
  declarations: [
    AppComponent,
    AppNavComponent,
    EnlacesUiComponent,
    EnlacesListComponent,
    InicioComponent,
    EnlacesNavComponent,
    AutofocusDirective,
    NextTabDirective,
    EnlacesAddComponent,
    EnlacesEditComponent,
    EnlacesDelComponent,
    CuentajpmsUiComponent,
    CuentajpmsListComponent,
    CuentajpmsNavComponent,
    CuentajpmsAddComponent,
    CuentajpmsEditComponent,
    CuentajpmsDelComponent,
    ChequesUiComponent,
    ChequesListComponent,
    ChequesNavComponent,
    ChequesAddComponent,
    ChequesEditComponent,
    ChequesDelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

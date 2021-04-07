import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InicioComponent } from './components/inicio/inicio.component';
import { EnlacesUiComponent } from './components/enlaces/enlaces-ui/enlaces-ui.component';
import { EnlacesAddComponent } from './components/enlaces/enlaces-add/enlaces-add.component';
import { EnlacesEditComponent } from './components/enlaces/enlaces-edit/enlaces-edit.component';
import { EnlacesDelComponent } from './components/enlaces/enlaces-del/enlaces-del.component';
import { CuentajpmsUiComponent } from './components/cuentajpms/cuentajpms-ui/cuentajpms-ui.component';
import { CuentajpmsAddComponent } from './components/cuentajpms/cuentajpms-add/cuentajpms-add.component';
import { CuentajpmsEditComponent } from './components/cuentajpms/cuentajpms-edit/cuentajpms-edit.component';
import { CuentajpmsDelComponent } from './components/cuentajpms/cuentajpms-del/cuentajpms-del.component';
import { ChequesUiComponent } from './components/cheques/cheques-ui/cheques-ui.component';
import { ChequesAddComponent } from './components/cheques/cheques-add/cheques-add.component';
import { ChequesEditComponent } from './components/cheques/cheques-edit/cheques-edit.component';
import { ChequesDelComponent } from './components/cheques/cheques-del/cheques-del.component';

const routes: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: 'enlaces', component: EnlacesUiComponent },
  { path: 'enlaces-add', component: EnlacesAddComponent },
  { path: 'enlaces-edit/:id', component: EnlacesEditComponent },
  { path: 'enlaces-del/:id', component: EnlacesDelComponent },
  { path: 'cuentasjpm', component: CuentajpmsUiComponent },
  { path: 'cuentasjpm-add', component: CuentajpmsAddComponent },
  { path: 'cuentasjpm-edit/:id', component: CuentajpmsEditComponent },
  { path: 'cuentasjpm-del/:id', component: CuentajpmsDelComponent },
  { path: 'cheques', component: ChequesUiComponent },
  { path: 'cheques/agregar', component: ChequesAddComponent },
  { path: 'cheques/editar/:id', component: ChequesEditComponent },
  { path: 'cheques/borrar/:id', component: ChequesDelComponent },
  { path: '', redirectTo: 'inicio', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
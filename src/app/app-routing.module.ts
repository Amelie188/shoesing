import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChaussureComponent } from './components/chaussure/chaussure.component';
import { DetailChaussureComponent } from './components/detail-chaussure/detail-chaussure.component';
import { AddChaussureComponent } from './components/add-chaussure/add-chaussure.component';
import { EditChaussureComponent } from './components/edit-chaussure/edit-chaussure.component';


const routes: Routes = [
  { path: '', redirectTo: 'chaussure', pathMatch: 'full'},
  { path: 'chaussure', component: ChaussureComponent },
  { path: 'chaussure/ajout', component: AddChaussureComponent },
  { path: 'chaussure/edit/:id' , component: EditChaussureComponent},
  { path: 'chaussure/:id', component: DetailChaussureComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

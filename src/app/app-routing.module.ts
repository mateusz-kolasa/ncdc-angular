import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormComponent } from './form/form.component';
import { TableComponent } from './table/table.component';
import { StartComponent } from './start/start.component';
import { DetailsComponent } from './details/details.component';
import { AuthorComponent } from './author/author.component';

const routes: Routes = [
  { path: '', component: StartComponent },
  { path: 'form', component: FormComponent },
  { path: 'table', component: TableComponent },
  { path: 'id/:id', component: DetailsComponent },
  { path: 'author/:author', component: AuthorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

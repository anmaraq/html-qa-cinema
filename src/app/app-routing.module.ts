import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


const routes: Routes = [
{path: '', redirectsTo: '/dashboard', pathMatch: 'full'}];


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class AppRoutingModule { }

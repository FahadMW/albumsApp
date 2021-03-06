import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { SearchRoutingModule } from './search-routing.module';
import { SearchComponent } from './search.component';
import { LoadingModule } from '../shared/loading/loading.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SearchRoutingModule,
    LoadingModule
  ],
  declarations: [
    SearchComponent
  ],
  exports: [
    SearchComponent
  ]
})
export class SearchModule { }

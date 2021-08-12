import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import {ButtonModule} from 'primeng/button'; 
import {TabMenuModule} from 'primeng/tabmenu';
import {MenuItem} from 'primeng/api';
import { HeaderComponent } from './header/header.component';
import { TableComponent } from './table/table.component';
import { FormComponent } from './form/form.component';
import { StartComponent } from './start/start.component';
import {TableModule} from 'primeng/table';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { BookEffects } from "../app/effects/book.effects"
import { EffectsModule } from '@ngrx/effects';
import { bookReducer } from "../app/reducers/book.reducer"

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TableComponent,
    FormComponent,
    StartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    TabMenuModule,
    TableModule,
    HttpClientModule,
    EffectsModule.forRoot([BookEffects]),
    StoreModule.forRoot({books: bookReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

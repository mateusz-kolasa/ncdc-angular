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
import { bookReducer } from "../app/reducers/book.reducer";
import { historyReducer } from "../app/reducers/history.reducer";
import { DetailsComponent } from './details/details.component';
import { AuthorComponent } from './author/author.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import { HistoryComponent } from './history/history.component';
import { HistoryEffects } from './effects/history.effects';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TableComponent,
    FormComponent,
    StartComponent,
    DetailsComponent,
    AuthorComponent,
    HistoryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    ButtonModule,
    TabMenuModule,
    TableModule,
    InputNumberModule,
    InputTextModule,
    MessageModule,
    MessagesModule,
    HttpClientModule,
    EffectsModule.forRoot([BookEffects, HistoryEffects]),
    StoreModule.forRoot({books: bookReducer, history: historyReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { TodosComponent } from './components/todos/todos.component';

import { NgxsModule } from '@ngxs/store';
import { TodoState } from './state/Todo.state';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin'
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin'


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TodosComponent
  ],
  imports: [
    NgxsModule.forRoot([
      TodoState
    ]), 
    NgxsReduxDevtoolsPluginModule.forRoot(),
    NgxsLoggerPluginModule.forRoot(),
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

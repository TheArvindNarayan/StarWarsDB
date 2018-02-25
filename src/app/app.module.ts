import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ResultsComponent } from './results/results.component';
import { SearchResultPipe } from './search-result.pipe';


@NgModule({
  declarations: [
    AppComponent,
    ResultsComponent,
    SearchResultPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

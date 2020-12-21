import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BodyComponent} from './component/body/body.component';
import {HomeComponent} from './component/home/home.component';
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {ChunkListComponent} from './component/chunk-list/chunk-list.component';

@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    HomeComponent,
    ChunkListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

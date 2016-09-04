import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpModule} from '@angular/http';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {routing} from './app.routing';


@NgModule({
    imports:[CommonModule,HttpModule,BrowserModule,RouterModule,FormsModule,routing],
    declarations:[AppComponent],
    providers:[],
    bootstrap:[AppComponent]
})
export class AppModule{
    
}



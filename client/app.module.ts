import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpModule} from '@angular/http';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {AppComponent} from './app.component';

@NgModule({
    imports:[CommonModule,HttpModule,BrowserModule,RouterModule],
    declarations:[],
    providers:[],
    bootstrap:[AppComponent]
})
export class AppModule{
    
}



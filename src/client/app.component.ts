import {Component} from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';

@Component({
    selector:'my-app',
    template:`
        <router-outlet>
        </router-outlet>
    `
})
export class  AppComponent{
    constructor(router:Router,route:ActivatedRoute){
        
    }
    
} 
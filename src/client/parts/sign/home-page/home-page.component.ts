import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'home-page',
    templateUrl: './home-page.component.html'
})
export class HomePageComponent {
    constructor(router: Router) {
        router.parseUrl(router.url);
    }
    
}